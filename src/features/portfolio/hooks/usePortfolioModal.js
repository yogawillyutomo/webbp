"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const FOCUSABLE_SELECTOR = [
    "a[href]",
    "button:not([disabled])",
    "input:not([disabled])",
    "select:not([disabled])",
    "textarea:not([disabled])",
    '[tabindex]:not([tabindex="-1"])',
].join(",");

export default function usePortfolioModal() {
    const [selectedProject, setSelectedProject] = useState(null);
    const [isVisible, setIsVisible] = useState(false);
    const [originRect, setOriginRect] = useState(null);
    const [isClosing, setIsClosing] = useState(false);

    const openerRef = useRef(null);
    const dialogRef = useRef(null);
    const closeTimerRef = useRef(null);

    const openModal = (event, project) => {
        openerRef.current = event.currentTarget;
        setOriginRect(event.currentTarget.getBoundingClientRect());
        setSelectedProject(project);
    };

    const closeModal = useCallback(() => {
        if (closeTimerRef.current !== null) {
            window.clearTimeout(closeTimerRef.current);
        }

        setIsClosing(true);
        setIsVisible(false);

        const reduceMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        closeTimerRef.current = window.setTimeout(() => {
            setSelectedProject(null);
            setOriginRect(null);
            setIsClosing(false);

            const opener = openerRef.current;
            openerRef.current = null;
            closeTimerRef.current = null;
            opener?.focus();
        }, reduceMotion ? 0 : 500);
    }, []);

    useEffect(() => {
        if (!selectedProject) return;

        const frame = window.requestAnimationFrame(() => {
            setIsVisible(true);

            const focusable = dialogRef.current?.querySelector(
                FOCUSABLE_SELECTOR
            );

            if (focusable instanceof HTMLElement) {
                focusable.focus();
            } else {
                dialogRef.current?.focus();
            }
        });

        return () => window.cancelAnimationFrame(frame);
    }, [selectedProject]);

    useEffect(() => {
        if (!selectedProject) return;

        const dialog = dialogRef.current;
        if (!dialog) return;

        const onKeyDown = (event) => {
            if (event.key === "Escape") {
                event.preventDefault();
                closeModal();
                return;
            }

            if (event.key !== "Tab") return;

            const focusableItems = Array.from(
                dialog.querySelectorAll(FOCUSABLE_SELECTOR)
            ).filter(
                (element) =>
                    element instanceof HTMLElement &&
                    !element.hasAttribute("disabled")
            );

            if (focusableItems.length === 0) {
                event.preventDefault();
                dialog.focus();
                return;
            }

            const first = focusableItems[0];
            const last = focusableItems[focusableItems.length - 1];

            if (event.shiftKey && document.activeElement === first) {
                event.preventDefault();
                last.focus();
            } else if (!event.shiftKey && document.activeElement === last) {
                event.preventDefault();
                first.focus();
            }
        };

        const originalOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", onKeyDown);

        return () => {
            document.body.style.overflow = originalOverflow;
            window.removeEventListener("keydown", onKeyDown);
        };
    }, [selectedProject, closeModal]);

    useEffect(() => {
        return () => {
            if (closeTimerRef.current !== null) {
                window.clearTimeout(closeTimerRef.current);
            }
        };
    }, []);

    const getFlipTransform = () => {
        if (!originRect) return {};

        const modalWidth = Math.min(900, window.innerWidth * 0.92);
        const modalHeight = Math.min(720, window.innerHeight * 0.86);
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        const startX = originRect.left + originRect.width / 2;
        const startY = originRect.top + originRect.height / 2;
        const deltaX = startX - centerX;
        const deltaY = startY - centerY;
        const scaleX = originRect.width / modalWidth;
        const scaleY = originRect.height / modalHeight;

        if (!isVisible && !isClosing) {
            return {
                transform: `
                    translate(calc(-50% + ${deltaX}px), calc(-50% + ${deltaY}px))
                    scale(${scaleX}, ${scaleY})
                `,
                opacity: 0.6,
            };
        }

        if (isClosing) {
            return {
                transform: "translate(-50%, -50%) scale(0.96)",
                opacity: 0,
            };
        }

        return {
            transform: "translate(-50%, -50%) scale(1)",
            opacity: 1,
        };
    };

    return {
        selectedProject,
        isVisible,
        dialogRef,
        openModal,
        closeModal,
        getFlipTransform,
    };
}
