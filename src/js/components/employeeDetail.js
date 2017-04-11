import React from 'react';
import { Table, TableBody, TableRow, TableRowColumn } from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import Avatar from 'material-ui/Avatar';
import * as Util from '../util/util'
import DatePicker from 'material-ui/DatePicker';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import { indigo300 } from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ImageCameraAlt from 'material-ui/svg-icons/image/camera-alt'
import SelectEmployeeField from './selectEmployeeField'
import Snackbar from 'material-ui/Snackbar';

import { connect } from 'react-redux'
import * as actionIndex from '../actions/actionIndex'
import { bindActionCreators } from 'redux'

// import globalStyles from '../../assets/css/global.css';

const toolbarStyle = {
    backgroundColor: indigo300,
    height: 46,
    width: '100%'
}

const bottomStyle = {
    margin: 10
}

const changePicButton = {
    // float: 'right',
    // display: 'float',
    position: 'absolute',
    right: 50
    // marginRight: 30
}

const styles = {
    grid: {
        width: 200,
        margin: '20px'
    },
    infoHeader: {
        color: '#9e9e9e'
    },
    infoValue: {
        paddingTop: 0,
    }
};

const container = {
    minWidth: 1000
}

const leftSection = {
    // width: '80%',
    // height: 800,
    // minWidth: 300,
    width: 800,
    float: 'left',
    overflow: 'hidden',
    // position: 'relative',
    display: 'inline-block'
};

const rightSection = {
    margin: 30,
    width: '15%',
    // height: '100%',
    // float: 'right',
    overflow: 'hidden',
    position: 'relative',
    display: 'inline-block'
};

const tableStyle = {
    fontSize: '50%',
    padding: 10
}

