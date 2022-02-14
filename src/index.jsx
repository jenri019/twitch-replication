import React from 'react'
import ReactDom from 'react-dom';
import MainPage from './pages/MainPage';
import './index.css'

const divRoot = document.querySelector('#root');

ReactDom.render(
    <MainPage />,
    divRoot
);