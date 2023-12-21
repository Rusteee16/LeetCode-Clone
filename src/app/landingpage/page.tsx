"use client";

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const LandingPage = () => {
  return (
    <div>
        <div className='h-dvh relative top-neg-80 box-border header'>
            <div className="background absolute w-full h-full transform skew-y-12 origin-right ">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            </div>
            <div className='px-4 mx-auto flex justify-between absolute w-9/12 navbar'>
                <div className='flex'>
                <Image
                    src="/LeetCode_logo_rvs.png"
                    alt="LeetCode"
                    className='w-full h-10'
                    width={100}
                    height={40}
                    priority
                    />
                <div className='text-white text-2xl font-light pl-2.5'>
                    <span>Leetcode</span>
                </div>
                </div>
                <div className='signin'>
                    <Link href={"/"} className='text-white rounded-2xl hover:bg-white hover:text-black px-3 py-2'>Sign in</Link>
                </div>
            </div>
            <div className='w-9/12 px-5 mt-20 mx-auto'>
                <div className='flex py-15 '>
                    <Image
                        src="/3.png"
                        alt="Home Ipad"
                        className='relative mt-24 origin-center w-96 h-72 ipad'
                        width={100}
                        height={40}
                        priority
                    />
                    <div className="container m-auto relative">
                        <div className="m-12 text-center">
                            <h1 className='text-white text-4xl font-medium'>A New Way to Learn</h1>
                            <p className='text-sm font-medium text-slate-400 py-8 px-14 tracking wide leading-8'>LeetCode is the best platform to help you enhance your skills, expand your knowledge and prepare for technical interviews.</p>
                            <Link className="text-white bg-[#1da09c] hover:bg-[#17807d] px-3 py-2 rounded-2xl" href="/">Create Account</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='container w-8/12'>
            <Image src="/india-icon.png" alt="San Francisco" width={100} height={40 } className='-w-4'/>
                <h2>
                    <span>Made with <i className="fa fa-heart" aria-hidden="true"></i> in SF</span>
                </h2>
                <p><span>At LeetCode, our mission is to help you improve yourself and land your dream job. We have a sizable repository of interview resources for many companies. In the past few years, our users have landed jobs at top companies around the world.</span></p>
        </div>
    </div>
  )
}

export default LandingPage