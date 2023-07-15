import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import DefaultLayout from '../../Layout/DefaultLayout';
import '../../assets/Style/style.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';



const Signup = () => {
  const {createUser,loading} = useContext(AuthContext)
  const [error,setError] = useState(null)
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
    // console.log(data)
    const name = data.name ;
    const email = data.email ;
    const password = data.password ;
    const confirmPassword = data.confirmPassword ;
    console.log(name,email,password,confirmPassword)
    if(password !== confirmPassword){
      setError(`Create password and confirm didn't match ` )
      return ;
    }else{
      setError(null)
    }
    createUser(email,password)
    .then(result => {
      const userData  = result.user ;
      console.log(result,userData)
    } )
    .catch(err => {
      console.log(err.message)
    })

  };

    return (
       <DefaultLayout>
         <div id='signup' className='flex items-center'>
        <form onSubmit={handleSubmit(onSubmit)} className='border glass flex flex-col lg:w-2/5 w-11/12 mx-auto px-5 py-2 rounded-sm'>
        <h1 className='text-4xl font-semibold mt-4 text-neutral-200'> Sign up here  </h1>
     <div className='mt-6 '>
     <p className='text-2xl font-semibold text-neutral-200'> Enter your name </p>
      <input placeholder='Enter your name' type='text' {...register("name",{ required: "Name  is required" })}  className='input border-slate-300 w-full  bg-slate-200 text-slate-700' />
      {errors.name && <p className='text-red-500'> {errors?.name?.message}  </p>}

     </div>

     <div className='mt-4'>
     <label className='text-2xl font-semibold text-neutral-200'> Enter your email: </label>
      <input placeholder='Enter your email' type='email' {...register("email", { required: "Email is required" })} className='input border-slate-300 w-full bg-slate-200' />
      {/* errors will return when field validation fails  */}
      {errors.email && <p className='text-red-500'>  {errors?.email?.message} </p>}
     </div>

     <div className='mt-4'>
     <label className='text-2xl font-semibold text-neutral-200'> Create  password: </label>
      <input placeholder='Enter your password' {...register("password", { required: "Create password is  required" })} className='input w-full border-slate-300  bg-slate-200' />
      {/* errors will return when field validation fails  */}
      {errors.password && <p className='text-red-500'> {errors?.password?.message} </p>}
     </div>

     <div className='mt-4'>
     <label className='text-2xl font-semibold text-neutral-200'> Confirm password: </label>
      <input placeholder='Enter your password' {...register("confirmPassword", { required: "Confirm password is required" })} className='input w-full border-slate-300  bg-slate-200' />
      {/* errors will return when field validation fails  */}
      {errors.confirmPassword && <p className='text-red-500'> {errors?.confirmPassword?.message} </p>}
      <p className='text-red-600'> {error} </p>
     </div>
      
      <div className='mt-4 mb-5 flex gap-x-6 items-center'>
      <button type="submit" className='  border-none w-40 h-10 text-white bg-gray-800 hover:bg-gray-600 glass' > Submit </button>  
      <h1 className='text-white text-lg'> Already you  have an  account  ?  <Link to={'/signin'} className='text-blue-500 hover:text-blue-400 font-semibold'> Log in </Link> </h1>
      </div>
      
    </form>
    </div>
      </DefaultLayout>
    );
};

export default Signup;