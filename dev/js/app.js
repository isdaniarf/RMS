import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import ContactList from './components/contactList';
import ProfileHeader from './components/profileHeader';
import { createStore } from 'redux';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

// require('./style.css')
// const store = createStore();
var contacts = require('./data/persons.json');

const MyButton = () => (
    <RaisedButton label="Default" />
);

const TopBar = () => (
    <AppBar
        title='James Anderson'
        iconClassNameRight='muidocs-icon-navigation-expand-more'
    >

    </AppBar>
);

const divStyle = {
  width:'20%'
};

class WrapperComponent extends React.Component {
    
    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <div>
                        <TopBar />
                    </div>
                    <div style = {divStyle}>
                        <ContactList contacts={contacts} />
                    </div>
                </div>
            </MuiThemeProvider>
        )
    }
}

ReactDOM.render(<WrapperComponent />, document.getElementById('react'))