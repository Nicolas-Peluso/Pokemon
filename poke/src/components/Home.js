import React from 'react'
import Style from "./Home.module.scss"
import SlideContainer from './Slide/SlideContainer'

function Home() {
    return (
        <div className={Style.Home}>
            <SlideContainer />
        </div>
    )
}

export default Home
