import React from 'react'
import { useForm  } from 'react-hook-form'
import './account.css'

const Account = () => {

    const { register , handleSubmit , formState : { errors } } = useForm()

    const submit = ({ email , password }) => {

    }

    return (
            <form
            onSubmit={handleSubmit(submit)}
            className="mx-auto w-50 bg-gray-100  text-center mt-9 rounded-xl">
                    <h5 className="text-black text-2xl mb-4">
                        ورود به حساب کاربری
                    </h5>
                <div className="mb-8">
                    <input 
                    {...register('email' , { required : true })}
                    className="w-50 rounded-xl p-2 outline-0" autoFocus 
                    type="email" id="email" placeholder="email" 
                    />
                    {errors.email && (
                        <div className="text-red-500">
                          ایمیل خود را وارد کنید                           
                        </div>
                    )}
                </div>
                <div className="mb-8">
                    <input
                    {...register('password' , { 
                        required : true ,
                        minLength : {
                        value : 5 ,
                        message : "password must be at least 5 chars"
                        }
                    })}
                    className="w-50 rounded-xl p-2 outline-0" autoFocus 
                    type="password" id="password" placeholder="password" 
                    />
                    {errors.password && (
                        <div className="text-red-500">
                            {errors.password.message}
                        </div>
                    )}
                </div>
                <div className="mb-8">
                    <button className="rounded-xl bg-green-500 text-white px-4 py-1 mx-4  w-22" type="button">
                        ورود کاربر
                    </button>
                    <button href="/createAccount" className="rounded-xl bg-blue-300 text-blue px-4 py-1 outline-0  w-22">
                        ساختن حساب کاربری
                    </button>
                </div>
            </form>
    )
}

export default Account