import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'
import { img1 } from '../assets/cover1.jpg'
import { img2 } from '../assets/cover2.jpg'
import { img3 } from '../assets/cover3.jpg'
import { img4 } from '../assets/cover4.jpg'

const Contact = () => {
    return (
        <section className='section py-16 lg:section' id='contact'>
            <div className='container mx-auto'>
                <div className='flex flex-col lg:flex-row'>
                    <div>
                        <div>
                            <h4 className='text-xl uppercase text-accent'>Get in Touch</h4>
                            <h2>Lets work</h2>
                        </div>
                    </div>
                    <form action=''></form>
                </div>
            </div>
            Contact
        </section>
    )
}

export default Contact
