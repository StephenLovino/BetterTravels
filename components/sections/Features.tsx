"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { CheckCircle2 } from "lucide-react";
import Button from "@/components/ui/Button";
import Image from "next/image";

const features = [
    "Professional and Certified Guides",
    "Exclusive Custom Packages",
    "24/7 Premium Support",
    "Best Price Guarantee",
];

export default function Features() {
    return (
        <section className="py-24 px-6 md:px-12 bg-white" id="features">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Left Content */}
                <motion.div
                    className="flex flex-col gap-8 order-2 lg:order-1"
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                >
                    <motion.div variants={fadeInUp}>
                        <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
                            Why Choose Us
                        </h2>
                        <p className="text-gray-600 leading-relaxed max-w-lg mb-8">
                            We ensure that you’ll embark on a perfectly planned, safe vacation at a price you can afford.
                        </p>
                    </motion.div>

                    <motion.div
                        className="space-y-4"
                        variants={staggerContainer}
                    >
                        {features.map((feature, i) => (
                            <motion.div
                                key={i}
                                variants={fadeInUp}
                                className="flex items-center gap-4"
                            >
                                <div className="bg-primary/10 p-2 rounded-full text-primary">
                                    <CheckCircle2 size={20} />
                                </div>
                                <span className="text-lg font-medium text-secondary">{feature}</span>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div variants={fadeInUp} className="mt-4">
                        <Button variant="outline">Learn More</Button>
                    </motion.div>
                </motion.div>


                {/* Right Image */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative h-[600px] w-full rounded-[3rem] overflow-hidden order-1 lg:order-2"
                >
                    <Image
                        src="/assets/images/why_choose_us.png"
                        alt="Happy traveler in nature"
                        fill
                        className="object-cover"
                    />
                </motion.div>

            </div>
        </section>
    );
}
