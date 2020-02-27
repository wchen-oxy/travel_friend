import React from 'react';
import Switch from "react-switch";
import './ToggleSwitch.css';

export default class BasicExample extends React.Component {

    render() {
        let font = 'Button-title';
        let toggle = 'Toggle';
        return (
            <label htmlFor="icon-switch" className={toggle}>
                <span className={font}>View Mode</span>
                <Switch
                    height={35}
                    width={90}
                    checked={this.props.checked}
                    offHandleColor={"#ff7f00"}
                    offColor={'#ffffff'}
                    onColor={'#ff7f00'}
                    onChange={this.props.onChecked}
                    uncheckedIcon={
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                height: "100%",
                                fontSize: 15,
                                color: "#ff7f00",
                                paddingRight: 7,
                               
                            }}>
                            Single
                        </div>
                    }
                    checkedIcon={
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                height: "100%",
                                fontSize: 15,
                                color: "white",
                                paddingLeft: 7,
                               
                            }}>
                            Double
                        </div>
                    }
                    className="react-switch"
                    id="icon-switch"
                />
            </label>
        );
    }
}

/* styles.css */
