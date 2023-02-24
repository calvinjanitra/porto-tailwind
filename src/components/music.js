import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'
import img1 from '../assets/cover1.jpg'
import img2 from '../assets/cover2.jpg'
import img3 from '../assets/cover3.jpg'
import img4 from '../assets/cover4.jpg'
import img5 from '../assets/cover5.jpg'
import img6 from '../assets/cover6.png'
import img7 from '../assets/cover7.png'
import img8 from '../assets/cover8.png'
import img9 from '../assets/cover9.png'

const Music = () => {
    return (
        <section id='music' className='section mt-[128px]'>
            <div className='container mx-auto mt-[100px]'>
                <div>
                    <div className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
                        <div>
                            <h2
                                className='h2 leading-tight text-accent
                            '>
                                Check Out My Music Cover!{' '}
                            </h2>
                            <p>Covering my hobbies in music fields</p>
                        </div>
                        <div className='flex flex-col lg:flex-row'>
                            <a href='https://www.instagram.com/p/ClNlhNNgyvD/' target=' '>
                                <motion.div variants={fadeIn('right', 0.3)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='group relative overflow-hidden border-2 border-white/50 rounded-xl m-2'>
                                    <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                                    <img className='group-hover:scale-125 transition-all duration-500' src={img5} alt='' />
                                    {/* <div className='absolute -bottom-full left-16 group-hover:bottom-24 transition-all duration-500 z-50'>
                                    <span className='text-gradient text-2xl'>Simple To-Do List</span>
                                </div>
                                <div className='absolute -bottom-full left-16 group-hover:bottom-12 transition-all duration-500 z-50'>
                                    <span className='text-xl'>Using ReactJS</span>
                                </div> */}
                                </motion.div>
                            </a>
                            <a href='https://vt.tiktok.com/ZS8u74Vh6/' target=''>
                                <motion.div variants={fadeIn('right', 0.3)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='group relative overflow-hidden border-2 border-white/50 rounded-xl m-2'>
                                    <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                                    <img className='group-hover:scale-125 transition-all duration-500' src={img1} alt='' />
                                    {/* <div className='absolute -bottom-full left-16 group-hover:bottom-24 transition-all duration-500 z-50'>
                                    <span className='text-gradient text-2xl'>Simple To-Do List</span>
                                </div>
                                <div className='absolute -bottom-full left-16 group-hover:bottom-12 transition-all duration-500 z-50'>
                                    <span className='text-xl'>Using ReactJS</span>
                                </div> */}
                                </motion.div>
                            </a>
                            <a href='https://www.instagram.com/p/Cm06Q1hh6Ld/' target=' '>
                                <motion.div variants={fadeIn('right', 0.5)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='group relative overflow-hidden border-2 border-white/50 rounded-xl m-2'>
                                    <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                                    <img className='group-hover:scale-125 transition-all duration-500' src={img2} alt='' />
                                    {/* <div className='absolute -bottom-full left-16 group-hover:bottom-24 transition-all duration-500 z-50'>
                                    <span className='text-gradient text-2xl'>Simple To-Do List</span>
                                </div>
                                <div className='absolute -bottom-full left-16 group-hover:bottom-12 transition-all duration-500 z-50'>
                                    <span className='text-xl'>Using ReactJS</span>
                                </div> */}
                                </motion.div>
                            </a>
                        </div>
                        <div className='flex flex-col lg:flex-row'>
                            <a href='https://www.instagram.com/p/CjciOQ1AN77/' target=' '>
                                <motion.div variants={fadeIn('right', 0.3)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='group relative overflow-hidden border-2 border-white/50 rounded-xl m-2'>
                                    <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                                    <img className='group-hover:scale-125 transition-all duration-500' src={img3} alt='' />
                                    {/* <div className='absolute -bottom-full left-16 group-hover:bottom-24 transition-all duration-500 z-50'>
                                    <span className='text-gradient text-2xl'>Simple To-Do List</span>
                                </div>
                                <div className='absolute -bottom-full left-16 group-hover:bottom-12 transition-all duration-500 z-50'>
                                    <span className='text-xl'>Using ReactJS</span>
                                </div> */}
                                </motion.div>
                            </a>
                            <a href='https://www.instagram.com/p/CjIXvhBgzCm/' target=' '>
                                <motion.div variants={fadeIn('right', 0.5)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='group relative overflow-hidden border-2 border-white/50 rounded-xl m-2'>
                                    <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                                    <img className='group-hover:scale-125 transition-all duration-500' src={img4} alt='' />
                                    {/* <div className='absolute -bottom-full left-16 group-hover:bottom-24 transition-all duration-500 z-50'>
                                    <span className='text-gradient text-2xl'>Simple To-Do List</span>
                                </div>
                                <div className='absolute -bottom-full left-16 group-hover:bottom-12 transition-all duration-500 z-50'>
                                    <span className='text-xl'>Using ReactJS</span>
                                </div> */}
                                </motion.div>
                            </a>
                            <a href='https://www.instagram.com/p/B7s_EWXB7NV/' target=' '>
                                <motion.div variants={fadeIn('right', 0.5)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='group relative overflow-hidden border-2 border-white/50 rounded-xl m-2'>
                                    <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                                    <img className='group-hover:scale-125 transition-all duration-500' src={img6} alt='' />
                                    {/* <div className='absolute -bottom-full left-16 group-hover:bottom-24 transition-all duration-500 z-50'>
                                    <span className='text-gradient text-2xl'>Simple To-Do List</span>
                                </div>
                                <div className='absolute -bottom-full left-16 group-hover:bottom-12 transition-all duration-500 z-50'>
                                    <span className='text-xl'>Using ReactJS</span>
                                </div> */}
                                </motion.div>
                            </a>
                        </div>
                        <div className='flex flex-col lg:flex-row'>
                            <a href='https://www.instagram.com/p/CXVq0I9gueY/' target=' '>
                                <motion.div variants={fadeIn('right', 0.3)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='group relative overflow-hidden border-2 border-white/50 rounded-xl m-2'>
                                    <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                                    <img className='group-hover:scale-125 transition-all duration-500' src={img7} alt='' />
                                    {/* <div className='absolute -bottom-full left-16 group-hover:bottom-24 transition-all duration-500 z-50'>
                                    <span className='text-gradient text-2xl'>Simple To-Do List</span>
                                </div>
                                <div className='absolute -bottom-full left-16 group-hover:bottom-12 transition-all duration-500 z-50'>
                                    <span className='text-xl'>Using ReactJS</span>
                                </div> */}
                                </motion.div>
                            </a>
                            <a href='https://www.instagram.com/p/B6AufOEhRvK/' target=' '>
                                <motion.div variants={fadeIn('right', 0.5)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='group relative overflow-hidden border-2 border-white/50 rounded-xl m-2'>
                                    <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                                    <img className='group-hover:scale-125 transition-all duration-500' src={img8} alt='' />
                                    {/* <div className='absolute -bottom-full left-16 group-hover:bottom-24 transition-all duration-500 z-50'>
                                    <span className='text-gradient text-2xl'>Simple To-Do List</span>
                                </div>
                                <div className='absolute -bottom-full left-16 group-hover:bottom-12 transition-all duration-500 z-50'>
                                    <span className='text-xl'>Using ReactJS</span>
                                </div> */}
                                </motion.div>
                            </a>
                            <a href='https://youtu.be/_NKk8VFN7KM' target=' '>
                                <motion.div variants={fadeIn('right', 0.5)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='group relative overflow-hidden border-2 border-white/50 rounded-xl m-2'>
                                    <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                                    <img className='group-hover:scale-125 transition-all duration-500' src={img9} alt='' />
                                    {/* <div className='absolute -bottom-full left-16 group-hover:bottom-24 transition-all duration-500 z-50'>
                                    <span className='text-gradient text-2xl'>Simple To-Do List</span>
                                </div>
                                <div className='absolute -bottom-full left-16 group-hover:bottom-12 transition-all duration-500 z-50'>
                                    <span className='text-xl'>Using ReactJS</span>
                                </div> */}
                                </motion.div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Music
