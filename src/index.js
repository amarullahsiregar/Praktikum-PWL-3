import React from 'react';
import ReactDOM from 'react-dom';
import Register from './Register'
import Header from './myHeader'

let judul = "Prak PWL 2"

class Car extends React.Component {
  constructor() {
    super();
    this.color = "blue"
  }
  render() {
    return <h2>I am a {this.props.color} Car!</h2>;
  }
}

ReactDOM.render(judul, document.getElementById('judul'));
ReactDOM.render(<Header/>, document.getElementById('header'));
ReactDOM.render(<Register/>, document.getElementById('body'));