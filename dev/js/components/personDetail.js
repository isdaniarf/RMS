import React from 'react';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import { ListItem } from 'material-ui/List';
import TextField from 'material-ui/TextField';

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

const PersonDetail = () => (
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
                        <TextField style={styles.infoValue} defaultValue='Isdaniar' />
                    </div>
                </TableRowColumn>
                <TableRowColumn>
                    <ListItem
                        disabled={true}
                        primaryText='Sub Division'
                        secondaryText={<TextField defaultValue='Java Bootcamp' />}
                        secondaryTextLines={2}
                    />
                </TableRowColumn>
            </TableRow>
            <TableRow>
                <TableRowColumn>
                    <ListItem
                        disabled={true}
                        primaryText='Last Name'
                        secondaryText='Fithrantyo'
                    />
                </TableRowColumn>
                <TableRowColumn>
                    <ListItem
                        disabled={true}
                        primaryText='Status'
                        secondaryText='Permanent'
                    />
                </TableRowColumn>
            </TableRow>
            <TableRow>
                <TableRowColumn>
                    <ListItem
                        disabled={true}
                        primaryText='Gender'
                        secondaryText='Male'
                    />
                </TableRowColumn>
                <TableRowColumn>
                    <ListItem
                        disabled={true}
                        primaryText='Suspend Date'
                        secondaryText='-'
                    />
                </TableRowColumn>
            </TableRow>
            <TableRow>
                <TableRowColumn>
                    <ListItem
                        disabled={true}
                        primaryText='Date Of Birth'
                        secondaryText='April 7, 1992'
                    />
                </TableRowColumn>
                <TableRowColumn>
                    <ListItem
                        disabled={true}
                        primaryText='Hired Date'
                        secondaryText='June 2, 2014'
                    />
                </TableRowColumn>
            </TableRow>
            <TableRow>
                <TableRowColumn>
                    <ListItem
                        disabled={true}
                        primaryText='Nationality'
                        secondaryText='Indonesian'
                    />
                </TableRowColumn>
                <TableRowColumn>
                    <ListItem
                        disabled={true}
                        primaryText='Grade'
                        secondaryText='SE-PG'
                    />
                </TableRowColumn>
            </TableRow>
            <TableRow>
                <TableRowColumn>
                    <ListItem
                        disabled={true}
                        primaryText='Marital Status'
                        secondaryText='Single'
                    />
                </TableRowColumn>
                <TableRowColumn>
                    <ListItem
                        disabled={true}
                        primaryText='Division'
                        secondaryText='CDC'
                    />
                </TableRowColumn>
            </TableRow>
            <TableRow>
                <TableRowColumn>
                    <ListItem
                        disabled={true}
                        primaryText='Phone'
                        secondaryText='+6281219518694'
                    />
                </TableRowColumn>
                <TableRowColumn>
                    <ListItem
                        disabled={true}
                        primaryText='E-mail'
                        secondaryText='isdaniar.fithrantyo@mitrais.com'
                    />
                </TableRowColumn>
            </TableRow>
        </TableBody>
    </Table>
);

export default PersonDetail;