import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import ContactList from './contactList';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

// require('./style.css')

const MyButton = () => (
    <RaisedButton label="Default" />
);

const MyBar = () => (
    <AppBar
        title="Title"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
    />
);

class WrapperComponent extends React.Component {
    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <MyBar />
                    <ContactList />
                    <MyButton />
                </div>
            </MuiThemeProvider>
        )
    }
}

ReactDOM.render(<WrapperComponent />, document.getElementById('react'))