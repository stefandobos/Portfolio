import React from 'react';
import "./Intro.css";
import 'animate.css'
import { Link } from "react-router-dom";
import * as Icon from 'react-bootstrap-icons';



class Intro extends React.Component{
    constructor(props){
        super(props);
        this.state={
            visible:false,
        };
        this.toggleBox = this.toggleBox.bind(this);
    }

    toggleBox(){
        this.setState({
            visible: !this.state.visible
        })
    }

    render(){
        return(
            <div className='cnt-intro'>
                <p>Click me</p>
                <div onClick={this.toggleBox} className="img-cont"></div>
                <div className ='cnt-ab'>
                    {this.state.visible?
                    <div className='aboutMe animate__animated animate__fadeIn'>
                        <h1>*** Hello ***</h1>
                        <div> 
                            My name is Dobos Stefan, I am a beginner programmer and I live in Iasi.
                            I was student at faculty of Telecommunications Electronics and Information Technology "Gheorghe Asachi" Iasi, I gave up in the third year because of health problems.
                            During recovery time I started to learn programming, firt I started with C++ next I learn basic Java, SQLite.
                            After that I decided to go for web development, I started with basic HTML, CSS, Javascript and eventually Reactjs. 
                        </div>
                    </div> :
                    null
                    }
                </div>
                <div className='cnt-pg'>
                        <Link to="/projects" className='box-btn'>
                            <Icon.Hammer color='#e1b382' size={50} />
                            <div>PROJECTS</div>
                        </Link>
                        <Link to='/challenges' className='box-btn'>
                            <Icon.LightningFill color='#FFDf6C' size={50} />
                            <div>CHALLENGES</div>
                        </Link>
                </div>
            </div>
        )
        
    }
}


export default Intro;