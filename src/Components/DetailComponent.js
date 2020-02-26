import React from 'react';

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



const title_style = {
    paddingTop: '2vh',
    paddingBottom: '2vh'
}


const detail_button = {
    margin: "0px 20px"
}



class DetailsComponent extends React.Component{

    
    render(){
        return(

            <div style={background}>
                <div style={outer_welcome_container}>
                <div className='Details-Block' style={welcome_container}>
                    <h2 className='Details-Title' style={title_style}>Travel Friend</h2>
                    <p>Insert Details Here
                    </p>
                <button style={detail_button} onClick={this.props.handleHomeClick}> Return </button>
                </div>
               
                </div>
                <div className='footer' style={font}>
                    <p>Made with React</p>
                </div>
               
                </div>
        
        );
    }
}

export default DetailsComponent;