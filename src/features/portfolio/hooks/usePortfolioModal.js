import { useState, useEffect } from "react";

export default function usePortfolioModal() {

    /*
    =========================
    STATE
    =========================
    */

    const [selectedProject, setSelectedProject] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const [originRect, setOriginRect] = useState(null);


    /*
    =========================
    OPEN MODAL
    =========================
    */

    const openModal = (event, project) => {

        const rect = event.currentTarget.getBoundingClientRect();

        // simpan posisi awal card
        setOriginRect({
            top: rect.top,
            left: rect.left,
            width: rect.width,
            height: rect.height
        });

        setSelectedProject(project);
        setCurrentImageIndex(0);

    };


    /*
    =========================
    CLOSE MODAL
    =========================
    */

    const closeModal = () => {

        setIsVisible(false);

        setTimeout(() => {
            setSelectedProject(null);
            setOriginRect(null);
        }, 700);

    };


    /*
    =========================
    MODAL VISIBILITY
    =========================
    */

    useEffect(() => {

        if (selectedProject) {
            setTimeout(() => setIsVisible(true), 20);
        }

    }, [selectedProject]);


    /*
=========================
CAROUSEL
=========================
*/

    const nextImage = () => {

        setCurrentImageIndex(prev =>
            (prev + 1) % selectedProject.images.length
        );

    };

    const prevImage = () => {

        setCurrentImageIndex(prev =>
            (prev - 1 + selectedProject.images.length) %
            selectedProject.images.length
        );

    };

    /*
    =========================
    BODY SCROLL LOCK
    =========================
    */

    useEffect(() => {

        if (!selectedProject) return;

        const scrollbarWidth =
            window.innerWidth - document.documentElement.clientWidth;

        document.body.style.overflow = "hidden";
        document.body.style.paddingRight = `${scrollbarWidth}px`;

        const handleKey = (e) => {

            if (e.key === "Escape") {
                closeModal();
            }

            if (e.key === "ArrowRight") {
                nextImage();
            }

            if (e.key === "ArrowLeft") {
                prevImage();
            }

        };

        window.addEventListener("keydown", handleKey);

        return () => {
            document.body.style.overflow = "auto";
            document.body.style.paddingRight = "0px";
            window.removeEventListener("keydown", handleKey);
        };

    }, [selectedProject, nextImage, prevImage, closeModal]);





    /*
    =========================
    MORPH ANIMATION STYLE
    =========================
    */
    const getMorphStyle = () => {

        if (!originRect) return {};

        if (!isVisible) {
            return {
                top: originRect.top + "px",
                left: originRect.left + "px",
                width: originRect.width + "px",
                height: originRect.height + "px",
                transform: "translate(0,0)"
            };
        }

        const modalWidth = Math.min(900, window.innerWidth * 0.92);

        return {
            top: "50%",
            left: "50%",
            width: modalWidth + "px",
            maxHeight: "90vh",
            transform: "translate(-50%, -50%)"
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
        originRect,

        openModal,
        closeModal,

        nextImage,
        prevImage,

        getMorphStyle,
        setCurrentImageIndex

    };

}