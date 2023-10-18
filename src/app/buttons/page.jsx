import React from 'react';

import Button01 from '@/components/buttons/Button01';
import Button02 from '@/components/buttons/Button02';
import Button03 from '@/components/buttons/Button03';

export default function ButtonsPage() {
    return (
        <section>
            <h1 className='text-center mt-32 mb-20 text-7xl font-bold'>BUTTONS</h1>
            <div className='grid grid-cols-4 gap-x-20 gap-y-12 px-32 w-[80rem] mx-auto'>
                <Button01 />
                <Button02 />
                <Button03 />
            </div>
        </section>
    )
}