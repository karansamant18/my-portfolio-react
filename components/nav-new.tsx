// components/Navbar.tsx
import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-lg font-semibold">
                    <Link href="/">
                        <a>MyApp</a>
                    </Link>
                </div>
                <div className="flex items-center space-x-4">
                    <Link href="/about">
                        <a className="text-gray-300 hover:text-white">About</a>
                    </Link>
                    <Link href="/contact">
                        <a className="text-gray-300 hover:text-white">Contact</a>
                    </Link>
                    <input
                        type="text"
                        placeholder="Search..."
                        className="px-2 py-1 rounded border border-gray-300"
                    />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
