import { useState } from "react";
import Button from "../components/common/Button"
import axios from "axios";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import '../index.css'

export default function Login() {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState();
    const [showPassword, setShowPassword] = useState();
    const [inputError, setInputError] = useState({ username: false, password: false });

    const submitData = async (e) => {
        e.preventDefault();
        setError('periksa kata sandi dan username')
        setInputError({ username: false, password: false });

        if (!username || !password) {
            setInputError({
                username: !username,
                password: !password,
            })
            setError("Mohon isi semua field");
            return;
        }

        try {
            const response = await axios.post('https://example.com/api/login', {
                username,
                password,
            });

            // Mengambil token dan role dari respons api
            const { token, role } = response.data;


            // simpan token di localstorage 
            localStorage.setItem('token', token);

            // mengarahkan pengguna berdasarkan role
            if (role == 'perawat') {
                window.location.href = '/';
            } else if (role === 'manager') {
                window.location.href = '/'
            } else {
                setError('Pengguna Tidak dikenal')
            }

        } catch (error) {
            console.error('Error logging in:', error);
        }


    }


    return (
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
                                    onChange={(e) => setUsername(e.target.value)}
                                    className={`border border-black border-opacity-50 outline-none rounded-2xl w-full h-12 pl-4 
                                             transition duration-200 ${inputError.username ? "input-error" : ""
                                        }`}
                                />
                                <label className="input-text">Username</label>
                            </div>


                            <div className="relative input-container">
                                <input type={showPassword ? "text" : "password"}
                                    name="password"
                                    placeholder=""
                                    onChange={(e) => setPassword(e.target.value)}
                                    className={`border border-black border-opacity-50 outline-none 
                                     rounded-2xl w-full h-12 pl-4 pr-10 ${inputError.username ? "input-error" : ""} `}
                                />
                                <label className="input-text">Password</label>
                                <button type="button" className="absolute right-4 top-1/2 -translate-y-1/2"
                                    onClick={() => setShowPassword(!showPassword)}>
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>


                            <div className="flex flex-col items-center justify-center">
                                <Button
                                    text={'Login'}
                                    size={'large'}
                                    onClick={submitData}
                                />

                                {error && <p className="mt-4">{error}</p>}
                            </div>

                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}