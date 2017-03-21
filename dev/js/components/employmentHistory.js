import React, { Component } from 'react';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';

import SelectField from 'material-ui/SelectField';
import TextField from 'material-ui/TextField';
import MenuItem from 'material-ui/MenuItem';

import ActionDelete from 'material-ui/svg-icons/action/delete'
import ImageEdit from 'material-ui/svg-icons/image/edit'

const textStyle = {
    fontSize: 20
}

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

const addressStyle = {
    width: '100%'
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
                        </TableRowColumn>
                        <TableRowColumn style={detailStyle}>
                            <SelectField
                                floatingLabelText='Office Location'
                                value={1}
                            >
                                <MenuItem value={1} primaryText="Yogyakarta Office" />
                                <MenuItem value={2} primaryText="Bandung Office" />
                                <MenuItem value={3} primaryText="Bali Office" />
                                <MenuItem value={4} primaryText="Jakarta Office" />
                                <MenuItem value={5} primaryText="Hanoi Office" />
                            </SelectField>
                            <br />
                            <TextField
                                multiLine={true}
                                rows={2}
                                defaultValue='Jl. Sidobali, Muja Muju, Umbulharjo, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55165'
                                floatingLabelText='Address'
                                floatingLabelFixed={true}
                                style={addressStyle}
                            /><br />
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
                        </TableRowColumn>
                        <TableRowColumn style={detailStyle}>
                            <SelectField
                                floatingLabelText='Office Location'
                                value={3}
                            >
                                <MenuItem value={1} primaryText="Yogyakarta Office" />
                                <MenuItem value={2} primaryText="Bandung Office" />
                                <MenuItem value={3} primaryText="Bali Office" />
                                <MenuItem value={4} primaryText="Jakarta Office" />
                                <MenuItem value={5} primaryText="Hanoi Office" />
                            </SelectField>
                            <br/>
                            <TextField
                                multiLine={true}
                                fullWidth={true}
                                defaultValue='Jl. Bypass Ngurah Rai gg. Mina Utama No. 1, ​​Suwung 80223, Bali'
                                floatingLabelText='Address'
                                floatingLabelFixed={true}
                                style={addressStyle}
                            />
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