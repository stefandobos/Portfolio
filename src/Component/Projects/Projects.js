import React from 'react';
import "./Projects.css";
import HomeButton from "../Useful/HomeButton.js";

function Projects() {
    return(
        <div className="cnt-pr">
            <HomeButton />
            <div className='cnt-box'>
                <a className='box-slide-pr1 slide_1' href='https://stefandobos.github.io/NewsStie/'></a>
                <div className='descr'><div className='dsc-cont'>This is a kind of template for a news site. This project was made using React.js </div></div>
            </div>
            <div className='cnt-box'>
                <a className='box-slide-pr2 slide_1' href='https://stefandobos.github.io/shopify-react-project/'></a>
                <div className='descr'><div className='dsc-cont'>This is a e-commerce site. This project was made using React.js and Shopify.</div></div>
            </div>
            <div className='more'>MORE ARE COMING...</div>
        </div>
    )
}

export default Projects;