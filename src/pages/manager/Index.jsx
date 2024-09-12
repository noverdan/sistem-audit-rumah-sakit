import Sidebar from "../../components/layout/Sidebar";
import { Route, Routes } from "react-router-dom";
import DashboardManager from "./Dashboard";
import Pathway from "./Pathway";
import Laporan from "./Laporan";
import ManagemenAkun from "./ManagemenAkun";
import DataDashboard from "./DataDashboard";
function IndexManager() {
    return (
        <>
            <Sidebar>
                <p>Manager</p>
            </Sidebar>
            <Routes>
                <Route path="/dashboard" element={<DashboardManager />} />
                <Route path="/pathway" element={<Pathway />} />
                <Route path="/laporan" element={<Laporan />} />
                <Route path="/managemen-akun" element={<ManagemenAkun />} />
                <Route path="/data-dashboard" element={<DataDashboard />} />
            </Routes>
        </>
    );
}

export default IndexManager;