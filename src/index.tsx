import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import 'core-js';
import 'proxy-polyfill';
import "whatwg-fetch";
import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/client';
import client from "./apollo/apolloClient"
import { APP } from './App';



ReactDOM.render(
    <ApolloProvider client={client}>
        <APP />
    </ApolloProvider>,
    document.getElementById('root')
);
