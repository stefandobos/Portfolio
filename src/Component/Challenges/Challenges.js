import React from 'react';
import "./Challenges.css"
import Home_button from "../Useful/Home_button.js";

function Challenges() {
    return(
        <div className="cnt-ch">
            <Home_button />
            <div className='cnt-bx'>
                <a className='box-slide-1 slide' href='https://ch-pricing-component-with-toggle-master.vercel.app/'></a>
                <div className='description'><div className='ds-cont'>This is a challenge from www.frontendmentro.io. Is a Pricing component with toggle. Only HTML and CSS</div></div>
            </div>
            <div className='cnt-bx'>
                <a className='box-slide-2 slide' href='https://ch-profile-card-component-main.vercel.app/'></a>
                <div className='description'><div className='ds-cont'>This is a challenge from www.frontendmentro.io. Is a Profile card component. Only HTML and CSS  </div></div>
            </div>
            
        </div>
    )
}

export default Challenges