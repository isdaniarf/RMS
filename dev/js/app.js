import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import ContactList from './components/contactList';
import ProfileHeader from './components/profileHeader';
import RightSection from './components/rightSection';
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
        title={<ProfileHeader />}
        iconClassNameRight='muidocs-icon-navigation-expand-more'
    >
        
    </AppBar>
);

const leftSection = {
    width:'20%',
    float:'left'
};

const rightSection = {
    float:'right',
    width:'80%'
};

class WrapperComponent extends React.Component {
    
    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <div>
                        <TopBar />
                    </div>
                    <div style = {leftSection}>
                        <ContactList contacts={contacts} />
                    </div>
                    <div style = {rightSection}>
                        <RightSection />
                    </div>
                </div>
            </MuiThemeProvider>
        )
    }
}

ReactDOM.render(<WrapperComponent />, document.getElementById('react'))