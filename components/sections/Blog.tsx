"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { Calendar, User } from "lucide-react";

const blogs = [
    {
        image: "https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?q=80&w=2669&auto=format&fit=crop",
        date: "Feb 4, 2024",
        author: "Allie Reed",
        title: "Delta Gets You There We're Ready To Fly",
        category: "Travel"
    },
    {
        image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2621&auto=format&fit=crop",
        date: "Feb 5, 2024",
        author: "Allie Reed",
        title: "Explore, Journey, Discover, Adventure",
        category: "Travel"
    },
    {
        image: "/assets/images/blog_creative.png",
        date: "Feb 6, 2024",
        author: "Allie Reed",
        title: "Creative Holidays Create Your Kind Of Holiday",
        category: "Trend"
    }
];

export default function Blog() {
    return (
        <section className="py-24 px-6 md:px-12 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-0 mb-12">
                    <motion.div
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: false }}
                        variants={fadeInUp}
                    >
                        <span className="text-primary font-medium tracking-wide uppercase text-sm mb-2 block">
                            Best Destination for You
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-secondary">Destinations Near You</h2>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                    >
                        <Button variant="primary" className="px-8">Read All Blogs</Button>
                    </motion.div>
                </div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: false }}
                >
                    {blogs.map((blog, i) => (
                        <motion.div
                            key={i}
                            variants={fadeInUp}
                            className="group cursor-pointer"
                        >
                            <div className="relative h-64 w-full rounded-3xl overflow-hidden mb-6">
                                <Image
                                    src={blog.image}
                                    alt={blog.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-secondary">
                                    {blog.category}
                                </div>
                            </div>

                            <div className="space-y-3">
                                <div className="flex items-center gap-4 text-xs text-gray-500 uppercase tracking-widest font-medium">
                                    <div className="flex items-center gap-1">
                                        <Calendar size={14} className="text-primary" />
                                        {blog.date}
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <User size={14} className="text-primary" />
                                        {blog.author}
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold text-secondary leading-snug group-hover:text-primary transition-colors">
                                    {blog.title}
                                </h3>
                                <p className="text-sm font-bold text-secondary underline underline-offset-4 decoration-primary/50 group-hover:decoration-primary transition-all">
                                    Read More
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
