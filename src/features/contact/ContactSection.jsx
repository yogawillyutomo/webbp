"use client";
import { useEffect, useRef, useState } from "react";
import {
  EmailIcon,
  WhatsAppIcon
} from "@/shared/icons/TechIcons";

export default function Contact() {

    const ref = useRef(null);
const [visible, setVisible] = useState(false);

useEffect(() => {
  const element = ref.current;

  if (!element) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target); // penting
        }
      });
    },
    {
      root: null,
      rootMargin: "0px",
      threshold: 0.05,
    }
  );

  observer.observe(element);

  return () => {
    observer.disconnect();
  };
}, []);
    
useEffect(() => {
  if (typeof window !== "undefined") {
    setTimeout(() => {
      setVisible(true);
    }, 300);
  }
}, []);

  return (
    <section id="contact" className="py-32 relative">

      {/* TOP LINE */}
      <div className="absolute left-0 right-0 top-0 h-px 
        bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" 
      />

      <div className="max-w-4xl mx-auto px-6">

<div
  ref={ref}
  className={`
    relative rounded-3xl overflow-hidden
    border border-[var(--card-border)]
    bg-[var(--card-bg)]
    backdrop-blur-xl
    p-12 md:p-16 text-center
    transition-all duration-700 ease-out
    ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
  `}
>

        <div className="absolute inset-0 pointer-events-none overflow-hidden">
  <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
  <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
</div>
          <div className="relative z-10">


            <div className="inline-block px-4 py-2 rounded-full 
              border border-blue-500/30 bg-blue-500/10 mb-6">
              <span className="text-blue-300 text-sm font-medium tracking-wider">
                LET&apos;S BUILD TOGETHER
              </span>
            </div>

            <h2 className="font-orbitron text-4xl lg:text-5xl font-bold mb-6">
              Siap Memulai Project Anda?
            </h2>

           <p className="text-[var(--muted-text)] text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
  Let&apos;s discuss how we can help transform your ideas into reality.
  Our team is ready to bring your vision to life with cutting-edge technology.
</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">

  {/* PRIMARY CTA */}
  <a
    href="mailto:bakaranproject@gmail.com?subject=Inquiry%20Project"
    className="
      btn-cyber animate-pulse-glow
      px-8 py-4 rounded-lg
      font-semibold text-lg
      bg-linear-to-r from-blue-600 to-cyan-500
      text-white
      flex items-center justify-center gap-3
    "
  >
 <EmailIcon />

    Konsultasi Gratis Sekarang
  </a>

  {/* SECONDARY CTA */}
  <a
    href="#portfolio"
    className="
      btn-cyber
      px-8 py-4 rounded-lg
      font-semibold text-lg
      border border-blue-500/50
      hover:bg-blue-500/10
      flex items-center justify-center gap-3
      transition-all duration-300
    "
  >
    <svg
      className="w-5 h-5 text-cyan-400"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>

    View Our Work
  </a>

</div>

            <div className="mt-12 flex flex-wrap justify-center gap-8">

  {/* EMAIL */}
 <a
  href="mailto:bakaranproject@gmail.com"
  className="flex items-center gap-2 text-[var(--muted-text)] hover:text-blue-400 transition-colors"
>
  <EmailIcon />
  <span>bakaranproject@gmail.com</span>
</a>

  {/* WHATSAPP */}
  <a
    href="https://wa.me/6281234567890"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 text-[var(--muted-text)] hover:text-cyan-400 transition-colors"
  >
<WhatsAppIcon className="w-5 h-5 text-blue-500" />
    <span>+62 812 3456 7890</span>
  </a>

</div>

          </div>
        </div>

      </div>
    </section>
  );
}