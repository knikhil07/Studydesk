import React from "react";

const Login = () => {
  return (
    <div className="h-screen bg-black/5 flex items-center flex-col justify-center">
      <div className="w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl bg-white  flex flex-col md:flex-row rounded-xl  items-center justify-center  ">
        <div className="h-96 w-full md:w-[50%]"></div>
        <div className="w-full md:w-[50%]  sm:w-96 h-96  bg-white  flex items-center justify-center flex-col gap-6  md:border-l-2 p-4 overflow-hidden">
          <h2 className="text-3xl font-bold px-2 cursor-pointer w-full mb-4 text-gray-600 ">
            Login
          </h2>
          <input
            type="text"
            className=" outline-none flex items-center w-72   px-4 h-12 bg-white ring-1 ring-slate-900/10 hover:ring-slate-300  focus:ring-2 focus:ring-sky-500  rounded-lg text-slate-950"
            placeholder="Username"
          />
          <input
            type="password"
            className=" outline-none flex items-center w-72   px-4 h-12 bg-white ring-1 ring-slate-900/10 hover:ring-slate-300  focus:ring-2 focus:ring-sky-500  rounded-lg text-slate-950"
            placeholder="Password"
          />
          <button className="bg-sky-500 px-28 rounded-lg text-white py-3">
            Login
          </button>
          <div className="border-t-2 border-black/20 px-6 ">
            <button className="py-2  text-slate-500 hover:text-slate-800">
              Create an Account
            </button>
          </div>
        </div>{" "}
       
      </div>
    </div>
  );
};

export default Login;
{
  /* <div className="w-full border-l-2 sm:w-96 h-96 p-6 bg-white  flex items-center justify-center flex-col gap-6 rounded-lg shadow-md shadow-black/5 overflow-hidden">
<h2 className="text-3xl font-bold px-2 cursor-pointer w-full mb-4 text-gray-600 " >Login</h2>
<input
  type="text"
  className=" outline-none flex items-center w-72   px-4 h-12 bg-white ring-1 ring-slate-900/10 hover:ring-slate-300  focus:ring-2 focus:ring-sky-500  rounded-lg text-slate-950"
  placeholder="Username"
/>
<input
  type="password"
  className=" outline-none flex items-center w-72   px-4 h-12 bg-white ring-1 ring-slate-900/10 hover:ring-slate-300  focus:ring-2 focus:ring-sky-500  rounded-lg text-slate-950"
  placeholder="Password"
/>
<button className="bg-sky-500 px-28 rounded-lg text-white py-3">Login</button>
<div className="border-t-2 border-black/20 px-6 ">
  <button className="py-2  text-slate-500 hover:text-slate-800">Create an Account</button>
</div>
</div> */
}
