import Sidebar from "../../components/layout/Sidebar";
import DashboardPerawat from "./Dashboard";
import DataPasien from "./DataPasien";
import StatusPasien from "./StatusPasien";
import { Route, Routes, Navigate } from "react-router-dom";

function IndexPerawat() {
    return (
        <>
            <Sidebar>
                <p>Perawat</p>
            </Sidebar>
            <Routes>
                <Route path="/" element={<Navigate to={"/p/dashboard"} />} />
                <Route path="/dashboard" element={<DashboardPerawat />} />
                <Route path="/data-pasien" element={<DataPasien />} />
                <Route path="/status-pasien" element={<StatusPasien />} />
                <Route path="/*" element={<Navigate to={"/p/dashboard"} />} />
            </Routes>
        </>
    );
}

export default IndexPerawat;