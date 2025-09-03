import { useState } from "react";
import bookCover from "../assets/booklogo.jpg";
export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="bg-white shadow sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

                <a href="#" className="text-xl font-bold text-green-700 flex items-center gap-3">
                    <a href="#">
                        <img src={bookCover} alt="Book Cover" className="h-10 " />
                    </a>
                    Health, Happiness & Destiny
                </a>

                {/* Desktop Menu */}
                <div className="space-x-6 hidden md:block">
                    <a href="#about" className="hover:text-green-600">About</a>
                    <a href="#description" className="hover:text-green-600">Book</a>
                    <a href="#highlights" className="hover:text-green-600">Highlights</a>
                    <a href="#author" className="hover:text-green-600">Author</a>
                    <a href="#buy" className="hover:text-green-600">Buy</a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-700"
                    onClick={() => setOpen(!open)}
                >
                    ☰
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden px-6 pb-4 space-y-3 bg-white shadow">
                    <a href="#about" className="block hover:text-green-600">About</a>
                    <a href="#description" className="block hover:text-green-600">Book</a>
                    <a href="#highlights" className="block hover:text-green-600">Highlights</a>
                    <a href="#author" className="block hover:text-green-600">Author</a>
                    <a href="#buy" className="block hover:text-green-600">Buy</a>
                </div>
            )}
        </nav>
    );
}
