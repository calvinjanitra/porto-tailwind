import React from 'react'
import Image from '../assets/Calvin.png'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'
import { Link } from 'react-scroll'
const Banner = () => {
    return (
        <section id='home' className='min-h-[80vh] mt-14 lg:mt-8 lg:min-h-[78vh] flex items-center lg:mb-8'>
            <div className='container mx-auto'>
                <div className='flex flex-col items-center gap-y-8 lg:flex-row lg:items-center lg:gap-x-2'>
                    <div className='flex-1 text-center font-secondary lg:text-left'>
                        <motion.h1 variants={fadeIn('up', 0.3)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='text-[55px] font-bold leading-[0.8] lg:text-[100px]'>
                            CALVIN <span>JANITRA</span>
                        </motion.h1>
                        <motion.div variants={fadeIn('up', 0.4)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='mb-4 text-[36px] lg:text-[50px] font-semibold uppercase leading-[2]'>
                            <span className='mr-4 text-white'>I am a</span>
                            <TypeAnimation sequence={['Developer', 2000, 'IT Enthusiast', 2000, 'Musician', 2000]} speed={50} className='text-accent' wrapper='span' repeat={Infinity} />
                        </motion.div>
                        <motion.p variants={fadeIn('up', 0.7)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='mb-8 max-w-lg mx-auto lg:mx-0'>
                            Hi! My name is Calvin Janitra and I am currently majoring Computer Science at Institut Teknologi Sepuluh Nopember (ITS). I have a high interest in various skills related to computer science and I always eager to
                            learn new things.
                        </motion.p>
                        <motion.div variants={fadeIn('up', 0.8)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
                            <Link to='contact' activeClass='active' smooth={true} spy={true} offset={-200}>
                                <button className='btn btn-lg'>Contact Me</button>
                            </Link>
                            {/* <a href='#' className='text-gradient btn-link'>
                                My Portofolio
                            </a> */}
                        </motion.div>

                        {/* socials */}
                        <motion.div variants={fadeIn('up', 0.8)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='flex text-[40px] gap-x-6 max-w-max mx-auto lg:mx-0'>
                            <a href='https://github.com/calvinjanitra'>
                                <FaGithub className='hover:scale-125 transition-all duration-150' />
                            </a>
                            <a href='www.linkedin.com/in/calvinjanitra'>
                                <FaLinkedin className='hover:scale-125 transition-all duration-150' />
                            </a>
                            <a href='https://www.instagram.com/calvinjanitra/'>
                                <FaInstagram className='hover:scale-125 transition-all duration-150' />
                            </a>
                        </motion.div>
                    </div>
                    <motion.div variants={fadeIn('down', 0.3)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.7 }}>
                        <img src={Image} alt='' width='400px' height='500px' />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Banner
