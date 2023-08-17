import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import DefaultLayout from '../../Layout/DefaultLayout';
import { Link } from 'react-router-dom';

import  { AuthContext } from '../../Context/AuthProvider';
import { toast } from 'react-hot-toast';

const SignIn = () => {
  const {LoginUser}=useContext(AuthContext)
    const { register, handleSubmit, watch,reset, formState: { errors } } = useForm();
    // const onSubmit = data => console.log(data);
    // const auth = getAuth(app)
    const [loginError, setLoginError] = useState("");

    
  const  onSubmit = (data) => {
    
    LoginUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
    
        toast.success("Login Successfully");
        reset();
      })
      .catch((err) => {
   
        // setLoginError(err.code);
        toast.error(err.message)
      });
  };
    
    return (
        <DefaultLayout>
        <div id='signup' className='flex items-center'>
       <form onSubmit={handleSubmit(onSubmit)} className='border glass flex flex-col lg:w-2/5 w-11/12 mx-auto px-5 py-2 rounded-sm'>
       <h1 className='text-4xl font-semibold mt-4 text-neutral-200'> Log in now   </h1>
    

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

   
     
     <div className='mt-4 mb-5 flex gap-x-6 items-center'>
     <button type="submit" className='  border-none w-40 h-10 text-white bg-gray-800 hover:bg-gray-600 glass' > Submit </button>  
     <h1 className='text-black text-lg'> You  have no  account  ?  <Link to={'/signup'} className='text-blue-500 hover:text-blue-400 font-semibold'> Create account  </Link> </h1>
     </div>
     
   </form>
   </div>
     </DefaultLayout>
    );
};

export default SignIn;