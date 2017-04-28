import React, { Component } from 'react';
import { Table, TableBody, TableRow, TableRowColumn } from 'material-ui/Table';
import IconButton from 'material-ui/IconButton';
import ActionDelete from 'material-ui/svg-icons/action/delete'
import ImageEdit from 'material-ui/svg-icons/image/edit'
import moment from 'moment'
import { indigo100 } from 'material-ui/styles/colors';

import { connect } from 'react-redux'
import * as actionIndex from '../actions/actionIndex'
import { bindActionCreators } from 'redux'

const actionStyle = {
    padding: 30,
    width: 100
}

const leftStyle = {
    padding: 30,
    width: 100
}

const detailStyle = {
    padding: 30,
    width: 300
}

class EmploymentHistory extends Component {
    render() {
        const employmentHistory = this.props.employmentHistory || [];
        return (
            <Table
                selectable={false}
                multiSelectable={false}
                displaySelectAll={false}
                adjustForCheckbox={false}
            >
                <TableBody displayRowCheckbox={false}>
                    {employmentHistory.map(job => (
                        <TableRow key={job.institution}>
                            <TableRowColumn style={leftStyle}>
                                {moment(job.startDate).format('MMMM').toUpperCase() + 
                                    (moment(job.endDate).isValid() ? ' — ' + moment(job.endDate).format('MMMM').toUpperCase() : '')}
                                <h4>{moment(job.startDate).format('YYYY').toUpperCase() + ' — ' +
                                    (moment(job.endDate).isValid() ? moment(job.endDate).format('YYYY').toUpperCase() : 'Present')}</h4>
                                <h5>{job.institution}</h5>
                                <h6>{job.position}</h6>
                            </TableRowColumn>
                            <TableRowColumn style={detailStyle}>
                                Job Description:<br />
                                <ul>
                                    {job.jobDescription.split('\n').map(desc => (
                                        <li key={desc}>{desc}</li>
                                    ))}
                                </ul>
                            </TableRowColumn>
                            <TableRowColumn style={actionStyle}>
                                <IconButton><ImageEdit hoverColor={indigo100} /></IconButton>
                                <IconButton><ActionDelete hoverColor={indigo100} /></IconButton>
                            </TableRowColumn>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        employmentHistory: state.reducePerson.employmentHistory
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actionIndex, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(EmploymentHistory);