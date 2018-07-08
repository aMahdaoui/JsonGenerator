import React from 'react';
import ReactDOM from 'react-dom'; 
import Json from './components/Json';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Json />, document.getElementById('root'));
registerServiceWorker();
