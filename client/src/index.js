import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {setItemInLocalStorageInitially} from './assets/helper';


//initially set 2 items to localstorage as a demo if not set
setItemInLocalStorageInitially();

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
