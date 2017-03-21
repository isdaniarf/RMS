import React, { Component } from 'react';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import ActionDelete from 'material-ui/svg-icons/action/delete'

class GradeHistory extends Component {
    render() {
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
                    <TableRow>
                        <TableRowColumn>DS4</TableRowColumn>
                        <TableRowColumn>SE-PG</TableRowColumn>
                        <TableRowColumn>Jan 1, 2014</TableRowColumn>
                        <TableRowColumn></TableRowColumn>
                        <TableRowColumn><ActionDelete /></TableRowColumn>
                    </TableRow>
                    <TableRow>
                        <TableRowColumn>DS2</TableRowColumn>
                        <TableRowColumn>SE-PG</TableRowColumn>
                        <TableRowColumn>Jun 13, 2013</TableRowColumn>
                        <TableRowColumn>Jan 1, 2014</TableRowColumn>
                        <TableRowColumn></TableRowColumn>
                    </TableRow>
                </TableBody>
            </Table>
        );
    }
}

export default GradeHistory;