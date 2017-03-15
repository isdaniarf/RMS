import React from 'react';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import { ListItem } from 'material-ui/List';
import TextField from 'material-ui/TextField';
import * as Util from '../util/util'
import DatePicker from 'material-ui/DatePicker';
import AppBar from 'material-ui/AppBar';

import { connect } from 'react-redux'
import reducePerson from '../reducers/reducePerson'
import * as actionIndex from '../actions/actionIndex'
import { bindActionCreators } from 'redux'

// import globalStyles from '../../assets/css/global.css';

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

class PersonDetail extends React.Component {
    render() {
        let content = Util.isObjectEmpty(this.props.person) ?
            <h1>Select one of the employees</h1> :
            <div>
                <Table
                    selectable={false}
                    multiSelectable={false}
                    displaySelectAll={false}
                    adjustForCheckbox={false}
                >
                    <TableBody
                        displayRowCheckbox={false}
                        displayBorder={false}
                    >
                        <TableRow displayBorder={false}>
                            <TableRowColumn>
                                <div style={styles.grid}>
                                    <div style={styles.infoHeader}>First Name</div>
                                    <TextField id="Isdaniar" style={styles.infoValue} disabled={true} value={this.props.person.detail.firstName || ''} />
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
                                    <TextField id="Isdaniar" style={styles.infoValue} value={this.props.person.detail.grade || ''} />
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
                <AppBar
                    title="Title"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
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
    };
}

export default connect(mapStateToProps)(PersonDetail);