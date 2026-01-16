"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import Image from "next/image";

const partners = [
    { name: "Looo", src: "/assets/logos/looo.png" },
    { name: "Ipsum", src: "/assets/logos/ipsum.png" },
    { name: "LogoPalm", src: "/assets/logos/logopalm.png" },
    { name: "LogoIpsum", src: "/assets/logos/logoipsum.png" },
    { name: "TravelPro", src: "/assets/logos/travelpro.png" },
];

export default function PartnerLogos() {
    // Duplicate partners to ensure seamless infinite scroll
    // 4 copies should be enough for even large screens
    const marqueePartners = [...partners, ...partners, ...partners, ...partners];

    return (
        <section className="py-12 border-b border-gray-100/50 overflow-hidden bg-white">
            <div className="max-w-[1920px] mx-auto relative">
                {/* Gradient Masks for fade effect at edges */}
                <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                <motion.div
                    className="flex items-center gap-16 min-w-max"
                    initial={{ x: 0 }}
                    animate={{ x: "-25%" }} // Move by exactly one set's width (1/4 of total width)
                    transition={{
                        ease: "linear",
                        duration: 30, // Adjust speed here
                        repeat: Infinity,
                    }}
                >
                    {marqueePartners.map((partner, index) => (
                        <div
                            key={`${partner.name}-${index}`}
                            className="relative h-16 w-40 md:w-52 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                        >
                            <Image
                                src={partner.src}
                                alt={partner.name}
                                fill
                                className="object-contain"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
