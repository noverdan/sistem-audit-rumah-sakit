import Sidebar from "../../components/layout/Sidebar";
import DashboardPerawat from "./Dashboard";
import DataPasien from "./DataPasien";
import StatusPasien from "./StatusPasien";
import { Route, Routes } from "react-router-dom";

function IndexPerawat() {
    return (
        <>
            <Sidebar>
                <p>Perawat</p>
            </Sidebar>
            <Routes>
                <Route path="/dashboard" element={<DashboardPerawat />} />
                <Route path="/data-pasien" element={<DataPasien />} />
                <Route path="/status-pasien" element={<StatusPasien />} />
            </Routes>
        </>
    );
}

export default IndexPerawat;