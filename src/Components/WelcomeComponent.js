import React from 'react';
import logo from './logo.png';
import react_logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './WelcomeComponent.css';


class WelcomeComponent extends React.Component {

    render() {

        let background = 'Background';
        let outerWelcomeContainer = 'Outer-welcome-container';
        let innerWelcomeContainer = 'Inner-welcome-container';
        let logoImage = 'Logo-image';
        let title = 'Title';
        let description = 'Description';
        let buttonContainer = 'Button-container';
        let buttonDetail = 'Button-detail';
        let buttonStart = 'Button-start';
        let footer = 'Footer';
        let appLogo = 'App-logo App-dimension';


        return (
            <div className={background}>
                <div className={outerWelcomeContainer}>
                    <div className={innerWelcomeContainer}>
                        <img className={logoImage} src={logo} alt='logo' />
                        <h2 className={title}> Travel Friend </h2>
                        <div className={description}>
                            <p> Have you ever had some trouble deciding on a city to travel to in the world ?
                                This simple app can help you quickly find and compare different cities based on
                                several travel related criteria.Give it a shot!
                        </p>
                        </div>

                        <div className={buttonContainer} >
                            <button className={buttonDetail} variant="flat" onClick={this.props.handleDetailClick}> DETAILS </button>
                            <button className={buttonStart} variant="flat" onClick={this.props.handleResultClick} > START </button>
                        </div>
                    </div>
                </div>
                <div className={footer}>
                    Made with React
                    <img src={react_logo} className={appLogo} alt="logo" />
                </div>
            </div>
        );
    }
}

export default WelcomeComponent;