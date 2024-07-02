import useAuth from "../../hooks/useAuth";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Toast from "../../components/Toast";

const SignUp = () => {
    const { createUser, updateUserProfile } = useAuth();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const from = "/";

    const onSubmit = async (data) => {
        const { fullName, photoURL, email, password } = data;

        try {
            await createUser(email, password);
            await updateUserProfile(fullName, photoURL);
            navigate(from);
            reset();
            Toast.fire({
                icon: "success",
                title: "Signed up successfully"
            });
        } catch (error) {
            if (error.code === "auth/email-already-in-use") {
                setError("Email is already in use. Please use a different email.");
            } else {
                setError("Failed to sign up. Please try again later.");
            }
        }
    };

    return (
        <>
            <Helmet>
                <title>GhorFix | Sign Up</title>
            </Helmet>
            <div className="min-h-screen flex justify-center mx-4 mb-16">
                <div className="max-w-screen-xl m-0 sm:m-10 shadow rounded-3xl flex justify-center flex-1 bg-accent-100">
                    <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12 my-auto">
                        <div className="flex justify-center gap-2 items-center">
                            <img src="./logo.png"
                                className="w-6" />
                            <h1 className="text-xl font-extrabold">GhorFix</h1>
                        </div>
                        <div className="mt-12 flex flex-col items-center">
                            <p className="text-2xl xl:text-3xl font-extrabold">
                                Sign up
                            </p>
                            <div className="w-full flex-1 mt-8">
                                <form onSubmit={ handleSubmit(onSubmit) } className="mx-auto max-w-xs">
                                    <input
                                        { ...register("fullName", {
                                            required: "Full name is required*",
                                            pattern: {
                                                value: /^[a-zA-Z]+ [a-zA-Z]+( [a-zA-Z]+)*$/,
                                                message: "Enter a valid full name*"
                                            },
                                            validate: {
                                                hasTwoWords: value => value.trim().split(" ").length >= 2 || "Full name must contain at least two words*"
                                            }
                                        }) }
                                        className="w-full px-8 py-4 rounded-full font-medium bg-secondary-50 border border-primary-200 placeholder-gray-500 text-sm focus:outline-none focus:border-primary-400"
                                        type="text" placeholder="First and Last Name" />
                                    { errors.fullName && <p className="mt-1 text-sm text-red-500 italic">{ errors.fullName.message }</p> }
                                    <input
                                        { ...register("photoURL", {
                                            required: "Photo URL is required*",
                                            pattern: {
                                                value: /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|svg))$/i,
                                                message: "Enter a valid image URL*"
                                            }
                                        }) }
                                        className="w-full px-8 py-4 rounded-full font-medium bg-secondary-50 border border-primary-200 placeholder-gray-500 text-sm focus:outline-none focus:border-primary-400 mt-5"
                                        type="url" placeholder="Photo URL" />
                                    { errors.photoURL && <p className="mt-1 text-sm text-red-500 italic">{ errors.photoURL.message }</p> }
                                    <input
                                        { ...register("email", {
                                            required: "Email is required*",
                                            pattern: {
                                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                                message: "Enter a valid email address*"
                                            }
                                        }) }
                                        className="w-full px-8 py-4 rounded-full font-medium bg-secondary-50 border border-primary-200 placeholder-gray-500 text-sm focus:outline-none focus:border-primary-400 mt-5"
                                        type="email" placeholder="Email" />
                                    { errors.email && <p className="mt-1 text-sm text-red-500 italic">{ errors.email.message }</p> }
                                    <input
                                        { ...register("password", {
                                            required: "Password is required*", minLength: {
                                                value: 6,
                                                message: "Password must be at least 6 characters long*"
                                            }, validate: {
                                                hasCapitalLetter: value => /[A-Z]/.test(value) || "Password must contain at least one capital letter*",
                                                hasSpecialCharacter: value => /[!@#$%^&*(),.?":{}|<>]/.test(value) || "Password must contain at least one special character*"
                                            }
                                        }) }
                                        className="w-full px-8 py-4 rounded-full font-medium bg-secondary-50 border border-primary-200 placeholder-gray-500 text-sm focus:outline-none focus:border-primary-400 mt-5"
                                        type="password" placeholder="Password" />
                                    { errors.password && (
                                        <p className="mt-1 text-sm text-red-500 italic">{ errors.password.message }</p>
                                    ) }
                                    <button type="submit"
                                        className="mt-5 tracking-wide font-semibold bg-primary-950 text-text-50 w-full py-4 rounded-full hover:bg-primary-900 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                                        <svg className="w-6 h-6 -ml-2" fill="none" stroke="currentColor" strokeWidth="2"
                                            strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                            <circle cx="8.5" cy="7" r="4" />
                                            <path d="M20 8v6M23 11h-6" />
                                        </svg>
                                        <span className="ml-3">
                                            Sign Up
                                        </span>
                                    </button>
                                    { error && (
                                        <p className="mt-2 text-sm text-red-500 italic">{ error }</p>
                                    ) }
                                    <p className="mt-6 text-xs text-gray-500 text-center">
                                        I agree to abide by the{ " " }
                                        <a href="#" className="border-b border-gray-500 border-dotted">
                                            Terms of Service
                                        </a>{ " " }
                                        and{ " " }
                                        <a href="#" className="border-b border-gray-500 border-dotted">
                                            Privacy Policy
                                        </a>
                                    </p>
                                    <div className="mt-4 text-sm flex justify-between items-center">
                                        <p>Already have an account?</p>
                                        <Link to="/login">
                                            <button className="bg-secondary-500 rounded-full py-2 px-5 font-semibold duration-300">Login</button>
                                        </Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 bg-secondary text-center hidden lg:flex rounded-r-lg">
                        <div
                            className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
                            style={ {
                                backgroundImage: "url('https://i.postimg.cc/QxHVxVwS/signup.png')"
                            } }
                        >
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;