import React from 'react';

const font = {
    color: "#3A3042"
}

const background = {
        height: '100vh',
        background: '#3D348B',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        
}

const outer_welcome_container = {
    height: '100vh',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
   
    

}

const welcome_container = {
    width: '450px',
    textAlign: 'center',
    color: "#3A3042",
    backgroundColor: 'white',
    borderRadius: '12px',
    margin: '3vh',
    paddingTop: '2vh',
    paddingBottom: '2vh',
    paddingLeft: '3vh',
    paddingRight: '3vh'
 
}



const title_style = {
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
                    <p>This project has been a small project for me to familiarize myself with React.
                        I had only a couple requirements: the project had to consume an API, be built
                        in React and be a tool that represented existing information.
                    </p>
                    <p>I settled upon this basic travel app because as far as I'm aware,
                        there is no app that synthesizes important information about a city
                        in one click. With this app, you should be able to select a city to
                        see relevant information such as safety, environmental quality and cost of living. 
                        Furthermore, you can make comparisons with other cities by toggling the side by side 
                        city comparison switch. 
                    </p>
                    <p>
                        Data for this app has been sourced from the Teleport API. I'm unaware
                        of the criteria the Teleport API uses for evaluating a city's score so when in doubt,
                        take the given scores for a city with a grain of salt.
                    </p>
                <button className="button-start" onClick={this.props.handleHomeClick}>RETURN</button>
                </div>
               
                </div>
            
               
                </div>
        
        );
    }
}

export default DetailsComponent;