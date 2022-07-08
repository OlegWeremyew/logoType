import React, {FC} from 'react';
import './App.css';
import {About, Footer, Header, News, Services, SliderList} from "../components";
import Particles from "react-tsparticles";
import {option, particlesInit} from "./particles";

export const App: FC = () => {
    return (
        <div>
            <Particles
                className='particle'
                id="tsparticles"
                options={option}
                init={particlesInit}
            />
            <Header/>
            <SliderList/>
            <Services/>
            <About/>
            {/*  <News/>
            <Footer/>*/}
        </div>
    );
}
