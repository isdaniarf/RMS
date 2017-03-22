import React from 'react';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import { ListItem } from 'material-ui/List';
import TextField from 'material-ui/TextField';
import Avatar from 'material-ui/Avatar';
import * as Util from '../util/util'
import DatePicker from 'material-ui/DatePicker';
import AppBar from 'material-ui/AppBar';
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';
import { indigo300 } from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ImageCameraAlt from 'material-ui/svg-icons/image/camera-alt'
import SelectGrade from './selectGrade'

import { connect } from 'react-redux'
import reducePerson from '../reducers/reducePerson'
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

class PersonDetail extends React.Component {
    render() {
        let content = Util.isObjectEmpty(this.props.person) ?
            <div/> :
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
                                        <TextField id="Isdaniar" style={styles.infoValue} value={this.props.person.detail.firstName || ''} />
                                    </div>
                                </TableRowColumn>
                                <TableRowColumn>
                                    <div style={styles.grid}>
                                        <div style={styles.infoHeader}>Sub Division</div>
                                        <TextField id="Isdaniar" style={styles.infoValue} value={this.props.person.detail.subDivision || ''} />
                                    </div>
                                </TableRowColumn>
                            </TableRow>
                            <TableRow displayBorder={false}>
                                <TableRowColumn>
                                    <div style={styles.grid}>
                                        <div style={styles.infoHeader}>Last Name</div>
                                        <TextField id="Isdaniar" style={styles.infoValue} value={this.props.person.detail.lastName || ''} />
                                    </div>
                                </TableRowColumn>
                                <TableRowColumn>
                                    <div style={styles.grid}>
                                        <div style={styles.infoHeader}>Status</div>
                                        <TextField id="Isdaniar" style={styles.infoValue} value={this.props.person.detail.employmentStatus || ''} />
                                    </div>
                                </TableRowColumn>
                            </TableRow>
                            <TableRow displayBorder={false}>
                                <TableRowColumn>
                                    <div style={styles.grid}>
                                        <div style={styles.infoHeader}>Gender</div>
                                        <TextField id="Isdaniar" style={styles.infoValue} value={this.props.person.detail.gender || ''} />
                                    </div>
                                </TableRowColumn>
                                <TableRowColumn>
                                    <div style={styles.grid}>
                                        <div style={styles.infoHeader}>Suspend Date</div>
                                        <TextField id="Isdaniar" style={styles.infoValue} value={this.props.person.detail.suspendDate || ''} />
                                    </div>
                                </TableRowColumn>
                            </TableRow>
                            <TableRow displayBorder={false}>
                                <TableRowColumn>
                                    <div style={styles.grid}>
                                        <div style={styles.infoHeader}>Date of Birth</div>
                                        <DatePicker hintText="Landscape Dialog" value={new Date(this.props.person.detail.dob)} mode="landscape" />
                                    </div>
                                </TableRowColumn>
                                <TableRowColumn>
                                    <div style={styles.grid}>
                                        <div style={styles.infoHeader}>Hired Date</div>
                                        <DatePicker hintText="Landscape Dialog" value={new Date(this.props.person.detail.doj)} mode="landscape" />
                                    </div>
                                </TableRowColumn>
                            </TableRow>
                            <TableRow displayBorder={false}>
                                <TableRowColumn>
                                    <div style={styles.grid}>
                                        <div style={styles.infoHeader}>Nationality</div>
                                        <TextField id="Isdaniar" style={styles.infoValue} value={this.props.person.detail.nationality || ''} />
                                    </div>
                                </TableRowColumn>
                                <TableRowColumn>
                                    <div style={styles.grid}>
                                        <div style={styles.infoHeader}>Grade</div>
                                        <SelectGrade />
                                    </div>
                                </TableRowColumn>
                            </TableRow>
                            <TableRow displayBorder={false}>
                                <TableRowColumn>
                                    <div style={styles.grid}>
                                        <div style={styles.infoHeader}>Marital Status</div>
                                        <TextField id="Isdaniar" style={styles.infoValue} value={this.props.person.detail.maritalStatus || ''} />
                                    </div>
                                </TableRowColumn>
                                <TableRowColumn>
                                    <div style={styles.grid}>
                                        <div style={styles.infoHeader}>Division</div>
                                        <TextField id="Isdaniar" style={styles.infoValue} value={this.props.person.detail.Division || ''} />
                                    </div>
                                </TableRowColumn>
                            </TableRow>
                            <TableRow displayBorder={false}>
                                <TableRowColumn>
                                    <div style={styles.grid}>
                                        <div style={styles.infoHeader}>Phone</div>
                                        <TextField id="Isdaniar" style={styles.infoValue} value={this.props.person.mobileNo || ''} />
                                    </div>
                                </TableRowColumn>
                                <TableRowColumn>
                                    <div style={styles.grid}>
                                        <div style={styles.infoHeader}>E-mail</div>
                                        <TextField id="Isdaniar" style={styles.infoValue} value={this.props.person.detail.email || ''} />
                                    </div>
                                </TableRowColumn>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
                <br />
                <div style={rightSection}>
                    <input id="myInput" type="file" ref={(ref) => this.upload = ref} style={{ display: 'none' }} />
                    <FloatingActionButton mini={true} style={changePicButton} type='file' onClick={(e) => this.upload.click() }>
                        <ImageCameraAlt />
                    </FloatingActionButton>
                    <Avatar src={this.props.person.avatar} size={130} />
                </div>
                <Toolbar style={toolbarStyle}>
                    <ToolbarGroup />
                    <ToolbarGroup>
                        <RaisedButton label="CANCEL" style={bottomStyle} />
                        <RaisedButton label="SAVE" secondary={true} style={bottomStyle} />
                    </ToolbarGroup>
                </Toolbar>
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
    };
}

export default connect(mapStateToProps)(PersonDetail);