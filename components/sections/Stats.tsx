"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import Image from "next/image";

const stats = [
    { value: "20+", label: "Years Experience" },
    { value: "250+", label: "Destinations Collaboration" },
    { value: "120+", label: "Tourist Destinations" },
    { value: "98%", label: "Happy Customers" },
];

export default function Stats() {
    return (
        <section className="py-20 px-6 md:px-12 bg-white/50" id="about">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Left Image */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="relative h-[600px] w-full rounded-[3rem] overflow-hidden"
                >
                    <Image
                        src="https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=2574&auto=format&fit=crop"
                        alt="Traveller overlooking mountains"
                        fill
                        className="object-cover"
                    />
                </motion.div>

                {/* Right Content */}
                <motion.div
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: false, margin: "-100px" }}
                    className="flex flex-col gap-8"
                >
                    <motion.div variants={fadeInUp}>
                        <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
                            Discover The <br />
                            Beauty of <span className="font-serif italic text-primary">Nature.</span>
                        </h2>
                        <p className="text-gray-600 leading-relaxed mb-8">
                            Pacific Travel offers the best tours and travel experience for your next vacation.
                            We carefully select the best destinations and provide you with the best experience.
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-2 gap-y-10 gap-x-8"
                        variants={fadeInUp}
                    >
                        {stats.map((stat, i) => (
                            <div key={i} className="flex flex-col gap-1">
                                <span className="text-4xl font-bold text-primary">{stat.value}</span>
                                <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">{stat.label}</span>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>

            </div>
        </section>
    );
}
