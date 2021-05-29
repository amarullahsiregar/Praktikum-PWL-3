import React from 'react';
import logo from './register_logo.png';

class Register extends React.Component{
  constructor () {
    super();
    this.state = {
      input: {
        'name': '',
        'surname': '',
        'username': '',
        'password': '',
        'password2': ''
      },
      errors:{}
    }
  }

  submit(){
    let input = this.state.input;
    input.name=document.getElementById('name').value
    input.surname=document.getElementById('surname').value
    input.username=document.getElementById('username').value
    input.password=document.getElementById('password').value
    input.password2=document.getElementById('password2').value
    

    this.cekIsi(this)
  }


  cekIsi(){
    let input = this.state.input;
    this.errors=""

    if(!input['name']){
      this.errors=" Nama,"
    }
    if(!input['username']){
      this.errors=this.errors+" Username,"
    }
    if(!input['password']){
      this.errors=this.errors+" Password"
    }
    if(input['password']!==input['password2']){
      this.errors=this.errors+" dan Pastikan re-password sesuai"
    }
    if(this.errors!==""){
      alert("Lengkapi Kolom"+this.errors)
      this.errors=""
    }else{
      alert("Berhasil")
    }
    }


    render() {
      return(
      <div className="App">
          <div id="login-box">
              <table id="judul">
                  <tr>
                      <td class="kiri"><span class="circle">֍</span>Aplikasi</td>
                      <td class="kanan"><p class="login"><a id="login" href="http://www.google.com">Login</a></p></td>
                  </tr>
              </table>
              <img src={logo} className="App-logo" alt="logo" />
              <h1><b>Sign up</b></h1>
              <input type="text" name="name" id="name" placeholder="Nama Depan*"/>
              <input type="text" name="surname" id="surname" placeholder="Nama Keluarga" />
              <input type="text" name="username" id="username" placeholder="Username *"/>
              <input type="password" name="password" id="password" placeholder="Password *"/>
              <input type="password" name="password2" id="password2" placeholder="Retype password *"/>
              <input type="submit" onClick={this.submit.bind(this)} id="register_submit" value="Register" />
          </div>
      </div>
      )
    }
    
  }
  export default Register;