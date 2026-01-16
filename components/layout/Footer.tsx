"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Linkedin, Send } from "lucide-react";
import Button from "@/components/ui/Button";

const instagramImages = [
    "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=150&h=150&fit=crop",
    "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=150&h=150&fit=crop",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=150&h=150&fit=crop",
    "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=150&h=150&fit=crop",
    "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=150&h=150&fit=crop",
    "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=150&h=150&fit=crop"
];

const shortLinks = ["About Us", "Team Members", "Tour News", "Privacy Policy"];
const quickLinks = ["Contact Us", "Destinations", "Blogs", "FAQ & Questions"];

const SocialIcon = ({ Icon }: { Icon: any }) => (
    <a href="#" className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-secondary hover:bg-primary hover:text-white transition-colors">
        <Icon size={16} />
    </a>
);

export default function Footer() {
    return (
        <footer className="bg-[#050011] text-white rounded-t-[3rem]">
            {/* Newsletter Section - Darker Banner */}
            <div className="bg-[#0B051D] py-20 px-6 md:px-12 rounded-t-[3rem]">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <h2 className="text-sm font-bold text-primary uppercase tracking-widest">Subscribe Newsletter</h2>
                    <h3 className="text-4xl md:text-5xl font-bold">
                        Get The Latest Updates <br /> Into Your Inbox
                    </h3>
                    <div className="relative max-w-xl mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="w-full h-14 pl-6 pr-36 rounded-full bg-white text-secondary outline-none focus:ring-2 ring-primary/50 placeholder:text-gray-400"
                        />
                        <div className="absolute top-1.5 right-1.5">
                            <Button variant="primary" className="h-11 px-6">Subscribe <Send size={16} /></Button>
                        </div>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
                        <input type="checkbox" id="agree" className="accent-primary w-4 h-4" />
                        <label htmlFor="agree">By signing up you agree to our <a href="#" className="text-primary hover:underline">Privacy Policy</a></label>
                    </div>
                </div>
            </div>

            {/* Links Section */}
            <div className="max-w-7xl mx-auto px-6 md:px-12 pt-20 pb-8">

                {/* Big Brand Header */}
                <div className="mb-16 text-center">
                    <h2
                        className="text-6xl md:text-9xl font-bold italic text-white tracking-tight"
                        style={{ fontFamily: 'var(--font-playfair), serif' }}
                    >
                        BetterTravel
                    </h2>
                    <p className="text-gray-400 mt-6 text-lg md:text-xl font-light font-sans">
                        Making the world your playground.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 underline-offset-4 border-t border-white/10 pt-16">
                    {/* Short Links */}
                    <div className="flex flex-col gap-4">
                        <h3 className="font-bold text-lg mb-2">Short Links</h3>
                        {shortLinks.map((link, i) => (
                            <Link key={i} href="#" className="text-gray-400 hover:text-white hover:underline transition-colors text-sm">
                                {link}
                            </Link>
                        ))}
                        <div className="mt-8">
                            <p className="text-gray-400 text-sm mb-2">+123 456 789 000</p>
                            <p className="text-gray-400 text-sm">yourmailaddress@gmail.com</p>
                            <div className="flex gap-4 mt-4">
                                <SocialIcon Icon={Facebook} />
                                <SocialIcon Icon={Twitter} />
                                <SocialIcon Icon={Instagram} />
                                <SocialIcon Icon={Linkedin} />
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col gap-4">
                        <h3 className="font-bold text-lg mb-2">Quick Links</h3>
                        {quickLinks.map((link, i) => (
                            <Link key={i} href="#" className="text-gray-400 hover:text-white hover:underline transition-colors text-sm">
                                {link}
                            </Link>
                        ))}
                    </div>

                    {/* Instagram */}
                    <div className="flex flex-col gap-4">
                        <h3 className="font-bold text-lg mb-2">Instagram Post</h3>
                        <div className="grid grid-cols-3 gap-2">
                            {instagramImages.map((src, i) => (
                                <div key={i} className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer">
                                    <Image
                                        src={src}
                                        alt={`Instagram post ${i + 1}`}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
                    <p>© 2024 All Reserved by DevKonek</p>
                </div>
            </div>
        </footer>
    );
}
