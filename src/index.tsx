import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './App';
import { InputValueProvider } from './context/InputValueContext';
ReactDOM.render(
    <React.StrictMode>
        <InputValueProvider>
            <App headerText='This is a header' />
        </InputValueProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
