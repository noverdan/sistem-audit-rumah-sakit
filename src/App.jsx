import IndexManager from "./pages/manager/Index";
import IndexPerawat from "./pages/perawat/Index";
import Login from "./pages/Login"
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

function App() {
    return (
        <main className="flex">
            <Toaster position="top-center" toastOptions={{ duration: 1500 }} />
            <Routes>
                <Route path="/p/*" element={<IndexPerawat />} />
                <Route path="/m/*" element={<IndexManager />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </main>
    );
}

export default App;
