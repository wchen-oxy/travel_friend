import React from 'react';
import Switch from "react-switch";
import './ToggleSwitch.css';

const label_style={
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'

}
export default class BasicExample extends React.Component {
    // constructor() {
    //     super();
    //     this.state = { checked: false };
    //     this.handleChange = this.handleChange.bind(this);
    // }

    // handleChange(checked) {
    //     this.setState({ checked });
    // }

    render() {
        return (
            <label htmlFor="icon-switch" style={label_style}>
                <span>View Mode</span>
                <Switch
                    height={35}
                    width={90}
                    checked={this.props.checked}
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
                                color: "white",
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
