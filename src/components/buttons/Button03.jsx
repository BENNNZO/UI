import React from 'react';

export default function Button01() {
    return (
        <button className='relative group'>
            <span className='bg-white/10 blur-0 group-hover:blur-lg transition-all absolute top-0 left-0 w-full h-full'></span>
            <p className='text-sm absolute top-0 left-0 w-full h-full grid place-items-center border group-hover:border-8 group-hover:tracking-widest transition-all'>
                BUTTON
            </p>
        </button>
    )
}