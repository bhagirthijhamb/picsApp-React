import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

ReactDOM.render(<App />, document.querySelector('#root'));

// App challenges
// - Need to get a search term from the user
// - Need to use that search term  to make a request to an outside api and fetch data
// - Need to take the fetched images and show them on the sreen in  a list.