class EmployeeDetail extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.handleRequestClose = this.handleRequestClose.bind(this);
    }

    handleChange(event, value, id) {
        // console.log(event, value, id)
        let updatedPerson = Object.assign({}, this.props.person);
        if (event != null) {
            updatedPerson[event.target.id] = value;
        } else if (id != null) {
            updatedPerson[id] = value;
        }
        this.props.actions.boundUpdateEmployee(updatedPerson);
    }

    handleSave(event, value) {
        // console.log(this.props.person);
        this.props.actions.boundSaveEmployee(this.props.person);
        // this.props.actions.boundToggleSaveSnackbar(true)
    }

    handleRequestClose() {
        this.props.actions.boundToggleSaveSnackbar(false)
    };

    render() {
        // console.log(this.props.person.dob)
        let grades = ['SE-JP', 'SE-PG', 'SE-AP', 'SE-AN', 'MJF-PM', 'CON-CON', 'ADM-ADM1', 'TR-TR2'];
        let genders = ['Male', 'Female'];
        let employmentStatuses = ['Permanent', 'Contract'];
        let maritalStatuses = ['Single', 'Married'];
        let content = 
            <div style={container}>
                <div style={leftSection}>
                    <Table
                        selectable={false}
                        multiSelectable={false}
                        displaySelectAll={false}
                        adjustForCheckbox={false}
                        style={tableStyle}
                    >
                        <TableBody
                            displayRowCheckbox={false}
                            displayBorder={false}
                        >
                            <TableRow displayBorder={false}>
                                <TableRowColumn>
                                    <div style={styles.grid}>
                                        <div style={styles.infoHeader}>First Name</div>
                                        <TextField id="firstName"
                                            style={styles.infoValue}
                                            value={this.props.person.firstName || ''}
                                            onChange={this.handleChange} />
                                    </div>
                                </TableRowColumn>
                                <TableRowColumn>
                                    <div style={styles.grid}>
                                        <div style={styles.infoHeader}>Sub Division</div>
                                        <TextField id="subdivision" style={styles.infoValue} value={this.props.person.subdivision || ''}
                                            onChange={this.handleChange} />
                                    </div>
                                </TableRowColumn>
                            </TableRow>
                            <TableRow displayBorder={false}>
                                <TableRowColumn>
                                    <div style={styles.grid}>
                                        <div style={styles.infoHeader}>Last Name</div>
                                        <TextField id="lastName" style={styles.infoValue} value={this.props.person.lastName || ''}
                                            onChange={this.handleChange} />
                                    </div>
                                </TableRowColumn>
                                <TableRowColumn>
                                    <div style={styles.grid}>
                                        <div style={styles.infoHeader}>Status</div>
                                        <SelectEmployeeField items={employmentStatuses} type="employmentStatus" onChange={this.handleChange} />
                                        {/*<TextField id="employmentStatus" style={styles.infoValue} value={this.props.person.employmentStatus || ''}
                                            onChange={this.handleChange} />*/}
                                    </div>
                                </TableRowColumn>
                            </TableRow>
                            <TableRow displayBorder={false}>
                                <TableRowColumn>
                                    <div style={styles.grid}>
                                        <div style={styles.infoHeader}>Gender</div>
                                        <SelectEmployeeField items={genders} type="gender" onChange={this.handleChange} />
                                        {/*<TextField id="gender" style={styles.infoValue} value={this.props.person.gender || ''}
                                            onChange={this.handleChange} />*/}
                                    </div>
                                </TableRowColumn>
                                <TableRowColumn>
                                    <div style={styles.grid}>
                                        <div style={styles.infoHeader}>Suspend Date</div>
                                        {/*<TextField id="suspendDate" style={styles.infoValue} value={this.props.person.suspendDate || ''}
                                        onChange={this.handleChange} />*/}
                                        <DatePicker id="suspendDate" value={this.props.person.suspendDate == null ? null : new Date(this.props.person.suspendDate)} mode="landscape"
                                            onChange={(e, v) => this.handleChange(e, v, "suspendDate")} />
                                    </div>
                                </TableRowColumn>
                            </TableRow>
                            <TableRow displayBorder={false}>
                                <TableRowColumn>
                                    <div style={styles.grid}>
                                        <div style={styles.infoHeader}>Date of Birth</div>
                                        <DatePicker id="dob" hintText="dob" value={new Date(this.props.person.dob)} mode="landscape"
                                            onChange={(e, v) => this.handleChange(e, v, "dob")} />
                                    </div>
                                </TableRowColumn>
                                <TableRowColumn>
                                    <div style={styles.grid}>
                                        <div style={styles.infoHeader}>Hired Date</div>
                                        <DatePicker id="doj" hintText="doj" value={new Date(this.props.person.doj)} mode="landscape"
                                            onChange={(e, v) => this.handleChange(e, v, "doj")} />
                                    </div>
                                </TableRowColumn>
                            </TableRow>
                            <TableRow displayBorder={false}>
                                <TableRowColumn>
                                    <div style={styles.grid}>
                                        <div style={styles.infoHeader}>Nationality</div>
                                        <TextField id="nationality" style={styles.infoValue} value={this.props.person.nationality || ''}
                                            onChange={this.handleChange} />
                                    </div>
                                </TableRowColumn>
                                <TableRowColumn>
                                    <div style={styles.grid}>
                                        <div style={styles.infoHeader}>Grade</div>
                                        <SelectEmployeeField items={grades} type="grade" onChange={this.handleChange} />
                                        {/*<div>
                                            <SelectField
                                                value={this.props.person.grade}
                                                onChange={this.handleChange}
                                            >
                                                {grades.map((grade) => (
                                                    <MenuItem key={grade} id="grade" value={grade} primaryText={grade} />
                                                ))}
                                            </SelectField>
                                        </div>*/}
                                    </div>
                                </TableRowColumn>
                            </TableRow>
                            <TableRow displayBorder={false}>
                                <TableRowColumn>
                                    <div style={styles.grid}>
                                        <div style={styles.infoHeader}>Marital Status</div>
                                        <SelectEmployeeField items={maritalStatuses} type="maritalStatus" onChange={this.handleChange} />
                                        {/*<TextField id="maritalStatus" style={styles.infoValue} value={this.props.person.maritalStatus || ''}
                                            onChange={this.handleChange} />*/}
                                    </div>
                                </TableRowColumn>
                                <TableRowColumn>
                                    <div style={styles.grid}>
                                        <div style={styles.infoHeader}>Division</div>
                                        <TextField id="division" style={styles.infoValue} value={this.props.person.division || ''}
                                            onChange={this.handleChange} />
                                    </div>
                                </TableRowColumn>
                            </TableRow>
                            <TableRow displayBorder={false}>
                                <TableRowColumn>
                                    <div style={styles.grid}>
                                        <div style={styles.infoHeader}>Phone</div>
                                        <TextField id="mobileNo" style={styles.infoValue} value={this.props.person.mobileNo || ''}
                                            onChange={this.handleChange} />
                                    </div>
                                </TableRowColumn>
                                <TableRowColumn>
                                    <div style={styles.grid}>
                                        <div style={styles.infoHeader}>E-mail</div>
                                        <TextField id="email" style={styles.infoValue} value={this.props.person.email || ''}
                                            onChange={this.handleChange} />
                                    </div>
                                </TableRowColumn>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
                <br />
                <div style={rightSection}>
                    <input id="myInput" type="file" ref={(ref) => this.upload = ref} style={{ display: 'none' }} />
                    <FloatingActionButton mini={true} style={changePicButton} type='file' onClick={(e) => this.upload.click()}>
                        <ImageCameraAlt />
                    </FloatingActionButton>
                    <Avatar src={this.props.person.avatar} size={130} />
                </div>
                <Toolbar style={toolbarStyle}>
                    <ToolbarGroup />
                    <ToolbarGroup>
                        <RaisedButton label="CANCEL" style={bottomStyle} />
                        <RaisedButton label="SAVE" secondary={true} style={bottomStyle} onTouchTap={this.handleSave} />
                    </ToolbarGroup>
                </Toolbar>
                <Snackbar
                    open={this.props.saveSnackbar.isOpen}
                    message="Sucessfully saved"
                    autoHideDuration={4000}
                    onRequestClose={this.handleRequestClose}
                />
            </div>
        return (
            <div>
                {content}
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
        person: state.reducePerson,
        saveSnackbar: state.reduceSaveSnackbar
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actionIndex, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeDetail);