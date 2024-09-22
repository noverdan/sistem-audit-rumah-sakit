import { useSelector } from "react-redux";
import Sidebar from "../../components/layout/Sidebar";
import DashboardPerawat from "./Dashboard";
import DataPasien from "./DataPasien";
import StatusPasien from "./StatusPasien";
import { Route, Routes, Navigate } from "react-router-dom";

const navList = [
    {
        title: "Dashboard",
        path: "/p/dashboard",
        iconify: "hugeicons:dashboard-square-01"
    },
    {
        title: "Data Pasien",
        path: "/p/data-pasien",
        iconify: "carbon:data-1"
    },
    {
        title: "Status Pasien",
        path: "/p/status-pasien",
        iconify: "uil:chart"
    }

]

function IndexPerawat() {
    const user = useSelector((state) => state.user);
    if (!user.username) {
        return <Navigate to="/login" />;
    } else if (user.role !== 3) {
        if (user.role === 2) {
            return <Navigate to="/m/dashboard" />;
        } else if (user.role === 1) {
            return <Navigate to="/admin/dashboard" />;
        }
    }

    return (
        <>
            <Sidebar navList={navList} />
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