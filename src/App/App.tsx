import React, {FC} from 'react';
import './App.css';
import {Header, Services, SliderList} from "../components";
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
        </div>
    );
}
