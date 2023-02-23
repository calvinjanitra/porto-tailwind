import React from 'react'
// components
import Banner from './components/banner'
import Header from './components/header'
import Nav from './components/nav'
// import About from './components/about'
import Skills from './components/Skills'
import Music from './components/music'
import Work from './components/Work'
import Contact from './components/contact'

const App = () => {
    return (
        <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
            <Header />
            <Banner />
            <Nav />
            {/* <About /> */}
            <Skills />
            <Work />
            <Music />
            {/* <Contact /> */}
            <div className='h-[4000px]'></div>
        </div>
    )
}

export default App
