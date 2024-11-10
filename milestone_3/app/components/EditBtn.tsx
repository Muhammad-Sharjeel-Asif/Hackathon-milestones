'use client'

import { Button } from "./Button";
import { PrintBtn } from "./PrintBtn";

export const EditBtn = () => {
    const edit = () => {

        const showForm = document.getElementById('FormTemp') as HTMLElement | null;

        if (showForm) {
            if (showForm.style.display === 'none') {
                showForm.style.display = 'block';
                document.body.style.backgroundColor = '#5B5BD6'

            } else {
                showForm.style.display = 'none';
            }
        }

        const showTemp = document.getElementById('resumeTemp') as HTMLElement | null;
        const showBtn = document.getElementById('generateBtn') as HTMLElement | null;

        if (showTemp && showBtn) {
            if (showTemp.style.display === 'none' && showBtn.style.display === 'none') {
                showTemp.style.display = 'block';
                showBtn.style.display = 'block';
                
            } else if (showTemp.style.display === 'block' && showBtn.style.display === 'block') {
                showTemp.style.display = 'none';
                showBtn.style.display = 'none';
            }
        }


    }

    return (
        <div className='flex justify-center'>
            <button onClick={edit} className='bg-blue-950 px-5 py-2 rounded-md text-lg font-semibold text-white'>Edit</button>

            <PrintBtn/>
        </div>
    )
}
// #5B5BD6