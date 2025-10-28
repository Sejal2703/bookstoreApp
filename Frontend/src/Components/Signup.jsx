import React, { use } from 'react';
import { Link, Navigate, replace, useLocation, useNavigate } from 'react-router-dom';
import Login from './Login';
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Signup() {
  const location=useLocation()
  const navigate=useNavigate()
  const from=location.state?.from?.pathname || "/"

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo={
      fullname:data.fullname,
      email:data.email,
      password:data.password,
     }
     await axios.post("http://localhost:4001/user/signup", userInfo)
     .then((res) =>{
      console.log(res.data)
      if(res.data){
      toast.success("Signup Successfully");
      navigate(from ,{replace:true});
      }
      localStorage.setItem("Users", JSON.stringify(res.data.user));
     })
     .catch((err) =>{
      if(err.response){
      console.log(err);
      toast.error("Error: ", + err.response.data.message);
      }
     });
  };

  return (
    <div className='flex h-screen items-center justify-center'>
      <div className="w-[600px] border-[2px] shadow-md p-5 rounded-md relative">
        
        {/* Signup Form */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <h3 className="font-bold text-lg mb-4">Signup</h3>

          <div className='mt-4'>
            <label>Name</label><br />
            <input
              type="text"
              placeholder='Enter your full name'
              className='w-80 px-3 py-1 border rounded-md outline-none'
              {...register("fullname", { required: true })}
            />
            {errors.fullname && <p className="text-red-500 text-sm">Full name is required</p>}
          </div>

          <div className='mt-4'>
            <label>Email</label><br />
            <input
              type="email"
              placeholder='Enter your email'
              className='w-80 px-3 py-1 border rounded-md outline-none'
              {...register("email", { required: true })}
            />
            {errors.email && <p className="text-red-500 text-sm">Email is required</p>}
          </div>

          <div className='mt-4'>
            <label>Password</label><br />
            <input
              type="password"
              placeholder='Enter your password'
              className='w-80 px-3 py-1 border rounded-md outline-none'
              {...register("password", { required: true })}
            />
            {errors.password && <p className="text-red-500 text-sm">Password is required</p>}
          </div>

          <button
            type="submit"
            className='mt-4 bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'
          >
            Signup
          </button>
        </form>

        {/* Login Section */}
        <div className='mt-4 text-xl'>
          Have an account?{" "}
          <button
            className='underline text-blue-500 cursor-pointer'
            onClick={() => document.getElementById("my_modal_3").showModal()}
          >
            Login
          </button>
        </div>

        {/* Login Modal */}
        <Login />
      </div>
    </div>
  );
}

export default Signup;
