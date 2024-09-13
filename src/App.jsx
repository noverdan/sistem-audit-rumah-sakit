import IndexManager from "./pages/manager/Index";
import IndexPerawat from "./pages/perawat/Index";
import Login from "./pages/Login"
import { Route, Routes } from "react-router-dom";

function App() {
    return (
        <main className="flex">
            <Routes>
                <Route path="/p/*" element={<IndexPerawat />} />
                <Route path="/m/*" element={<IndexManager />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </main>
    );
}

export default App;
