"use client";

import { useCallback, useEffect, useState } from "react";

export default function usePortfolioModal() {
    const [selectedProject, setSelectedProject] = useState(null);
    const [isVisible, setIsVisible] = useState(false);
    const [originRect, setOriginRect] = useState(null);
    const [isClosing, setIsClosing] = useState(false);

    const openModal = (event, project) => {
        setOriginRect(event.currentTarget.getBoundingClientRect());
        setSelectedProject(project);
    };

    const closeModal = useCallback(() => {
        setIsClosing(true);
        setIsVisible(false);

        window.setTimeout(() => {
            setSelectedProject(null);
            setOriginRect(null);
            setIsClosing(false);
        }, 500);
    }, []);

    useEffect(() => {
        if (!selectedProject) return;

        const frame = window.requestAnimationFrame(() => {
            setIsVisible(true);
        });

        return () => window.cancelAnimationFrame(frame);
    }, [selectedProject]);

    useEffect(() => {
        if (!selectedProject) return;

        const onKeyDown = (event) => {
            if (event.key === "Escape") {
                closeModal();
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
        openModal,
        closeModal,
        getFlipTransform,
    };
}
