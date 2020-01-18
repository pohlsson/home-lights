import React from 'react';
import LightConnector from "./components/lightConnector";
import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background: #8EADE1;
  }
`;

const App = () => {
    return (
        <div className="App">
            <GlobalStyle/>
            <LightConnector/>
        </div>
    );
};

export default App;
