import React from 'react'

export const PrintBtn = () => {
    let print = () => {
        window.print();
        const heading1 = document.getElementById('heading') as HTMLElement | null;
        if (heading1) {
            heading1.style.display === 'none'
        }
    }

    return (
        <div>
            <button id="generateBtn" type='submit' onClick={print} className='bg-blue-950 px-5 py-2 rounded-md text-lg font-semibold text-white'>
                Print
            </button>
        </div>
    )
}
