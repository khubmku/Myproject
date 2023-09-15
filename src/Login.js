import React, { useState } from "react";





function Login() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) 
    {
      if (userData.password !== pass.value) 
      {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } 
      else 
      {
        setIsSubmitted(true);
      }
    } 
    else 
    {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="border-solid border-2 border-indigo-600 ..." >
      <form onSubmit={handleSubmit}>
        <div >
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div >
          <label>Password </label>
          <input type="password" name="pass" required className="border-2 border-rose-600 ..." />
          {renderErrorMessage("pass")}
        </div>
        <div >
          <input type="submit" className="border-double border-4 border-indigo-600 ..." />
        </div>
      </form>
    </div>
  );

  return (
    <div className="border-solid border-2 border-indigo-900" >
      <div>
        <div >Sign In</div>
        {/* {isSubmitted ? <div>User is successfully logged in</div> : renderForm} */}
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      
      </div>
    </div>
  );
}

export default Login;