import React from 'react';

export default function Button01() {
    return (
        <button className='relative group'>
            <span className='bg-neutral-900 blur-0 group-hover:blur-md transition-all absolute top-0 left-0 w-full h-full'></span>
            <p className='text-sm absolute top-0 left-0 w-full h-full grid place-items-center border border-white/40 group-hover:border-4 group-hover:border-white group-hover:tracking-widest transition-all'>
                BUTTON
            </p>
        </button>
    )
}