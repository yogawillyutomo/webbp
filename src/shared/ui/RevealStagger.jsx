"use client";

import { motion } from "framer-motion";

const container = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12
        }
    }
};

export default function RevealStagger({
    children,
    className = "",
    repeat = false
}) {
    return (
        <motion.div
            className={className}
            variants={container}
            initial={false}
            whileInView="visible"
            viewport={{
                once: !repeat,
                margin: "-120px"
            }}
        >
            {children}
        </motion.div>
    );
}