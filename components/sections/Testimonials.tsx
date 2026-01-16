"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import Image from "next/image";

const testimonials = [
    {
        name: "Elowen Vance",
        role: "Cultural Explorer",
        image: "/assets/images/testimonial_elowen.png",
        text: "The trip was absolutely amazing! Everything was perfectly organized from start to finish, and the guides were truly knowledgeable about local history."
    },
    {
        name: "Thorne Sterling",
        role: "Landscape Chaser",
        image: "/assets/images/testimonial_thorne.png",
        text: "I took some of the best photos of my life during this tour. The scenery was breathtaking and the pacing was perfect for capturing every moment."
    },
    {
        name: "Zara Kincaid",
        role: "Nomadic Soul",
        image: "/assets/images/testimonial_zara.png",
        text: "As a solo traveler, I felt distinctively safe and welcomed throughout the entire journey. It was a refreshing experience I can't wait to repeat!"
    }
];

export default function Testimonials() {
    return (
        <section className="py-24 px-6 md:px-12 bg-background" id="testimonials">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    className="text-center mb-16"
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">What Says Our Visitors</h2>
                    <p className="text-gray-600 max-w-xl mx-auto">
                        Read genuine reviews from our happy customers about their experience with us.
                    </p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                >
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            variants={fadeInUp}
                            className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 relative"
                        >
                            <div className="absolute -top-6 left-8">
                                <div className="relative w-12 h-12 rounded-full overflow-hidden border-4 border-white shadow-md">
                                    <Image src={t.image} alt={t.name} fill className="object-cover" />
                                </div>
                            </div>

                            <div className="mt-6">
                                <p className="text-gray-600 italic mb-6">"{t.text}"</p>
                                <div>
                                    <h4 className="font-bold text-secondary">{t.name}</h4>
                                    <p className="text-xs text-primary font-medium uppercase tracking-wider">{t.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
