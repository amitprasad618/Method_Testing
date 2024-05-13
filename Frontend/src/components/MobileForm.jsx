import React, { useState } from 'react';
import axios from 'axios';
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";

function MobileForm() {
    const from = location.state?.from?.pathname || "/";
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        const userInfo = {
            Name: data.Name,
            Email: data.Email,
            Password: data.Password,
        };

        await axios
            .post("http://localhost:4001/User", userInfo)
            .then((res) => {
                console.log(res.data);
                if (res.data) {
                    toast.success("Submit Successfully");
                    window.location.reload();
                    navigate(from, { replace: true });
                }
            })
            .catch((err) => {
                if (err.response) {
                    console.log(err);
                    toast.error("Error: " + err.response.data.message);
                }
            });
    };

    return (
        <>
            <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
                <div className="mockup-phone">
                    <div className="camera"></div>
                    <div className="display">
                        <div className="artboard artboard-demo phone-1">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="mt-4 space-y-2">
                                    <span>Name</span>
                                    <br />
                                    <input
                                        type="text"
                                        placeholder="Enter your Full Name"
                                        className="w-80 px-3 py-1 border rounded-md outline-none"
                                        {...register("Name", { required: true })}
                                    />
                                    <br />
                                    {errors.Name && (
                                        <span className="text-sm text-red-500">
                                            This field is required
                                        </span>
                                    )}
                                </div>
                                <div className="mt-4 space-y-2">
                                    <span>Email</span>
                                    <br />
                                    <input
                                        type="email"
                                        placeholder="Enter your email ID"
                                        className="w-80 px-3 py-1 border rounded-md outline-none"
                                        {...register("Email", { required: true })}
                                    />
                                    <br />
                                    {errors.Email && (
                                        <span className="text-sm text-red-500">
                                            This field is required
                                        </span>
                                    )}
                                    <br />
                                </div>
                                <div className="mt-4 space-y-2">
                                    <span>Password</span>
                                    <br />
                                    <input
                                        type="password"
                                        placeholder="Enter your password"
                                        className="w-80 px-3 py-1 border rounded-md outline-none"
                                        {...register("Password", { required: true })}
                                    />
                                    <br />
                                    {errors.Password && (
                                        <span className="text-sm text-red-500">
                                            This field is required
                                        </span>
                                    )}
                                    <br />
                                </div>
                                <div className="flex justify-around mt-4">

                                    <button type="submit" className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                                        Submit
                                    </button>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div>
                    {/* Your other content */}
                </div>
            </div>
        </>
    );
}

export default MobileForm;
