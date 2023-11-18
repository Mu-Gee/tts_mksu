import React, { useState } from "react";
function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); //creating a new state
  const [username, setUsername] = useState("");

  const handleSubmit = (e: { preventDefault: () => void }) => {
    //to capture values when user uses the form
    //e is the event thats passed
    e.preventDefault(); //toprevent loosing of state once page is reloaded
    console.log(email);
  };
  //div class name for styling
  return (
    <div className="auth-form-container">
      <h2>Register</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="Username">Username</label>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="Enter username"
          id=""
          name="username"
        />
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
        <button className="button" type="submit">Register</button>
      </form>
      <button className="link-btn" onClick={() => props.onFormSwitch("login")}>
        Already have an account?Login here.
      </button>
    </div>
  );
}
export default RegisterPage;
