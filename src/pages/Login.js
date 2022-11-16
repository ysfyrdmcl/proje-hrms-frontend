import React from "react";
import './index.css';


export default function Login() {

  const [username,setUsername] = React.useState('');
  const [password,setPassword] = React.useState('');  
  /**
   * DİKKAT!!! 
   * fonksiyonlarınız lütfen bileşenlerin gövdesinde yazmayın. yani
   * onClick methodunun içinde arrowfunction açarak yazmayın.
   */
 
  return (
    <div id="container">
    <h1>Log In</h1>
    <span className="close-btn">
      <img alt="" src="https://cdn4.iconfinder.com/data/icons/miu/22/circle_close_delete_-128.png"></img>
    </span>
    <input type="email" /*onChange={}*/ placeholder="Email" />
    <input type="password" /*onChange={(text)=>setPassword(text.target.value)}*/  placeholder="Password" />
    <input className="login" type="submit" value="Log in"/>     
    <a href="/ForgotPassword">Forgot My Password</a>
    <p>
      <label className="error" />
    </p>       
  
  </div>  
  );
}