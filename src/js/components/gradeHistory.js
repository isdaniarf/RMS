import React, { Component } from 'react';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import IconButton from 'material-ui/IconButton';
import ActionDelete from 'material-ui/svg-icons/action/delete'
import ImageEdit from 'material-ui/svg-icons/image/edit'
import moment from 'moment'
import { indigo100 } from 'material-ui/styles/colors';

import { connect } from 'react-redux'
import * as actionIndex from '../actions/actionIndex'
import { bindActionCreators } from 'redux'

class GradeHistory extends Component {
    render() {
        const gradeHistory = this.props.gradeHistory || [];
        return (
            <Table
                selectable={false}
                multiSelectable={false}
                displaySelectAll={false}
                adjustForCheckbox={false}
            >
                <TableHeader
                    adjustForCheckbox={false}
                    displaySelectAll={false}
                >
                    <TableRow>
                        <TableHeaderColumn>DS</TableHeaderColumn>
                        <TableHeaderColumn>Grade</TableHeaderColumn>
                        <TableHeaderColumn>Start Date</TableHeaderColumn>
                        <TableHeaderColumn>End Date</TableHeaderColumn>
                        <TableHeaderColumn>Actions</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody displayRowCheckbox={false}>
                    {gradeHistory.map(grade => (
                        <TableRow key={grade.developmentStage}>
                            <TableRowColumn>{grade.developmentStage}</TableRowColumn>
                            <TableRowColumn>{grade.grade}</TableRowColumn>
                            <TableRowColumn>{moment(grade.startDate).format('DD-MM-YYYY')}</TableRowColumn>
                            <TableRowColumn>{moment(grade.endDate).isValid() ? moment(grade.endDate).format('DD-MM-YYYY') : '-'}</TableRowColumn>
                            <TableRowColumn>
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
        gradeHistory: state.reducePerson.gradeHistory
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actionIndex, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(GradeHistory);