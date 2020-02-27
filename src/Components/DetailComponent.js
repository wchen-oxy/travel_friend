import React from 'react';
import './DetailComponent.css';
import './button_style.css';


class DetailsComponent extends React.Component{

    render(){
        let background = 'Background';
        let outerDetailContainer = 'Outer-detail-container';
        let innerDetailContainer = 'Inner-detail-container';
        let returnButton = 'button-start';


        return(

            <div className={background}>
                <div className={outerDetailContainer}>
                <div className={innerDetailContainer} >
                    <div >
                    <h2>Travel Friend</h2>
                    </div>
                   
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
                <button className={returnButton} onClick={this.props.handleHomeClick}>RETURN</button>
                </div>
               
                </div>
            
               
                </div>
        
        );
    }
}

export default DetailsComponent;