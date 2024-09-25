import axios from "axios";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { login } from "../redux/slices/userSlice"
import { useNavigate } from "react-router-dom";

export default function AuthMe() {
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    const token = localStorage.getItem("token");
    const navigate = useNavigate();

    useEffect(() => {
        let config = {
            method: 'get',
            url: '/protected',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        };
        const checkToken = async () => {
            if (token) {
                try {
                    console.log("FETCHING");
                    setLoading(true);
                    const response = await axios.request(config);
                    if (response.data.status === 200) {
                        const payload = JSON.parse(
                            atob(token.split(".")[1])
                        );
                        dispatch(login(payload));
                        if (payload.role === 1) {
                            navigate("/admin/dashboard");
                        }

                        if (payload.role === 2) {
                            navigate("/m/dashboard");
                        }

                        if (payload.role === 3) {
                            navigate("/p/dashboard");
                        }
                    }
                } catch (error) {
                    if (error.response.data.status === 401) {
                        if (!error.response.data.error) {
                            console.log("Token Expired");
                            refreshToken(navigate);
                            return;
                        }
                        navigate("/login");
                        localStorage.removeItem("token");
                        localStorage.removeItem("refreshToken");
                        console.log("Token Invalid");
                        dispatch(login({}));
                    }
                    dispatch(login({}));
                } finally {
                    setLoading(false);
                }
            } else {
                navigate("/login");
                setLoading(false);
            }
        };
        checkToken();
    }, [dispatch, navigate, token]);

    if (loading) {
        return <Loading />;
    }
}


async function refreshToken(navigate) {
    const refreshToken = localStorage.getItem("refreshToken");
    let config = {
        method: 'post',
        url: '/refresh',
        headers: {
            'Authorization': `Bearer ${refreshToken}`
        }
    };
    try {
        const response = await axios.request(config)
        localStorage.setItem("token", response.data.access_token);
        console.log("Token Refreshed");
        window.location.reload();
    } catch (error) {
        if (error.response.data.status === 401) {
            localStorage.removeItem("token");
            localStorage.removeItem("refreshToken");
            navigate("/login");
        }
        console.error(error)
    }
}
function Loading() {
    return (
        <div className="flex-col bg-white w-full h-svh flex items-center justify-center absolute z-[999]">
            <div className="w-24 aspect-square border-8 text-4xl animate-spin border-gray-300 flex items-center justify-center border-t-primary-3 rounded-full">
                <img src="/kemenkes.png" alt="" width={24} className="animate-ping" />
            </div>
        </div>
    )
}