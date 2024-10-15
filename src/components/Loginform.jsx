import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import bg from '../images/bg.png';  // Ensure that the path to your image is correct
import { Link } from 'react-router-dom';

const Loginform = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        const postData = {
            email: data.Email,
            password: data.Password,
        };
        console.log(postData);

        axios.post('http://192.168.1.7:8080/v1/user/login', postData)
            .then((res) => {
                console.log('Data sumbmitted successfully', res.data);
            })
            .catch((error) => {
                console.error('There was an error:', error);
            });
    };

    return (
        <div className="min-h-screen bg-purple-800 flex justify-center items-center ">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row w-full max-w-4xl m-6 justify-center items-center">

                <div className="p-8 md:w-1/2 ">
                    <h1 className="text-3xl font-semibold text-center text-purple-800 mb-6">Login</h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <div>
                            <input
                                type="text"
                                placeholder="Email"
                                {...register("Email", { required: "User Name is required" })}
                                className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 ${errors.Email ? "border-red-500" : "border-gray-300"}`}
                            />
                            {errors.Email && <p className="text-red-500 text-sm mt-1">{errors.Email.message}</p>}
                        </div>

                        {/* Password Input */}
                        <div>
                            <input
                                type="password"
                                placeholder="Password"
                                {...register("Password", { required: "Password is required", maxLength: 12 })}
                                className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 ${errors.Password ? "border-red-500" : "border-gray-300"}`}
                            />
                            {errors.Password && <p className="text-red-500 text-sm mt-1">{errors.Password.message}</p>}
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-purple-700 text-white p-3 rounded-lg hover:bg-purple-800 transition-all duration-300"
                        >
                            Login
                        </button>
                    </form>

                    {/* Register Link */}
                    <p className="text-center text-gray-600 mt-4">
                        Don't Have An Account? <Link to="/signup" className="text-purple-700 hover:underline">Register</Link>
                    </p>
                </div>

                {/* Image Section */}
                <div className="md:flex md:w-1/2 bg-gray-200 justify-center items-center p-4">
                    <img src={bg} alt="Background" className="rounded-lg" />
                </div>
            </div>
        </div>
    );
};

export default Loginform;
