import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import Image1 from '../assets/todolist.png';
import Image2 from '../assets/movielist.png';
import Image3 from '../assets/onlinestore.png';
import Image4 from '../assets/lurubatik.png';
import Image5 from '../assets/furniture.png';
import Image6 from '../assets/homesolution.png';
import Image7 from '../assets/loginpage.png';
import Image8 from '../assets/starbuck.png';
import Image9 from '../assets/dashboard.png';
import Image99 from '../assets/comingsoon.png';
const Work = () => {
    return (
        <section id='work' className='section mt-[128px]'>
            <div className='container mx-auto mt-[64px]'>
                <div>
                    <div className='flex-1 flex flex-col gap-y-8 mb-10 lg:mb-0'>
                        <div>
                            <h2
                                className='h3 text-4xl leading-tight text-accent
                            '>
                                My Latest Work{' '}
                            </h2>
                            <p>Here are some of my work! Will add some more soon</p>
                        </div>
                        <div className='flex flex-col lg:flex-row'>
                            <a href='https://coffeeshop-one.vercel.app/' target='_blank'>
                                <motion.div variants={fadeIn('right', 0.3)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='group relative overflow-hidden border-2 border-white/50 rounded-xl m-2'>
                                    <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                                    <img className='group-hover:scale-125 transition-all duration-500' src={Image8} alt='' width={1500} />
                                    <div className='absolute -bottom-full left-8 group-hover:bottom-16 transition-all duration-500 z-50'>
                                        <span className='text-gradient text-xl'>Starbucks</span>
                                    </div>
                                    <div className='absolute -bottom-full left-8 group-hover:bottom-8 transition-all duration-500 z-50 leading-6'>
                                        <span className='text-lg'>Using NextJS, Tailwindcss, Typescript</span>
                                    </div>
                                </motion.div>
                            </a>
                            <a href='https://furniture-nextjs-tailwind.vercel.app/' target='_blank'>
                                <motion.div variants={fadeIn('right', 0.5)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='group relative overflow-hidden border-2 border-white/50 rounded-xl m-2'>
                                    <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                                    <img className='group-hover:scale-125 transition-all duration-500' src={Image5} alt='' width={1500} />
                                    <div className='absolute -bottom-full left-8 group-hover:bottom-16 transition-all duration-500 z-50'>
                                        <span className='text-gradient text-xl'>Furniture</span>
                                    </div>
                                    <div className='absolute -bottom-full left-8 group-hover:bottom-8 transition-all duration-500 z-50 leading-6'>
                                        <span className='text-lg'>Using NextJS, Tailwindcss, Typescript</span>
                                    </div>
                                </motion.div>
                            </a>
                            <a href='https://movielist-reactjs-api.vercel.app/' target='_blank'>
                                <motion.div variants={fadeIn('right', 0.5)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='group relative overflow-hidden border-2 border-white/50 rounded-xl m-2'>
                                    <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                                    <img className='group-hover:scale-125 transition-all duration-500' src={Image2} alt='' width={1500} />
                                    <div className='absolute -bottom-full left-8 group-hover:bottom-16 transition-all duration-500 z-50'>
                                        <span className='text-gradient text-xl'>Movie List</span>
                                    </div>
                                    <div className='absolute -bottom-full left-8 group-hover:bottom-8 transition-all duration-500 z-50 leading-6'>
                                        <span className='text-lg'>Using NextJS and TMDB APi</span>
                                    </div>
                                </motion.div>
                            </a>
                        </div>
                        <div className='flex flex-col lg:flex-row'>
                            <a href='https://online-store-woad.vercel.app/'>
                                <motion.div variants={fadeIn('right', 0.3)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='group relative overflow-hidden border-2 border-white/50 rounded-xl m-2'>
                                    <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                                    <img className='group-hover:scale-125 transition-all duration-500' src={Image3} alt='' />
                                    <div className='absolute -bottom-full left-8 group-hover:bottom-16 transition-all duration-500 z-50'>
                                        <span className='text-gradient text-xl'>Online Store</span>
                                    </div>
                                    <div className='absolute -bottom-full left-8 group-hover:bottom-8 transition-all duration-500 z-50 leading-6'>
                                        <span className='text-lg'>Using HTML, CSS, Bootstrap</span>
                                    </div>
                                </motion.div>
                            </a>
                            <a>
                                <motion.div variants={fadeIn('right', 0.5)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='group relative overflow-hidden border-2 border-white/50 rounded-xl m-2'>
                                    <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                                    <img className='group-hover:scale-125 transition-all duration-500' src={Image4} alt='' />
                                    <div className='absolute -bottom-full left-8 group-hover:bottom-16 transition-all duration-500 z-50'>
                                        <span className='text-gradient text-xl'>Luru Batik</span>
                                    </div>
                                    <div className='absolute -bottom-full left-8 group-hover:bottom-8 transition-all duration-500 z-50 leading-6'>
                                        <span className='text-lg'>Classical 2D Game using Java</span>
                                    </div>
                                </motion.div>
                            </a>
                            <a href='https://home-solution-landing.vercel.app/' target='_blank'>
                                <motion.div variants={fadeIn('right', 0.3)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='group relative overflow-hidden border-2 border-white/50 rounded-xl m-2'>
                                    <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                                    <img className='group-hover:scale-125 transition-all duration-500' src={Image6} alt='' />
                                    <div className='absolute -bottom-full left-8 group-hover:bottom-16 transition-all duration-500 z-50'>
                                        <span className='text-gradient text-xl'>Home Solution</span>
                                    </div>
                                    <div className='absolute -bottom-full left-8 group-hover:bottom-8 transition-all duration-500 z-50 leading-6'>
                                        <span className='text-lg'>Using HTML, CSS</span>
                                    </div>
                                </motion.div>
                            </a>
                        </div>
                        <div className='flex flex-col lg:flex-row'>
                            <a href='https://login-page-html-nine.vercel.app/' target='_blank'>
                                <motion.div variants={fadeIn('right', 0.3)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='group relative overflow-hidden border-2 border-white/50 rounded-xl m-2'>
                                    <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                                    <img className='group-hover:scale-125 transition-all duration-500' src={Image7} alt='' width={1500} />
                                    <div className='absolute -bottom-full left-8 group-hover:bottom-16 transition-all duration-500 z-50'>
                                        <span className='text-gradient text-xl'>Login Page</span>
                                    </div>
                                    <div className='absolute -bottom-full left-8 group-hover:bottom-8 transition-all duration-500 z-50 leading-6'>
                                        <span className='text-lg'>Using HTML, CSS, Javascript</span>
                                    </div>
                                </motion.div>
                            </a>
                            <a href='#'>
                                <motion.div variants={fadeIn('right', 0.3)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='group relative overflow-hidden border-2 border-white/50 rounded-xl m-2'>
                                    <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                                    <img className='group-hover:scale-125 transition-all duration-500' src={Image9} alt='' width={1500} />
                                    <div className='absolute -bottom-full left-8 group-hover:bottom-16 transition-all duration-500 z-50'>
                                        <span className='text-gradient text-xl'>Dashboard Admin</span>
                                    </div>
                                    <div className='absolute -bottom-full left-8 group-hover:bottom-8 transition-all duration-500 z-50 leading-6'>
                                        <span className='text-lg'>Using HTML, CSS, and PHP</span>
                                    </div>
                                </motion.div>
                            </a>
                            <a href='https://online-store-woad.vercel.app/'>
                                <motion.div variants={fadeIn('right', 0.3)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='group relative overflow-hidden border-2 border-white/50 rounded-xl m-2'>
                                    <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                                    <img className='group-hover:scale-125 transition-all duration-500' src={Image99} alt='' width={1500} />
                                    <div className='absolute -bottom-full left-8 group-hover:bottom-16 transition-all duration-500 z-50'>
                                        <span className='text-gradient text-xl'>Coming Soon</span>
                                    </div>
                                    <div className='absolute -bottom-full left-8 group-hover:bottom-8 transition-all duration-500 z-50 leading-6'>
                                        <span className='text-lg'></span>
                                    </div>
                                </motion.div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Work;
