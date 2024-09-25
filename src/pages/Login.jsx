import { useState } from "react";
import Button from "../components/common/Button"
import axios from "axios";
import { Icon } from '@iconify/react';
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import AuthMe from "../utils/AuthMe";

export default function Login() {
    const [showPassword, setShowPassword] = useState();
    const [inputError, setInputError] = useState({ username: false, password: false });
    const [isLoading, setIsLoading] = useState(false);
    const [input, setInput] = useState({ username: "", password: "" });
    const navigate = useNavigate();

    const submitData = async (e) => {
        e.preventDefault();

        if (!input.username || !input.password) {
            toast.error("Masukan username dan password");
            setInputError({ username: !input.username, password: !input.password });
            return;
        }

        try {
            setIsLoading(true);
            let user = new FormData();
            user.append('username', input.username);
            user.append('password', input.password);
            const { data } = await axios.post("/login", user);

            const token = data.data.access_token;
            const refreshToken = data.data.refresh_token;
            localStorage.setItem("token", token);
            localStorage.setItem("refreshToken", refreshToken);

            toast.success(data.message);

            if (data.data.role === 2) {
                navigate("/m/dashboard", { replace: true });
            } else if (data.data.role === 3) {
                navigate("/p/dashboard", { replace: true });
            } else if (data.data.role === 1) {
                toast.success("Anda Sebagai admin");
            }
        } catch (error) {
            console.error(error);
            toast.error(error.response.data.message);
        } finally {
            setIsLoading(false);
        }
    }


    return (
        <>
            <AuthMe />
            <div className="bg-gradient-to-tr from-primary-4 to-primary-1 h-screen w-screen flex justify-center items-center">
                <div className="bg-white w-96 h-[550px] rounded-3xl p-8 text-center flex justify-center items-center ">
                    <div className="flex flex-col gap-6">
                        <p className="text-3xl font-semibold">Login</p>
                        <p className=" text-xs text-gray-700 ">Selamat datang di Sistem Audit Rumah Sakit,
                            Silahkan pilih jenis login</p>

                        <div>
                            <form className="flex flex-col gap-6 ">
                                <div className="relative input-container">
                                    <input
                                        type="text"
                                        name="username"
                                        placeholder=" "
                                        onChange={(e) => setInput({ ...input, username: e.target.value })}
                                        className={`disabled:cursor-not-allowed focus:invalid:border-red-600 border border-black border-opacity-50 outline-none rounded-2xl w-full h-12 pl-4 
                                             focus:text-black transition duration-200 ${!input.username && inputError.username ? "input-error" : ""
                                            }`}
                                        disabled={isLoading}
                                    />
                                    <label className="input-text">Username</label>
                                </div>


                                <div className="relative input-container">
                                    <input type={showPassword ? "text" : "password"}
                                        name="password"
                                        placeholder=""
                                        onChange={(e) => setInput({ ...input, password: e.target.value })}
                                        className={`disabled:cursor-not-allowed border border-black border-opacity-50 outline-none 
                                     rounded-2xl w-full h-12 pl-4 pr-10 ${!input.password && inputError.password ? "input-error" : ""} `}
                                        disabled={isLoading}
                                    />
                                    <label className="input-text">Password</label>
                                    <button type="button" className="absolute right-4 top-1/2 -translate-y-1/2"
                                        onClick={() => setShowPassword(!showPassword)}>
                                        {showPassword ? <Icon icon="mdi:eye-off-outline" width={20} /> : <Icon icon="mdi:eye-outline" width={20} />}
                                    </button>
                                </div>


                                <div className="flex flex-col items-center justify-center">
                                    <Button
                                        text={'Login'}
                                        size={'large'}
                                        onClick={submitData}
                                        disabled={isLoading}
                                        isLoading={isLoading}
                                    />
                                </div>

                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}