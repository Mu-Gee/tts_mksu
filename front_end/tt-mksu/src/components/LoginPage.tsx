import React, { useState } from "react"; //for us to capture values of our users email &password inputs

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); //creating a new state
  const handleSubmit = (e: { preventDefault: () => void }) => {
    //to capture values when user uses the form
    //e is the event thats passed
    e.preventDefault(); //toprevent loosing of state once page is reloaded
    console.log(email);
  };

  //connect handle submit to the form
  //div class name for styling
  return (
    <div className="auth-form-container">
        <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input type="text" placeholder="Enter username" id="" name="username" />
        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Enter email"
          id=""
          name="email"
        />
        <label htmlFor="password">Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="*******"
          id=""
          name="password"
        />
       <button className="button" type="submit">Login</button>
      </form>
      <button className="link-btn" >
        Don't have an account?Register here.
      </button>
    </div>
  ); //button type submit fires the handle submit function
}

export default LoginPage;
