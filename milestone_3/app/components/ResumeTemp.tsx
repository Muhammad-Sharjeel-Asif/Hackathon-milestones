import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { EditBtn } from "./EditBtn"


export const ResumeTemp = () => {
  return (
    <div id='resumeTemp' style={{display: 'none'}}>
      <div  className='flex mx-20'>
      <div id="left" className='w-2/5 bg-[#198484]'>
        <div id="img" className='flex justify-center bg-transparent mt-10 mb-2'>
          <Image src='' width={250} height={250} alt='Profile-Image' id='imageResume' className='border-4 border-black rounded-xl'></Image>
        </div>

        <div className='mx-10 mt-8'>
          <h2 className="font-bold white text-4xl pb-1">About Me</h2>
          <p id='aboutResume' className="font-sans font-semibold white text-xl mt-1 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non delectus magnam similique quas. Veritatis odit vero nesciunt eaque cumque in! ipsum dolor sit amet consectetur adipisicing elit. Doloribus sapiente porro architecto optio ut voluptas quaerat excepturi, aliquid nobis tempora</p>
        </div>

        <div className='mx-10 my-8'>
          <h2 className="font-bold white text-4xl pb-1">Contact Me</h2>
          <p id='contactResume' className="font-sans font-semibold white text-xl py-1">Contact: 0319-0371435</p>
          <Link href=''><p id='emailResume' className="font-sans font-semibold white text-xl py-1">Email: m.sharjeelasif1435@gmail.com</p></Link>
          {/* <p id='addressResume' className="font-sans font-semibold white text-xl py-1">Address: Malir Saudabad, Karachi</p> */}
          <Link href=''><p id='fbLinkResume' className="font-sans font-semibold white text-xl py-1">Facebook: www.facebook.com</p></Link>
          <Link href=''><p id='gitLinkResume' className="font-sans font-semibold white text-xl py-1">GitHub: www.github.com</p></Link>
          <Link href=''><p id='LinkedInResume' className="font-sans font-semibold white text-xl py-1">LinkedIn: www.linkedin.com</p></Link>
        </div>


        <div className='mx-10 my-8'>
          <h2 className="font-bold white text-4xl pb-1">Certification</h2>
          <ul id='CerResume' className='list-disc font-sans font-semibold white text-xl mt-2 mb-8 ml-8'>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
          </ul>
        </div>
      </div>






      {/* rigth-sec */}
      <div id="right" className='w-3/5 bg-white text-[#198484]'>
        <div className='mt-12 mb-4 bg-[#198484] text-white py-7'>
          <h2 id='nameResume' className="font-semibold white text-5xl ml-7">MUHAMMAD SHARJEEL ASIF</h2>
          <p id='desigResume' className="font-sans font-semibold white text-xl ml-7">FULL-STACK DEVELOPER</p>
        </div>

        <div className='mx-8'>
          <h2 className="font-semibold white text-4xl">Objectives</h2>
          <p id='objResume' className="font-sans font-semibold white text-xl mt-1 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non delectus magnam similique quas. Veritatis odit vero nesciunt eaque cumque in! ipsum dolor sit amet consectetur adipisicing elit. Doloribus sapiente porro architecto optio ut voluptas quaerat excepturi, aliquid nobis tempora repellat beatae aut molestias neque rerum ipsum animi a quibusdam. Est facere voluptatum sed eum? Voluptatem</p>

          <hr className='bg-black m-0 p-0'/>

          <h2 className="font-semibold white text-4xl">Qualification</h2>
          <ul id='QualResume' className="LiResume font-sans font-semibold white text-xl mt-2 mb-4 ">
            <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li>
            <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li>
            <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li>
            <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li>
            <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li>
            <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li>
            <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li>
          </ul>


        <h2 className="font-semibold white text-4xl pb-1">Skills</h2>
          <ul id='skillResume' className='list-disc font-sans font-semibold white text-xl mt-2 mb-4 ml-8'>
            <li>HTML 5</li>
            <li>Tailwind CSS</li>
            <li>Javascript</li>
            <li>Typescript</li>
            <li>Next JS</li>
          </ul>

          <h2 className="font-semibold white text-4xl">Experience</h2>
          <p id='expResume' className="font-sans font-semibold white text-xl mt-2 mb-8 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non delectus magnam similique quas. Veritatis odit vero nesciunt eaque cumque in! ipsum dolor sit amet consectetur adipisicing elit. Doloribus sapiente porro architecto optio ut voluptas quaerat excepturi, aliquid nobis tempora repellat beatae aut molestias neque rerum ipsum animi a quibusdam. Est facere voluptatum sed eum? Voluptatem, magni libero, illo quaerat alias ea distinctio consequatur ad tempora velit iste officiis magnam?</p>
          
        </div>
      </div>
      </div>
      <EditBtn />
    </div>
  )
}
