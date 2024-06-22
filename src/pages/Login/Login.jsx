import { Helmet } from "react-helmet-async";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Swal from "sweetalert2";

const Login = () => {
    const { signInUser, googleLogin } = useAuth();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location?.state || "/";

    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        background: "var(--accent-100)",
        iconColor: "var(--primary-500)",
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        }
    });

    const onSubmit = async (data) => {
        const { email, password } = data;
        try {
            await signInUser(email, password);
            setError(null);
            Toast.fire({
                icon: "success",
                title: "Signed in successfully"
            });
            navigate(from);
            reset();
        } catch (error) {
            console.error(error);
            setError("Invalid email or password. Please try again!");
        }
    };

    const handleSocialLogin = async (socialProvider) => {
        try {
            const result = await socialProvider();
            if (result) {
                Toast.fire({
                    icon: "success",
                    title: "Signed in successfully"
                });
                navigate(from);
                reset();
            }
        } catch (error) {
            console.error(error);
            setError("Failed to sign in with Google. Please try again later.");
        }
    };

    return (
        <>
            <Helmet>
                <title>GhorFix | Sign in</title>
            </Helmet>
            <div className="min-h-screen bg-background flex justify-center">
                <div className="max-w-screen-xl m-0 sm:m-10 shadow sm:rounded-lg flex justify-center flex-1 flex-row-reverse bg-accent-100">
                    <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12 my-auto">
                        <div className="flex justify-center gap-2 items-center">
                            <img src="./logo.png"
                                className="w-6" />
                            <h1 className="text-xl font-extrabold">GhorFix</h1>
                        </div>
                        <div className="mt-12 flex flex-col items-center">
                            <p className="text-2xl xl:text-3xl font-extrabold">
                                Login
                            </p>
                            <div className="w-full flex-1 mt-8">
                                <div className="flex flex-col items-center">
                                    <button
                                        className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-secondary-400 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline" onClick={ () => handleSocialLogin(googleLogin) }>
                                        <div className="p-2 rounded-full">
                                            <svg className="w-5" viewBox="0 0 533.5 544.3">
                                                <path
                                                    d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                                                    fill="#4285f4" />
                                                <path
                                                    d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                                                    fill="#34a853" />
                                                <path
                                                    d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                                                    fill="#fbbc04" />
                                                <path
                                                    d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                                                    fill="#ea4335" />
                                            </svg>
                                        </div>
                                        <span className="ml-4">
                                            Continue with Google
                                        </span>
                                    </button>
                                </div>

                                <form onSubmit={ handleSubmit(onSubmit) } className="my-12 border-b border-accent-200 text-center">
                                    <div
                                        className="leading-none px-2 inline-block text-sm tracking-wide font-medium bg-bg transform translate-y-1/2">
                                        or login with e-mail
                                    </div>
                                </form>

                                <div className="mx-auto max-w-xs">
                                    <input { ...register("email", { required: "Email is required*" }) }
                                        className="w-full px-8 py-4 rounded-lg font-medium bg-secondary-50 border border-primary-200 placeholder-gray-500 text-sm focus:outline-none focus:border-primary-400"
                                        type="email" placeholder="Email" />
                                    { errors.email && <p className="mt-1 text-sm text-red-500 italic">{ errors.email.message }</p> }
                                    <input { ...register("password", { required: "Password is required*" }) }
                                        className="w-full px-8 py-4 rounded-lg font-medium bg-secondary-50 border border-primary-200 placeholder-gray-500 text-sm focus:outline-none focus:border-primary-400 mt-5"
                                        type="password" placeholder="Password" />
                                    { errors.password && (
                                        <p className="mt-1 text-sm text-red-500 italic">{ errors.password.message }</p>
                                    ) }
                                    <button type="submit"
                                        className="mt-5 tracking-wide font-semibold bg-primary-950 text-text-50 w-full py-4 rounded-lg hover:bg-primary-900 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                                        <svg className="w-6 h-6 -ml-2" fill="none" stroke="currentColor" strokeWidth="2"
                                            strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                            <circle cx="8.5" cy="7" r="4" />
                                            <path d="M20 8v6M23 11h-6" />
                                        </svg>
                                        <span className="ml-3">
                                            Login
                                        </span>
                                    </button>
                                    { error && (
                                        <p className="mt-2 text-sm text-red-500 italic">{ error }</p>
                                    ) }
                                    <p className="mt-6 text-xs text-gray-500 text-center">
                                        I agree to abide by the{ ' ' }
                                        <a href="#" className="border-b border-gray-500 border-dotted">
                                            Terms of Service
                                        </a>{ ' ' }
                                        and{ ' ' }
                                        <a href="#" className="border-b border-gray-500 border-dotted">
                                            Privacy Policy
                                        </a>
                                    </p>
                                    <div className="mt-4 text-sm flex justify-between items-center">
                                        <p>Do not have an account?</p>
                                        <Link to="/signup">
                                            <button className="bg-secondary-500 rounded-lg py-2 px-5 font-semibold duration-300">Sign Up</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 bg-secondary text-center hidden lg:flex rounded-l-lg">
                        <div
                            className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
                            style={ {
                                backgroundImage: "url('https://i.postimg.cc/6qKxvbpB/login.png')"
                            } }
                        >
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;