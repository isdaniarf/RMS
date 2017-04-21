import React, { Component } from 'react'
import CircularProgress from 'material-ui/CircularProgress';

const useLoadingAnimation = (WrappedComponent) => {
    return class LoadingAnimation extends Component {
        constructor(props) {
            super(props);
        }

        render() {
            return <WrappedComponent loadingAnimation={<CircularProgress />} />
        }
    }
}