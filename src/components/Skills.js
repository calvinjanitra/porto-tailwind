import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { Link } from 'react-scroll';

const skills = [
    {
        name: 'Front-End Developer',
        description: 'Using HTML, CSS, Javascript, Typescript. Also able to use Framework such as ReactJS, NextJS, Bootstrap, Tailwindcss',
        link: 'Learn more',
    },
    {
        name: 'Back-End Developer',
        description: 'Able to use Basic PHP',
        link: 'Learn more',
    },
    {
        name: 'C/C++',
        description: 'Being able to use C/C++ to do algorithm',
        link: 'Learn more',
    },
    {
        name: 'Java',
        description: 'Using Java to make Application and 2D Game',
        link: 'Learn more',
    },
];

const Skills = () => {
    return (
        <section id='skills' className='section'>
            <div className='container mx-auto'>
                <div className='flex flex-col lg:flex-row'>
                    <motion.div variants={fadeIn('right', 0.3)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mb-12 lg:mb-0'>
                        <h2 className='h2 text-accent mb-6'>My Skills</h2>
                        <h3 className='h3 max-w-[455px] mb-16'>I am currently on 4th semester of Informatics Engineering</h3>
                        <Link to='work' smooth={true} spy={true}>
                            <button className='btn btn-sm'>See My Projects</button>
                        </Link>
                        {/* <img src='' alt='' /> */}
                    </motion.div>
                    <div className='flex-1'>
                        <div>
                            {skills.map((service, index) => {
                                const { name, description, link } = service;
                                return (
                                    <motion.div
                                        variants={fadeIn('up', 0.4)}
                                        initial='hidden'
                                        whileInView={'show'}
                                        viewport={{ once: false, amount: 0.7 }}
                                        className='border-b border-white/20 h-[146px] mb-[38px] flex justify-between'
                                        key={index}>
                                        <div className='max-w-[476px]'>
                                            <h4 className='text-[20px] tracking-wider font-primary font-semibold'>{name}</h4>
                                            <p>{description}</p>
                                        </div>
                                        {/* <div>Link</div> */}
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
