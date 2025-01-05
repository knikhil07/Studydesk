import React, { useContext } from "react";
import { FaArrowLeft, FaArrowRight, FaEye, FaUser } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import AppContext from "../Appcontext/AppContext";

const Login = () => {
  const {
    Islogin,
    setIsLogin,
    email,
    setEmail,
    Password,
    setPassword,
    Signemail,
    setSignEmail,
    SignUserName,
    setSignUserName,
    SignPassword,
    setSignPassword,
    SignCheckPassword,
    setSignCheckPassword,
    handldeLogin,
    signUPStates,setsignUPStates
  } = useContext(AppContext);

  const valuesChecker=(v1,v2)=>{
    const tester=/^[a-zA-Z0-9]/;
    if(tester.test(v1) && tester.test(v2) ){
    setsignUPStates(false);
    toast.success("Email : "+v1);
    }
    else{
        setsignUPStates(!false);
        toast.error("Invalid input! maybe: spaces are allowed.");
        
    }
  }
  return (
    <div className="h-screen w-screen bg-white sm:bg-black/5 flex items-center justify-center">
      {Islogin ? (
        <div className="h-[28rem] w-full sm:w-[26rem] sm:bg-white sm:rounded-2xl p-8">
          <h2 className="text-3xl cursor-pointer font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text ">
            Studydesk
          </h2>
          <h2 className="text-2xl cursor-pointer font-semibold text-slate-700 mt-2 ">
            Login
          </h2>

          <div className="p-3 mt-8 flex flex-col items-center gap-3">
            <div className="border-2 border-sky-500 w-72 5 py-2 rounded-xl flex items-center justify-center gap-4 ">
              <button className="text-sky-500">
                <FaUser />
              </button>
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email.trim()}
                type="email"
                className="outline-none bg-transparent"
                placeholder="Email Id"
              />
            </div>
            <div className="border-2 border-sky-500  w-72 py-2 rounded-xl flex items-center justify-center gap-4 ">
              <button className="text-sky-500">
                <FaEye />
              </button>
              <input
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                value={Password.trim()}
                type="password"
                className="outline-none bg-transparent"
                placeholder="Password"
              />
            </div>
            <button
              onClick={handldeLogin}
              className="px-20 mt-3 py-2 rounded-md bg-sky-500 text-white"
            >
              Login
            </button>
          </div>
          <div className="mt-4 *:cursor-pointer text-center border-t-2 py-2">
            <span
              onClick={() => {
                setIsLogin((prev) => !prev);
              }}
              className="text-sky-500"
            >
              create an Account now
            </span>
          </div>
        </div>
      ) : (
        <div className="relative min-h-[28rem] w-full py-6 sm:w-[26rem] sm:bg-white sm:rounded-2xl backdrop-blur-xl p-12">
          <button
            onClick={() => {
              setIsLogin((prev) => !prev);
            }}
            className="absolute -top-6 left-6 sm:top-2 sm:left-2 px-2 py-2 bg-black/10 rounded-full"
          >
            <FaArrowLeft />
          </button>
          <h2 className="text-3xl cursor-pointer font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text ">
            Studydesk
          </h2>
          <h2 className="text-2xl cursor-pointer font-semibold text-slate-700 mt-2 ">
            Signup
          </h2>

          <div className="p-3 mt-8 flex flex-col items-center gap-4">
            {  signUPStates ? (
              <>
                <div className="border-2 border-sky-500 w-72 5 py-2 rounded flex items-center justify-center gap-4 ">
                  <input
                    onChange={(e) => {
                      setSignEmail(e.target.value);
                    }}
                    value={Signemail.trim()}
                    type="email"
                    className="outline-none bg-transparent"
                    placeholder="Email"
                   
                  />
                </div>
                <div className="border-2 border-sky-500 w-72 5 py-2 rounded flex items-center justify-center gap-4 ">
                  <input
                    onChange={(e) => {
                      setSignUserName(e.target.value);
                    }}
                    value={SignUserName.trim()}
                    type="text"
                    className="outline-none bg-transparent"
                    placeholder="Username"
                  />

                </div>
                <button
              onClick={
               ()=>{valuesChecker(Signemail,SignUserName)}}
              className="ml-28 flex items-center  gap-2  px-10 mt-3 py-2 rounded-md bg-sky-500 text-white"
            >
              next{" "}
              <p>
                <FaArrowRight />
              </p>
            </button>
              </>
            ) : (
              <>
                <div className="border-2 border-sky-500  w-72 py-2 rounded flex items-center justify-center gap-4 ">
                  <input
                    onChange={(e) => {
                      setSignPassword(e.target.value);
                    }}
                    value={SignPassword.trim()}
                    type="password"
                    className="outline-none bg-transparent"
                    placeholder="create Password"
                  />
                </div>
                <div className="border-2 border-sky-500  w-72 py-2 rounded flex items-center justify-center gap-4 ">
                  <input
                    onChange={(e) => {
                      setSignCheckPassword(e.target.value);
                    }}
                    value={SignCheckPassword.trim()}
                    type="password"
                    className="outline-none bg-transparent"
                    placeholder="conform Password"
                  />
                </div>
                <button
              onClick={handldeLogin}
              className="ml-28   px-10 mt-3 py-2 rounded-md bg-sky-500 text-white"
            >
              signUp
            </button>
              </>
            )}

          
          </div>
        </div>
      )}
      <ToastContainer/>
    </div>
  );
};

export default Login;

