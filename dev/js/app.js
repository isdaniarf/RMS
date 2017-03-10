import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import ContactList from './contactList';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

// require('./style.css')
var contacts = require('./persons.json');

const MyButton = () => (
    <RaisedButton label="Default" />
);

const TopBar = () => (
    <AppBar
        title = 'Title'
        iconClassNameRight = 'muidocs-icon-navigation-expand-more'
    />
);

class WrapperComponent extends React.Component {
    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <TopBar />
                    <ContactList />
                    <MyButton />
                </div>
            </MuiThemeProvider>
        )
    }
}

ReactDOM.render(<WrapperComponent />, document.getElementById('react'))