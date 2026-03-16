"use client";

import { useState, useEffect } from "react";

export default function usePortfolioModal() {

    const [selectedProject, setSelectedProject] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    const [originRect, setOriginRect] = useState(null);
    const [originImageRect, setOriginImageRect] = useState(null);
    const [isClosing, setIsClosing] = useState(false);
    /*
    =========================
    OPEN MODAL
    =========================
    */

    const openModal = (event, project) => {

        const card = event.currentTarget;
        const rect = card.getBoundingClientRect();

        const image = card.querySelector("[data-project-image]");
        const imageRect = image?.getBoundingClientRect();

        setOriginRect(rect);
        setOriginImageRect(imageRect);

        setSelectedProject(project);
        setCurrentImageIndex(0);
    };

    /*
    =========================
    CLOSE MODAL
    =========================
    */

    const closeModal = () => {

        setIsClosing(true);
        setIsVisible(false);

        setTimeout(() => {
            setSelectedProject(null);
            setOriginRect(null);
            setOriginImageRect(null);
            setIsClosing(false);
        }, 600);

    };

    /*
    =========================
    MODAL VISIBILITY
    =========================
    */

    useEffect(() => {

        if (selectedProject) {
            requestAnimationFrame(() => {
                setIsVisible(true);
            });
        }

    }, [selectedProject]);

    /*
    =========================
    CAROUSEL
    =========================
    */

    const nextImage = () => {

        if (!selectedProject) return;

        setCurrentImageIndex((prev) =>
            (prev + 1) % selectedProject.images.length
        );
    };

    const prevImage = () => {

        if (!selectedProject) return;

        setCurrentImageIndex((prev) =>
            (prev - 1 + selectedProject.images.length) %
            selectedProject.images.length
        );
    };

    /*
    =========================
    MODAL FLIP TRANSFORM
    =========================
    */
    const getFlipTransform = () => {

        if (!originRect) return {};

        const modalWidth = Math.min(900, window.innerWidth * 0.92);
        const modalHeight = window.innerHeight * 0.8;

        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        const startX = originRect.left + originRect.width / 2;
        const startY = originRect.top + originRect.height / 2;

        const deltaX = startX - centerX;
        const deltaY = startY - centerY;

        const scaleX = originRect.width / modalWidth;
        const scaleY = originRect.height / modalHeight;

        /*
        OPEN
        */

        if (!isVisible && !isClosing) {
            return {
                transform: `
            translate(calc(-50% + ${deltaX}px), calc(-50% + ${deltaY}px))
            scale(${scaleX}, ${scaleY})
            `
            };
        }

        /*
        CLOSE
        */

        if (isClosing) {
            return {
                transform: `
            translate(-50%, -50%)
            scale(0.1)
            `,
                opacity: 0
            };
        }

        /*
        MODAL STATE
        */

        return {
            transform: "translate(-50%, -50%) scale(1)",
            opacity: 1
        };
    };

    /*
    =========================
    IMAGE FLIP TRANSFORM
    =========================
    */

    const getImageFlipTransform = () => {

        if (!originImageRect) return {};

        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        const startX = originImageRect.left + originImageRect.width / 2;
        const startY = originImageRect.top + originImageRect.height / 2;

        const deltaX = startX - centerX;
        const deltaY = startY - centerY;

        const modalWidth = Math.min(900, window.innerWidth * 0.92);

        const scale = originImageRect.width / modalWidth;

        if (!isVisible) {
            return {
                transform: `
        translate(${deltaX}px, ${deltaY}px)
        scale(${scale})
      `
            };
        }

        return {
            transform: "translate(0px,0px) scale(1)"
        };

    };

    /*
    =========================
    RETURN
    =========================
    */

    return {
        selectedProject,
        currentImageIndex,
        isVisible,

        openModal,
        closeModal,

        nextImage,
        prevImage,

        getFlipTransform,
        getImageFlipTransform,

        setCurrentImageIndex
    };
}