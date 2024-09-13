import { useState } from "react";
import Button  from "../components/common/Button"
import axios from "axios";
import { Await } from "react-router-dom";

export default function Login (){
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState();

    const submitData = async (e) => {
        e.preventDefault();
        console.log('asu')
        setError('error Coy')


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
            setError('Login gagal, periksa kembali email atau password Anda.');
            console.error('Error logging in:', error);
        }


    }


    return(
        <div className="bg-gradient-to-tr from-primary-4 to-primary-1 h-screen w-screen flex justify-center items-center">

            <div className="bg-white w-96 h-[550px] rounded-3xl p-8 text-center flex justify-center items-center ">
              <div className="flex flex-col gap-6">
                    <p className="text-3xl font-semibold">Login</p>
                    <p className=" text-xs text-gray-700 ">Selamat datang di Sistem Audit Rumah Sakit,
                        Silahkan pilih jenis login</p>

                    <div>
                        <form  className="flex flex-col gap-6 ">
                            <input type="text"
                                name="username"
                                placeholder="username"
                                onChange={(e) => setUsername(e.target.value)}
                                className="border border-black rounded-2xl w-full h-12 pl-4"
                            />

                            <div>
                                <input type="text"
                                    name="password"
                                    placeholder="password"
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="border border-black rounded-2xl w-full h-12 pl-4 "
                                />
                                
                                                            
                            </div>

                            
                            <div className="flex flex-col items-center justify-center">
                                <Button
                                    text={'Login'}
                                    size={'large'}
                                    onClick={submitData}
                                /> 

                                {error && <p>{error}</p>}                            
                            </div>

                        </form>
                    </div>  
             </div> 
            </div>

        </div>
    )
}