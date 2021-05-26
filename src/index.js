import React from 'react';
import ReactDOM from 'react-dom';
import Register from './Register'
import Header from './myHeader'

let judul = "Prak PWL 3"

ReactDOM.render(judul, document.getElementById('judul'));
ReactDOM.render(<Header/>, document.getElementById('header'));
ReactDOM.render(<Register/>, document.getElementById('body'));