import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({});
  const [passMatch, setPassMatch] = useState("empty");
  const [pass, setPass] = useState();
  const [conPass, setConPass] = useState();
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    const data = {
      firstName: e.target[0].value,
      lastName: e.target[2].value,
      email: e.target[4].value,
      password: e.target[6].value,
      confirmPass: e.target[8].value,
    };
    setFormData(data);

    let response = await fetch("http://localhost:5000/api/v1/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    response = await response.json();
    if (response.success === "false") {
      alert(response.message);
    } else {
      navigate("/login");
    }
  };

  const passHandler = (cp) => {
    if (pass === cp) {
      setPassMatch(true);
    } else {
      setPassMatch(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-2xl rounded-xl">
        <h2 className="text-3xl font-bold text-center text-[#9333ea]">
          Create an Account
        </h2>
        <form onSubmit={submitHandler} className="space-y-5">
          <TextField
            id="outlined-required"
            label="First Name"
            placeholder="Enter the first name"
            className="w-full"
            sx={{
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                  borderColor: "#9333ea",
                },
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "#9333ea",
              },
            }}
          />
          <TextField
            id="outlined-required"
            label="Last Name"
            placeholder="Enter the last name"
            className="w-full"
            sx={{
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                  borderColor: "#9333ea",
                },
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "#9333ea",
              },
            }}
          />
          <TextField
            id="outlined-required"
            label="Email"
            placeholder="Enter E-mail"
            className="w-full"
            sx={{
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                  borderColor: "#9333ea",
                },
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "#9333ea",
              },
            }}
          />
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            placeholder="Enter Password"
            className="w-full"
            onChange={(e) => setPass(e.target.value)}
            sx={{
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                  borderColor: "#9333ea",
                },
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "#9333ea",
              },
            }}
          />

          {passMatch === "empty" && <p></p>}
          {passMatch === true && (
            <p className="text-green-600">Passwords match!</p>
          )}
          {passMatch === false && (
            <p className="text-red-600">Passwords don't match!</p>
          )}

          <TextField
            id="outlined-password-input"
            label="Confirm Password"
            type="password"
            autoComplete="current-password"
            placeholder="Confirm password"
            className="w-full"
            onChange={(e) => {
              setConPass(e.target.value);
              passHandler(e.target.value);
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                  borderColor: "#9333ea",
                },
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "#9333ea",
              },
            }}
          />

          <div className="flex justify-between items-center">
            <Link
              to="/login"
              className="text-[#9333ea] hover:underline hover:text-[#7b2acc]"
            >
              Already have an account? Login
            </Link>
            <button
              type="submit"
              className="px-6 py-2 bg-[#9333ea] text-white rounded-md hover:bg-[#7b2acc] transition duration-200"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
