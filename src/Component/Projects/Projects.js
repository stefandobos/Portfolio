import React from 'react';
import "./Projects.css";
import HomeButton from "../Useful/HomeButton.js";

function Projects() {
    return(
        <div className="cnt-pr">
            <div>
                <HomeButton />
            </div>
            <div className='content'>
                <div className='cnt-box'>
                    <a className='box-slide-pr3 slide_1' href='https://face-app-detect.herokuapp.com/' />
                    <div className='descr'><div className='dsc-cont'>Face App Project.This app detect faces in image.</div></div>
                </div>
                <div className='cnt-box'>
                    <a className='box-slide-pr1 slide_1' href='https://stefandobos.github.io/NewsStie/' />
                    <div className='descr'><div className='dsc-cont'>This is a template for a news site. This project was made using React.js </div></div>
                </div>
                <div className='cnt-box'>
                    <a className='box-slide-pr2 slide_1' href='https://stefandobos.github.io/shopify-react-project/' />
                    <div className='descr'><div className='dsc-cont'>This is an e-commerce template. This project was made using React.js and Shopify.</div></div>
                </div>
            </div>
            <div>
                <div className='more'>MORE ARE COMING...</div>
            </div>
        </div>
    )
}

export default Projects;