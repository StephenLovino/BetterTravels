"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import Image from "next/image";
import { useRef } from "react";
import Button from "@/components/ui/Button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const locations = [
    { id: 1, name: "Rome, Italy", image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=2596&auto=format&fit=crop" },
    { id: 2, name: "Paris, France", image: "/assets/images/paris.png" },
    { id: 3, name: "London, UK", image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2670&auto=format&fit=crop" },
    { id: 4, name: "Tokyo, Japan", image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=2694&auto=format&fit=crop" },
    { id: 5, name: "New York, USA", image: "https://images.unsplash.com/photo-1485871981535-5b17f5b3b276?q=80&w=2670&auto=format&fit=crop" },
];

export default function Locations() {
    const containerRef = useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
        if (containerRef.current) {
            containerRef.current.scrollBy({ left: -400, behavior: "smooth" });
        }
    };

    const scrollRight = () => {
        if (containerRef.current) {
            containerRef.current.scrollBy({ left: 400, behavior: "smooth" });
        }
    };

    return (
        <section className="py-24 px-6 md:px-12 bg-background overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <motion.div
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: false }}
                        variants={fadeInUp}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">Choose Your Locations</h2>
                        <p className="text-gray-600 max-w-lg">
                            Select the best locations for your next vacation from our list of most visited places.
                        </p>
                    </motion.div>

                    <motion.div
                        className="flex gap-4"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: false }}
                    >
                        <button
                            onClick={scrollLeft}
                            className="p-4 rounded-full border border-gray-200 hover:bg-primary hover:text-white hover:border-transparent transition-all duration-300"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button
                            onClick={scrollRight}
                            className="p-4 rounded-full border border-gray-200 hover:bg-primary hover:text-white hover:border-transparent transition-all duration-300"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </motion.div>
                </div>

                <motion.div
                    ref={containerRef}
                    className="flex gap-8 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8 }}
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {locations.map((loc) => (
                        <div
                            key={loc.id}
                            className="min-w-[300px] md:min-w-[400px] h-[500px] relative rounded-[2.5rem] overflow-hidden flex-shrink-0 snap-center group cursor-pointer"
                        >
                            <Image
                                src={loc.image}
                                alt={loc.name}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
                            <div className="absolute bottom-8 left-8">
                                <h3 className="text-3xl font-bold text-white mb-2">{loc.name}</h3>
                                <div className="h-1 w-12 bg-white rounded-full" />
                            </div>
                        </div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}
