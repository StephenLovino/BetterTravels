"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative min-h-screen pt-24 pb-12 px-6 md:px-12 flex items-center overflow-hidden">
            {/* Decorative Background Elements if needed */}

            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Left Content */}
                <motion.div
                    className="flex flex-col gap-6"
                    variants={staggerContainer}
                    initial="initial"
                    animate="animate"
                >
                    <motion.div variants={fadeInUp}>
                        <span className="text-primary font-medium tracking-wide uppercase text-sm">
                            Explore the world
                        </span>
                    </motion.div>

                    <motion.h1
                        className="text-5xl md:text-7xl font-bold text-secondary leading-[1.1]"
                        variants={fadeInUp}
                    >
                        Making the world <br />
                        <span className="text-primary italic font-serif">your playground.</span>
                    </motion.h1>

                    <motion.p
                        className="text-gray-600 text-lg max-w-md leading-relaxed"
                        variants={fadeInUp}
                    >
                        Travel to any corner of the world, without going around in circles. We make your travel dreams a reality.
                    </motion.p>

                    <motion.div
                        className="flex flex-wrap items-center gap-4 mt-4"
                        variants={fadeInUp}
                    >
                        <Button variant="primary">Let's Explore</Button>
                        <Button variant="outline">Contact Us</Button>
                    </motion.div>

                    {/* Stats or users avatars could go here */}
                </motion.div>

                {/* Right Image */}
                <motion.div
                    className="relative h-[500px] lg:h-[700px] w-full rounded-[3rem] overflow-hidden"
                    initial={{ opacity: 0, scale: 0.95, x: 20 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <Image
                        src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2670&auto=format&fit=crop"
                        alt="Scenic Travel Destination"
                        fill
                        className="object-cover"
                        priority
                    />
                </motion.div>
            </div>
        </section>
    );
}
