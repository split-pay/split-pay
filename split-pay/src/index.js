import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import ReduxStore from './redux_store';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

ReactDOM.render(

<Provider store={ReduxStore}>
    <HashRouter>
        <MuiThemeProvider>
            <App />
        </MuiThemeProvider>
    </HashRouter>   
</Provider>

, document.getElementById('root'));
registerServiceWorker();
