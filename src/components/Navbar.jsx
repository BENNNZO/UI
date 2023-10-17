import React from 'react';
import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className='fixed top-0 left-0 w-full flex flex-row justify-between px-8 py-2 border-b border-white/20'>
            <div></div>
            <div className='flex flex-row gap-5'>
                <Link href="/">
                    <p>HOME</p>
                </Link>
                <Link href="/buttons">
                    <p>BUTTONS</p>
                </Link>
            </div>
        </nav>
    )
}