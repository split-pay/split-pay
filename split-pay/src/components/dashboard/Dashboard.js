import React, { Component } from 'react';
import { connect } from 'react-redux';
import './dashboard.css';


class Dashboard extends Component {
    constructor() {
        super();

        this.state = {

        }
    }


    render() {
        console.log("PROPS", this.props)
        return(
            <div>
                Dashboard
            </div>
        )
    }
}

function mapStateToProps(state){
    return state
}
export default connect(mapStateToProps,{})(Dashboard);