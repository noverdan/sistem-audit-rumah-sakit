import IndexManager from "./pages/manager/Index";
import IndexPerawat from "./pages/perawat/Index";
import { Route, Routes } from "react-router-dom";

function App() {
    return (
        <main className="flex">
            <Routes>
                <Route path="/p/*" element={<IndexPerawat />} />
                <Route path="/m/*" element={<IndexManager />} />
            </Routes>
        </main>
    );
}

export default App;
