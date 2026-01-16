"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import Image from "next/image";

const services = [
    {
        title: "High Quality Services",
        description: "We provide the best services for our customers.",
        icon: "/assets/icons/quality.png"
    },
    {
        title: "Explore World",
        description: "Explore the world with our best tour packages.",
        icon: "/assets/icons/explore.png"
    },
    {
        title: "Best Tour Guide",
        description: "We have the best tour guides for our customers.",
        icon: "/assets/icons/guide.png"
    },
    {
        title: "Fast Booking",
        description: "We provide fast booking services for our customers.",
        icon: "/assets/icons/booking.png"
    },
];

export default function Services() {
    return (
        <section className="py-24 px-6 md:px-12 bg-[#050011] text-white">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <motion.div
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeInUp}
                        className="max-w-md"
                    >
                        <div className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center mb-6 text-primary text-xl">
                            ✦
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
                            Which services we provide
                        </h2>
                        <p className="text-gray-400">
                            We provide the best services for our customers. We have the best tour packages and the best tour guides.
                        </p>
                    </motion.div>
                </div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={fadeInUp}
                            className="bg-white/5 p-8 rounded-3xl hover:bg-white/10 transition-colors group cursor-pointer"
                        >
                            <div className="w-16 h-16 mb-6 relative group-hover:scale-110 transition-transform duration-500">
                                <Image
                                    src={service.icon}
                                    alt={service.title}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <h3 className="text-xl font-bold mb-3 font-heading">{service.title}</h3>
                            <p className="text-sm text-gray-400 leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
