import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import EmployeeDetail from './employeeDetail'
import GradeHistory from './gradeHistory'
import FamilyMembers from './familyMembers'
import EmploymentHistory from './employmentHistory'
import LocationHistory from './locationHistory'
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
    overflow: 'hidden'
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
        this.props.actions.boundShowAddModal(false);
    }

    getStepContent(stepIndex) {
        switch (stepIndex) {
            case 0:
                return <EmployeeDetail addMode={true} />;
            case 1:
                return <EmploymentHistory />;
            case 2:
                return <GradeHistory />;
            case 3:
                return <FamilyMembers />;
            case 4:
                return <LocationHistory />;
            default:
                return <EmployeeDetail addMode={true} />;
        }
    }

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
                        <Step>
                            <StepButton onClick={() => this.setState({ stepIndex: 0 })}>
                                Create New Employee
                            </StepButton>
                        </Step>
                        <Step>
                            <StepButton onClick={() => this.setState({ stepIndex: 1 })}>
                                Add Job History
                            </StepButton>
                        </Step>
                        <Step>
                            <StepButton onClick={() => this.setState({ stepIndex: 2 })}>
                                Add Grade History
                            </StepButton>
                        </Step>
                        <Step>
                            <StepButton onClick={() => this.setState({ stepIndex: 3 })}>
                                Add Dependants
                            </StepButton>
                        </Step>
                        <Step>
                            <StepButton onClick={() => this.setState({ stepIndex: 4 })}>
                                Add Location History
                            </StepButton>
                        </Step>
                    </Stepper>
                    {this.getStepContent(stepIndex)}
                    
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