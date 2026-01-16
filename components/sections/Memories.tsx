"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import Image from "next/image";
import { Search, MapPin, Building2 } from "lucide-react";

const features = [
    {
        icon: Search,
        title: "Search and Booking Functionality",
        desc: "You generally have to look around for a while before finding suitable options."
    },
    {
        icon: MapPin,
        title: "Destination Guides and Reviews",
        desc: "Get in-depth insights and real traveler reviews to plan your perfect trip with confidence."
    },
    {
        icon: Building2,
        title: "Hotel Comparison and Booking",
        desc: "Compare prices and amenities across thousands of hotels to find the best stay for your budget."
    }
];

export default function Memories() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });
    // Start rotated left (-100deg), center upright (0deg), end rotated right (100deg)
    const rotate = useTransform(scrollYProgress, [0, 1], [-100, 100]);

    return (
        <section ref={ref} className="py-24 px-6 md:px-12 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                {/* Left Content */}
                <motion.div
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                >
                    <motion.span variants={fadeInUp} className="text-primary font-medium tracking-wide uppercase text-sm mb-2 block">
                        Why Choose Us
                    </motion.span>
                    <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-secondary mb-12 leading-tight">
                        Creating Memories <br />
                        You’ll Want Revisit
                    </motion.h2>

                    <div className="space-y-8">
                        {features.map((f, i) => (
                            <motion.div key={i} variants={fadeInUp} className="group">
                                <div className="flex items-center gap-4 mb-2 cursor-pointer">
                                    <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                        <f.icon size={18} />
                                    </div>
                                    <h3 className="text-lg font-bold text-secondary">{f.title}</h3>
                                </div>
                                {f.desc && (
                                    <p className="text-sm text-gray-500 pl-14 max-w-sm leading-relaxed">
                                        {f.desc}
                                    </p>
                                )}
                                <div className="h-px bg-gray-100 w-full mt-6" />
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Right Image Mask */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative pt-12"
                >
                    {/* Circular badge */}
                    <motion.div
                        style={{ rotate }}
                        className="absolute top-0 left-0 bg-white rounded-full p-6 shadow-xl z-20"
                    >
                        <div className="w-24 h-24 rounded-full border border-dashed border-primary flex items-center justify-center p-2">
                            <span className="text-[10px] font-bold tracking-widest uppercase text-center text-secondary">
                                Explore <br /> More <br /> World
                            </span>
                        </div>
                    </motion.div>

                    <div className="relative w-full aspect-square rounded-full overflow-hidden border-8 border-gray-50/50 shadow-2xl">
                        <Image
                            src="/assets/images/hiker.png"
                            alt="Couple hiking"
                            fill
                            className="object-cover"
                        />
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
