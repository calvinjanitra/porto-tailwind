import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'
import Image1 from '../assets/todolist.png'
import Image2 from '../assets/movielist.png'
import Image3 from '../assets/onlinestore.png'

const Work = () => {
    return (
        <section id='work' className='section mt-[128px]'>
            <div className='container mx-auto mt-[60px]'>
                <div>
                    <div className='flex-1 flex flex-col gap-y-8 mb-10 lg:mb-0'>
                        <div>
                            <h2
                                className='h2 leading-tight text-accent
                            '>
                                My Latest Work{' '}
                            </h2>
                            <p>Here are some of my work! Will add some more soon</p>
                        </div>
                        <div className='flex flex-col lg:flex-row'>
                            <a href='https://online-store-woad.vercel.app/' target=''>
                                <motion.div variants={fadeIn('right', 0.3)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='group relative overflow-hidden border-2 border-white/50 rounded-xl m-2'>
                                    <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                                    <img className='group-hover:scale-125 transition-all duration-500' src={Image1} alt='' />
                                    <div className='absolute -bottom-full left-16 group-hover:bottom-24 transition-all duration-500 z-50'>
                                        <span className='text-gradient text-2xl'>Simple To-Do List</span>
                                    </div>
                                    <div className='absolute -bottom-full left-16 group-hover:bottom-12 transition-all duration-500 z-50'>
                                        <span className='text-xl'>Using ReactJS</span>
                                    </div>
                                </motion.div>
                            </a>
                            <a href=''>
                                <motion.div variants={fadeIn('right', 0.5)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='group relative overflow-hidden border-2 border-white/50 rounded-xl m-2'>
                                    <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                                    <img className='group-hover:scale-125 transition-all duration-500' src={Image2} alt='' />
                                    <div className='absolute -bottom-full left-16 group-hover:bottom-24 transition-all duration-500 z-50'>
                                        <span className='text-gradient text-2xl'>Simple To-Do List</span>
                                    </div>
                                    <div className='absolute -bottom-full left-16 group-hover:bottom-12 transition-all duration-500 z-50'>
                                        <span className='text-xl'>Using ReactJS</span>
                                    </div>
                                </motion.div>
                            </a>
                        </div>
                        <div className='flex flex-col lg:flex-row'>
                            <a href='https://online-store-woad.vercel.app/'>
                                <motion.div variants={fadeIn('right', 0.3)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='group relative overflow-hidden border-2 border-white/50 rounded-xl m-2'>
                                    <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                                    <img className='group-hover:scale-125 transition-all duration-500' src={Image3} alt='' />
                                    <div className='absolute -bottom-full left-16 group-hover:bottom-24 transition-all duration-500 z-50'>
                                        <span className='text-gradient text-2xl'>Online Store</span>
                                    </div>
                                    <div className='absolute -bottom-full left-16 group-hover:bottom-12 transition-all duration-500 z-50'>
                                        <span className='text-xl'>Using HTML, CSS, and Framework Bootstraps</span>
                                    </div>
                                </motion.div>
                            </a>
                            <motion.div variants={fadeIn('right', 0.5)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='group relative overflow-hidden border-2 border-white/50 rounded-xl m-2'>
                                <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                                <img className='group-hover:scale-125 transition-all duration-500' src={Image1} alt='' />
                                <div className='absolute -bottom-full left-16 group-hover:bottom-24 transition-all duration-500 z-50'>
                                    <span className='text-gradient text-2xl'>Online Store</span>
                                </div>
                                <div className='absolute -bottom-full left-16 group-hover:bottom-12 transition-all duration-500 z-50'>
                                    <span className='text-xl'>Using HTML, CSS, and Framework Bootstraps</span>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Work
