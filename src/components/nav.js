import React from 'react'
import { BiHomeAlt, BiUser } from 'react-icons/bi'
import { BsClipboardData, BsBriefcase, BsChatSquare } from 'react-icons/bs'
import { Link } from 'react-scroll'

const Nav = () => {
    return (
        <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>
            <div className='container mx-auto'>
                <div className='w-full bg-black/20 h-[70px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between text-2xl text-white/50 items-center'>
                    <Link to='home' className='cursor-pointer w-[60px] h-[60px] flex justify-center items-center' activeClass='active' smooth={true} spy={true} offset={-200}>
                        <BiHomeAlt />
                    </Link>
                    <Link to='skills' className='cursor-pointer w-[60px] h-[60px] flex justify-center items-center' activeClass='active' smooth={true} spy={true}>
                        <BiUser />
                    </Link>
                    <Link to='work' className='cursor-pointer w-[60px] h-[60px] flex justify-center items-center' activeClass='active' smooth={true} spy={true}>
                        <BsClipboardData />
                    </Link>
                    <Link to='music' className='cursor-pointer w-[60px] h-[60px] flex justify-center items-center' activeClass='active' smooth={true} spy={true}>
                        <BsBriefcase />
                    </Link>
                    <Link to='contact' className='cursor-pointer w-[60px] h-[60px] flex justify-center items-center' activeClass='active' smooth={true} spy={true}>
                        <BsChatSquare />
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Nav
