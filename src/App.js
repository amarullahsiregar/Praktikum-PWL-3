import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
      </header>
      <body className="App-body" >
        <div id="login-box">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>Sign up</h1>
        
            <input type="text" name="nama" placeholder="Nama" />
            <input type="text" name="username" placeholder="Username" />
            <input type="password" name="password" placeholder="Password" />
            <input type="password" name="password2" placeholder="Retype password" />
        
            <input type="submit" name="register_submit" value="Register" />
            <p class="login">Back To <span><a id="logi" href=""><b>Login</b></a></span></p>
        </div>
        <script>
          var height = window.innerHeight;
          document.getElementById("logi").innerHTML = height;
        </script>
      </body>
    </div>
  );
}

export default App;
