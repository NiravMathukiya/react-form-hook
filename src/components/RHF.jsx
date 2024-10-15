import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';


export default function RHF() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const navgate = useNavigate()

    console.log(errors)

    const password = watch("Password");
    // const confirm_password = watch("confirm_password")

    const navgatefun =async () =>{
        await setInterval(() => {
            
            navgate("/login")
        }, 2000);
    }
    const onSubmit =  (data) => {
        const fullName = `${data["First name"]} ${data["Last name"]}`;
        const postData = {
            email: data.Email,
            mobile: data.Mobile_number,
            password: data.Password,
            name: fullName
        };
        console.log(postData);

        axios.post('http://192.168.1.7:8080/v1/user/register', postData)
          .then((res) => {
            console.log('Data submitted successfully', res.data);
            toast.success("User succesfully Register");
            navgatefun();
            
            
          })
          .catch((error) => {
            console.error('There was an error:', error);
          });
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-blue-600 p-6">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-white p-8 rounded-lg shadow-md w-full max-w-md space-y-6"
            >
                <h2 className="text-2xl font-bold text-center">Sign Up</h2>

                <input
                    type="text"
                    placeholder="First name"
                    {...register("First name", { required: true, maxLength: 80 })}
                    className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors["First name"] ? "border-red-500" : "border-gray-300"
                        }`}
        
                />
                {errors["First name"] && <p className="text-red-500">First name is required</p>}

                <input
                    type="text"
                    placeholder="Last name"
                    {...register("Last name", { required: true, maxLength: 100 })}
                    className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors["Last name"] ? "border-red-500" : "border-gray-300"
                        }`}
                />
                {errors["Last name"] && <p className="text-red-500">Last name is required</p>}

                <input
                    type="text"
                    placeholder="Email"
                    {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
                    className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.Email ? "border-red-500" : "border-gray-300"
                        }`}
                />
                {errors.Email && <p className="text-red-500">Valid email is required</p>}

                <input
                    type="tel"
                    placeholder="Mobile number"
                    {...register("Mobile_number", { required: true, minLength: 6, maxLength: 12 })}
                    className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors["Mobile number"] ? "border-red-500" : "border-gray-300"
                        }`}
                />
                {errors["Mobile number"] && <p className="text-red-500">Mobile number is required</p>}

                <input
                    type="text"
                    placeholder="Password"
                    {...register("Password", { required: false, maxLength: 30})}
                    className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.Password ? "border-red-500" : "border-gray-300"
                        }`}
                />
                {errors.Password && <p className="text-red-500">Password is required</p>}

                <input
                    type="text"
                    placeholder="Confirm Password"
                    {...register("confirm_password", {
                        required: true,
                        validate: value => value === password || "Passwords do not match"
                    })}
                    className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.confirm_password ? "border-red-500" : "border-gray-300"
                        }`}
                />
                {errors.confirm_password && <p className="text-red-500">{errors.confirm_password.message}</p>}

                <input
                    type="text"
                    name="ref_code"
                    id="ref_code"
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Reference Code"
                />

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition-all duration-300"
                >
                    Submit
                </button>

                <p className="text-center text-gray-600 mt-4">
                        Already Have An Account? <Link to="/login" className="text-purple-700 hover:underline">Register</Link>
                    </p>
            </form>
            <Toaster />
        </div>
    );
}
