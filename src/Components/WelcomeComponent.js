import React from 'react';
import logo from './logo.png';

const font = {
    color: "#3A3042"
}

const background = {
        height: '100vh',
        background: '#EDFFD9',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        
}

const outer_welcome_container = {
    height: '100vh',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'

}

const welcome_container = {
    width: '400px',
    textAlign: 'center',
    color: "#3A3042",
    paddingBottom: '10vh'
   
}


const image_style = {
    width: '200px'

}

const title_style = {
    paddingTop: '2vh',
    paddingBottom: '2vh'
}

const button_container = {
    

}
const detail_button = {
    margin: "0px 20px"
}

const start_button = {
    margin: "0px 20px"
}

class WelcomeComponent extends React.Component {

  


    render(){
        return(
         
            <div style={background}>
                <div style={outer_welcome_container}>
                <div className='Welcome-Block' style={welcome_container}>
                    <img src={logo} alt='logo' style={image_style}/>
                    <h2 className='Home-Title' style={title_style}>Travel Friend</h2>
                    <p>Have you ever had some trouble deciding on a city to travel to in the world? This simple app
                       can help you quickly find and compare different cities based on several travel related criteria.
                       Give it a shot!
                    </p>
                    <div className='buttons' style={button_container}>
                <button style={detail_button} onClick={this.props.handleDetailClick}> Details </button>
                <button style={start_button} onClick={this.props.handleResultClick}> Start </button>
                </div>
                </div>
               
                </div>
                <div className='footer' style={font}>
                    <p>Made with React</p>
                </div>
               
                </div>
        
        );
    }
}

export default WelcomeComponent;
