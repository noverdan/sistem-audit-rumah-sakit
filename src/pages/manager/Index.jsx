import Sidebar from "../../components/layout/Sidebar";
import { Route, Routes, Navigate } from "react-router-dom";
import DashboardManager from "./Dashboard";
import Pathway from "./Pathway";
import Laporan from "./Laporan";
import ManagemenAkun from "./ManagemenAkun";
import DataDashboard from "./DataDashboard";
import { useSelector } from "react-redux";

const navList = [
    {
        title: "Dashboard",
        path: "/m/dashboard",
        iconify: "hugeicons:dashboard-square-01"
    },
    {
        title: "Pathway",
        path: "/m/pathway",
        iconify: "material-symbols:conversion-path"
    },
    {
        title: "Kelola Laporan",
        path: "/m/laporan",
        iconify: "uil:chart"
    },
    {
        title: "Manajemen Akun Perawat",
        path: "/m/manajemen-akun",
        iconify: "lucide:users-round"
    },
    {
        title: "Data Dashboard",
        path: "/m/data-dashboard",
        iconify: "solar:pie-chart-2-linear"
    }

]

function IndexManager() {
    const user = useSelector((state) => state.user);
    if (!user.username) {
        return <Navigate to="/login" />;
    } else if (user.role !== 2) {
        if (user.role === 3) {
            return <Navigate to="/p/dashboard" />;
        } else if (user.role === 1) {
            return <Navigate to="/admin/dashboard" />;
        }
    }

    return (
        <>
            <Sidebar navList={navList} />
            <Routes>
                <Route path="/" element={<Navigate to={"/m/dashboard"} />} />
                <Route path="/dashboard" element={<DashboardManager />} />
                <Route path="/pathway" element={<Pathway />} />
                <Route path="/laporan" element={<Laporan />} />
                <Route path="/manajemen-akun" element={<ManagemenAkun />} />
                <Route path="/data-dashboard" element={<DataDashboard />} />
                <Route path="/*" element={<Navigate to={"/m/dashboard"} />} />
            </Routes>
        </>
    );
}

export default IndexManager;