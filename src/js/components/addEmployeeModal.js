import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import EmployeeDetail from './employeeDetail'
import FlatButton from 'material-ui/FlatButton';
import {
  Step,
  Stepper,
  StepButton,
} from 'material-ui/Stepper';
// import RaisedButton from 'material-ui/RaisedButton';

import { connect } from 'react-redux'
import * as actionIndex from '../actions/actionIndex'
import { bindActionCreators } from 'redux'

const contentStyle = {
    width: '800px',
    height: '80%'
}

class AddEmployeeModal extends Component {
    constructor() {
        super();
        this.handleClose = this.handleClose.bind(this);
    }

    handleClose() {
        // console.log(this.props.actions.boundShowAddModal);
        this.props.actions.boundShowAddModal(false);
    }

    // handleClose = () => {
    //     this.props.actions.boundShowAddModal(false);
    // };

    render() {
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={this.handleClose}
            />,
            <FlatButton
                label="Submit"
                primary={true}
                disabled={true}
                onTouchTap={this.handleClose}
            />,
        ];

        return (
            <Dialog
                title="Dialog With Actions"
                contentStyle={contentStyle}
                actions={actions}
                modal={true}
                open={this.props.isOpen}
            >
                <EmployeeDetail />
            </Dialog>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actionIndex, dispatch)
    };
}

export default connect(undefined, mapDispatchToProps)(AddEmployeeModal);