import React, { Component } from 'react';
import LifeCycleB from './LifeCycleB';

class LifeCycleA extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: "SangeethaShanmugam"
        }
        console.log("LifeCycleA Constructor")
    }

 
    componentDidMount() {
        console.log("LifeCycleA  componentDidMount")
    }
 
    static getDerivedStateFromProps(props, state) {
        console.log("LifeCycleA getDerivedStateFromProps");
        return null
    }

    render() {
        console.log("LifeCycleA render");
        return (
            <div>
                <div>LifeCycle A</div>
                <LifeCycleB />
            </div>
        );
    }
}

export default LifeCycleA;