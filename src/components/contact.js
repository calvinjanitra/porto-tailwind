import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'

const Contact = () => {
    return (
        <section className='section py-16 lg:section mb-[164px]' id='contact'>
            <div className='container mx-auto'>
                <div className='flex flex-col lg:flex-row justify-between'>
                    <motion.div variants={fadeIn('right', 0.5)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.7 }}>
                        <div>
                            <h4 className='text-3xl uppercase text-accent font-primary mb-2'>Get in Touch</h4>
                            <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>
                                Lets work
                                <br /> together!
                            </h2>
                        </div>
                    </motion.div>
                    <motion.form variants={fadeIn('left', 0.5)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.7 }}>
                        <input className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all' type='text' placeholder='Your Name' />
                        <input className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all' type='text' placeholder='Your Email' />
                        <textarea className='bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12' type='text' placeholder='Your Message'></textarea>
                        <button className='btn btn-lg'>Send Message</button>
                    </motion.form>
                </div>
            </div>
        </section>
    )
}

export default Contact
