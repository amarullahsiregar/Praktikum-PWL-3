import React from 'react';
import './register.css';
import logo from './register_logo.png';

class Register extends React.Component{
    jikaKosong(){
      var namefield = document.getElementById('name')
      var usernamefield = document.getElementById('username')
      var passwordfield = document.getElementById('password')
        if (namefield.value!==""
            &&usernamefield.value!==""
            &&passwordfield.value!=="") {
          alert("Berhasil !")
        }else{
          namefield.placeholder="Nama tidak boleh kosong *"
          usernamefield.placeholder="Username tidak boleh kosong *"
          alert("Kolom bertanda * Tidak Boleh Kosong")
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
              <input type="text" name="surname" placeholder="Nama Keluarga" />
              <input type="text" name="username" id="username" placeholder="Username *"/>
              <input type="password" name="password" placeholder="Password *"/>
              <input type="password" name="password2" placeholder="Retype password *"/>
              <input type="submit" onClick={this.jikaKosong.bind(this)} id="register_submit" value="Register" />
          </div>
      </div>
      )
    }
    
  }
  export default Register;