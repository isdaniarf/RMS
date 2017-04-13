import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import EmployeeDetail from './employeeDetail'
import FlatButton from 'material-ui/FlatButton';
import { Step, Stepper, StepButton } from 'material-ui/Stepper';
// import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { black, white, indigo500, indigo300 } from 'material-ui/styles/colors';
import Paper from 'material-ui/Paper'

import { connect } from 'react-redux'
import * as actionIndex from '../actions/actionIndex'
import { bindActionCreators } from 'redux'

const contentStyle = {
    width: '80%',
    maxWidth: 'none',
    height: '80%',
    overflow: 'scroll'
}

const addModalTheme = getMuiTheme({
    palette: {
        primary1Color: indigo300,
        textColor: black,
        disabledColor: black
    }
});

class AddEmployeeModal extends Component {
    constructor() {
        super();
        this.state = {
            stepIndex: 0
        }
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
        const { stepIndex } = this.state;
        const fitWidthStyle = {
            width: '100%',
        };
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
            <MuiThemeProvider muiTheme={addModalTheme}>

                <Dialog
                    title=""
                    contentStyle={contentStyle}
                    actions={actions}
                    modal={true}
                    autoScrollBodyContent={true}
                    open={this.props.isOpen}
                >
                    <Stepper linear={false} activeStep={stepIndex}>
                        <Step style={fitWidthStyle}>
                            <StepButton onClick={() => this.setState({ stepIndex: 0 })}>
                                Create New Employee
                            </StepButton>
                            <EmployeeDetail addMode={true} />
                        </Step>
                        <Step style={fitWidthStyle}>

                        </Step>
                    </Stepper>
                </Dialog>

            </MuiThemeProvider>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actionIndex, dispatch)
    };
}

export default connect(undefined, mapDispatchToProps)(AddEmployeeModal);