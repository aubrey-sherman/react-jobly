import { useState } from 'react';
import logo from './logo.svg'
import './App.css';

import RoutesList from './RoutesList.jsx';


/** Component for entire page.
 *
 * Props: none
 * State: none
 *
 * App -> RoutesList
*/

function App() {
  return (
    <div className="App">
      <RoutesList />
    </div>
  );
};

export default App;
