import React from 'react';
import ReactDOM from 'react-dom'; 
import Feed from './components/Feed';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Feed />, document.getElementById('root'));
registerServiceWorker();
