import axios from "axios";
import IndexManager from "./pages/manager/Index";
import IndexPerawat from "./pages/perawat/Index";
import Login from "./pages/Login"
import { Route, Routes, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;
// axios.defaults.withCredentials = true;

function App() {
    return (
        <main className="flex">
            <Toaster position="top-center" toastOptions={{ duration: 1500 }} />
            <Routes>
                <Route path="/" element={<Redirect />} />
                <Route path="/p/*" element={<IndexPerawat />} />
                <Route path="/m/*" element={<IndexManager />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </main>
    );
}

function Redirect() {
    const user = useSelector((state) => state.user);
    if (user.username) {
        if (user.role === 2) {
            return <Navigate to="/m/dashboard" />;
        } else if (user.role === 3) {
            return <Navigate to="/p/dashboard" />;
        }
    } else {
        return <Navigate to="/login" />;
    }
}

export default App;
