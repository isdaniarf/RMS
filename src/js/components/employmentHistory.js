import React, { Component } from 'react';
import { Table, TableBody, TableRow, TableRowColumn } from 'material-ui/Table';
import ActionDelete from 'material-ui/svg-icons/action/delete'
import ImageEdit from 'material-ui/svg-icons/image/edit'

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

export default class EmploymentHistory extends Component {
    render() {
        return (
            <Table
                selectable={false}
                multiSelectable={false}
                displaySelectAll={false}
                adjustForCheckbox={false}
            >
                <TableBody displayRowCheckbox={false}>
                    <TableRow>
                        <TableRowColumn style={leftStyle}>
                            FEBRUARY
                            <h4>2016 - Present</h4>
                            <h5>Mitrais</h5>
                            <h6>Analyst Programmer</h6>
                        </TableRowColumn>
                        <TableRowColumn style={detailStyle}>
                            Job Description:<br />
                            <ul>
                                <li>Optimize performance at customer projects</li>
                                <li>Working & implementing web portal using Liferay & gatein portal Internet banking system</li>
                                <li>Managing & deploying & releasing production</li>
                                <li>Lead IMB ODC team (7 members)</li>
                                <li>Tools & Technology: InteliJ IDE, Jenkins, Git, Maven, sorna</li>
                                <li>Others</li>
                            </ul>
                        </TableRowColumn>
                        <TableRowColumn style={actionStyle}>
                            <ImageEdit />
                            <ActionDelete />
                        </TableRowColumn>
                    </TableRow>
                    <TableRow>
                        <TableRowColumn style={leftStyle}>
                            NOVEMBER - FEBRUARY
                            <h4>2013 - 2016</h4>
                            <h5>ABB</h5>
                            <h6>Software Engineer</h6>
                        </TableRowColumn>
                        <TableRowColumn style={detailStyle}>
                            Job Description:<br />
                            <ul>
                            <li>Optimize performance at customer projects</li>
                            <li>Working & implementing web portal using Liferay & gatein portal Internet banking system</li>
                            <li>Managing & deploying & releasing production</li>
                            <li>Lead IMB ODC team (7 members)</li>
                            <li>Tools & Technology: InteliJ IDE, Jenkins, Git, Maven, sorna</li>
                            <li>Others</li>
                            </ul>
                        </TableRowColumn>
                        <TableRowColumn style={actionStyle}>
                            <ImageEdit />
                            <ActionDelete />
                        </TableRowColumn>
                    </TableRow>
                    <TableRow>
                        <TableRowColumn style={leftStyle}>
                            NOVEMBER - FEBRUARY
                            <h4>2013 - 2016</h4>
                            <h5>Stanford University</h5>
                            <h6>Researcher</h6>
                        </TableRowColumn>
                        <TableRowColumn style={detailStyle}>
                            Job Description:<br />
                            <ul>
                            <li>Algorithm study</li>
                            <li>Working & implementing web portal using Liferay & gatein portal Internet banking system</li>
                            <li>Managing & deploying & releasing production</li>
                            <li>Lead IMB ODC team (7 members)</li>
                            <li>Tools & Technology: InteliJ IDE, Jenkins, Git, Maven, sorna</li>
                            <li>Others</li>
                            </ul>
                        </TableRowColumn>
                        <TableRowColumn style={actionStyle}>
                            <ImageEdit />
                            <ActionDelete />
                        </TableRowColumn>
                    </TableRow>
                </TableBody>
            </Table>
        );
    }
}