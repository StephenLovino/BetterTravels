"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, hoverScale } from "@/lib/animations";
import Image from "next/image";
import { Star } from "lucide-react";
import Button from "@/components/ui/Button";

interface Tour {
    id: number;
    title: string;
    image: string;
    rating: number;
    price: number;
    location: string;
}

const tours: Tour[] = [
    {
        id: 1,
        title: "Bali, Indonesia",
        location: "3 Days, 2 Nights", // Using as subtitle based on design
        image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2676&auto=format&fit=crop",
        rating: 4.8,
        price: 550
    },
    {
        id: 2,
        title: "Kyoto, Japan",
        location: "5 Days, 4 Nights",
        image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2670&auto=format&fit=crop",
        rating: 4.9,
        price: 900
    },
    {
        id: 3,
        title: "Santorini, Greece",
        location: "4 Days, 3 Nights",
        image: "/assets/images/santorini.png",
        rating: 4.7,
        price: 750
    }
];

export default function Tours() {
    return (
        <section className="py-24 px-6 md:px-12 bg-background" id="tours">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                >
                    <motion.div variants={fadeInUp}>
                        <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">Most Popular Tours</h2>
                        <p className="text-gray-600 max-w-lg">
                            Discover our most popular destinations and book your next adventure with us.
                        </p>
                    </motion.div>

                    <motion.div variants={fadeInUp}>
                        <Button variant="outline">View All</Button>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                >
                    {tours.map((tour) => (
                        <motion.div
                            key={tour.id}
                            variants={fadeInUp}
                            className="bg-white rounded-[2rem] p-4 shadow-sm hover:shadow-md transition-shadow duration-300"
                        >
                            <div className="relative h-64 w-full rounded-[1.5rem] overflow-hidden mb-4">
                                <Image
                                    src={tour.image}
                                    alt={tour.title}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1 text-sm font-bold text-secondary">
                                    <Star className="w-4 h-4 fill-primary text-primary" />
                                    {tour.rating}
                                </div>
                            </div>

                            <div className="px-2 pb-2">
                                <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <h3 className="text-xl font-bold text-secondary">{tour.title}</h3>
                                        <p className="text-sm text-gray-500">{tour.location}</p>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between mt-4">
                                    <p className="text-2xl font-bold text-primary">
                                        ${tour.price}
                                        <span className="text-sm font-normal text-gray-400 ml-1">/person</span>
                                    </p>
                                    <Button variant="secondary" className="py-2 px-6 text-sm">
                                        Book Now
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
