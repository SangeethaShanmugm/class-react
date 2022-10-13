import React, { Component } from 'react';

class LifeCycleB extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: "SangeethaShanmugam"
        }
        console.log("LifeCycleB Constructor")
    }

 
    componentDidMount() {
        console.log("LifeCycleB  componentDidMount")
    }
 
    static getDerivedStateFromProps(props, state) {
        console.log("LifeCycleB getDerivedStateFromProps");
        return null
    }
    
    render() {
        console.log("LifeCycleB render");
        return (
            <div>
                LifeCycle B
            </div>
        );
    }
}

export default LifeCycleB;