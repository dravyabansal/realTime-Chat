// import React, { useState } from "react";

// import Cookies from "universal-cookie";
// import axios from "axios";
// import signinImage from "../assets/signup.jpg";

// const initialState = {
//   fullName: "",
//   username: "",
//   password: "",
//   confirmPassword: "",
// };

// // Handle Submit function Logic
// const handleSubmit = async (e) => {
//   e.preventDefault();

//   const { fullName, username, password, phonenumber } = form;
//   const URL = "http://localhost:5000/auth";
//   const { data } = await axios.post(`${URL}/${isSIgnUp ? "signup" : "login"},{
//     username, fullname, password, phonenumber
//   }`);
// };
// const Auth = () => {
//   //  form State
//   const [form, setForm] = useState(initialState);

//   // handlle Change function for application inputs
//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//     console.log(form);
//   };

//   //To switch between signIn and SignUp users
//   const switchMode = () => {
//     setIsSignUp((prevIsSignUp) => !prevIsSignUp);
//   };

//   //   to check state of current user
//   const [isSIgnUp, setIsSignUp] = useState(true);

//   //   Rendering Elements for Authentication applications
//   return (
//     <div className="auth__form-container">
//       <div className="auth__form-container_fields">
//         <div className="auth__form-container_fields-content">
//           <p>{isSIgnUp ? "SignUp" : "SignIn"}</p>
//           <form onSubmit={handleSubmit}>
//             {isSIgnUp && (
//               <div className="auth__form-container_fields-content_input">
//                 <label htmlFor="fullName">Full Name</label>
//                 <input
//                   onChange={handleChange}
//                   type="text"
//                   required
//                   name="fullName"
//                   placeholder="Name"
//                 />
//               </div>
//             )}

//             <div className="auth__form-container_fields-content_input">
//               <label htmlFor="username">UserName</label>
//               <input
//                 onChange={handleChange}
//                 type="text"
//                 name="userName"
//                 required
//                 placeholder="userName"
//               />
//             </div>

//             {isSIgnUp && (
//               <div className="auth__form-container_fields-content_input">
//                 <label htmlFor="phoneNumber">Number</label>
//                 <input
//                   onChange={handleChange}
//                   type="number"
//                   name="Number"
//                   placeholder="Phoen Number"
//                   required
//                 />
//               </div>
//             )}

//             <div className="auth__form-container_fields-content_input">
//               <label htmlFor="password">PassWord</label>
//               <input
//                 onChange={handleChange}
//                 type="password"
//                 name="password"
//                 placeholder="******"
//                 required
//               />
//             </div>

//             {isSIgnUp && (
//               <div className="auth__form-container_fields-content_input">
//                 <label htmlFor="confirmPassword">Confirm PassWord</label>
//                 <input
//                   onChange={handleChange}
//                   type="password"
//                   name="confirmPassword"
//                   placeholder="******"
//                   required
//                 />
//               </div>
//             )}

//             <div className="auth__form-container_fields-content_button">
//               <button>{isSIgnUp ? "Sign Up" : "Sign In"}</button>
//             </div>
//           </form>

//           <div className="auth__form-container_fields-accounts">
//             <p>
//               {isSIgnUp
//                 ? "Already have an account?"
//                 : "Already have an account?"}
//               <span onClick={switchMode}>
//                 {isSIgnUp ? " SignIn" : " SignUp"}
//               </span>
//             </p>
//           </div>
//         </div>
//         <div className="auth__form-container_image">
//           <img src={signinImage} alt="Sign In" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Auth;

import React, { useState } from "react";
import Cookies from "universal-cookie";
import axios from "axios";

import signinImage from "../assets/signup.jpg";

const cookies = new Cookies();

const initialState = {
  fullName: "",
  username: "",
  password: "",
  confirmPassword: "",
  phoneNumber: "",
  avatarURL: "",
};

const Auth = () => {
  const [form, setForm] = useState(initialState);
  const [isSignup, setIsSignup] = useState(true);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { username, password, phoneNumber, avatarURL } = form;

    const URL = "https://localhost:5000/auth";
    // const URL = 'https://medical-pager.herokuapp.com/auth';

    const {
      data: { token, userId, hashedPassword, fullName },
    } = await axios.post(`${URL}/${isSignup ? "signup" : "login"}`, {
      username,
      password,
      fullName: form.fullName,
      phoneNumber,
      avatarURL,
    });

    cookies.set("token", token);
    cookies.set("username", username);
    cookies.set("fullName", fullName);
    cookies.set("userId", userId);

    if (isSignup) {
      cookies.set("phoneNumber", phoneNumber);
      cookies.set("avatarURL", avatarURL);
      cookies.set("hashedPassword", hashedPassword);
    }

    window.location.reload();
  };

  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
  };

  return (
    <div className="auth__form-container">
      <div className="auth__form-container_fields">
        <div className="auth__form-container_fields-content">
          <p>{isSignup ? "Sign Up" : "Sign In"}</p>
          <form onSubmit={handleSubmit}>
            {isSignup && (
              <div className="auth__form-container_fields-content_input">
                <label htmlFor="fullName">Full Name</label>
                <input
                  name="fullName"
                  type="text"
                  placeholder="Full Name"
                  onChange={handleChange}
                  required
                />
              </div>
            )}
            <div className="auth__form-container_fields-content_input">
              <label htmlFor="username">Username</label>
              <input
                name="username"
                type="text"
                placeholder="Username"
                onChange={handleChange}
                required
              />
            </div>
            {isSignup && (
              <div className="auth__form-container_fields-content_input">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                  name="phoneNumber"
                  type="text"
                  placeholder="Phone Number"
                  onChange={handleChange}
                  required
                />
              </div>
            )}
            {isSignup && (
              <div className="auth__form-container_fields-content_input">
                <label htmlFor="avatarURL">Avatar URL</label>
                <input
                  name="avatarURL"
                  type="text"
                  placeholder="Avatar URL"
                  onChange={handleChange}
                  required
                />
              </div>
            )}
            <div className="auth__form-container_fields-content_input">
              <label htmlFor="password">Password</label>
              <input
                name="password"
                type="password"
                placeholder="Password"
                onChange={handleChange}
                required
              />
            </div>
            {isSignup && (
              <div className="auth__form-container_fields-content_input">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm Password"
                  onChange={handleChange}
                  required
                />
              </div>
            )}
            <div className="auth__form-container_fields-content_button">
              <button>{isSignup ? "Sign Up" : "Sign In"}</button>
            </div>
          </form>
          <div className="auth__form-container_fields-account">
            <p>
              {isSignup ? "Already have an account?" : "Don't have an account?"}
              <span onClick={switchMode}>
                {isSignup ? "Sign In" : "Sign Up"}
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="auth__form-container_image">
        <img src={signinImage} alt="sign in" />
      </div>
    </div>
  );
};

export default Auth;
