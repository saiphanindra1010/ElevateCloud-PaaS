import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/common/Sidebar";
import OverviewPage from "./pages/OverviewPage";
import BuildLogsPage from "./pages/BuildLogsPage";
import AnalyticsPage from "./pages/AnalyticsPage";
import SettingsPage from "./pages/SettingsPage";
import LoginPage from "./pages/LoginPage";
import DeployementsPage from "./pages/DeployementsPage";
import CretateProjectPage from "./pages/CretateProjectPage"
function App() {
  return (
    <div className="flex h-screen bg-black text-gray-100 overflow-hidden">
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0  " />
        <div className="absolute inset-0 " />
      </div>

      <Sidebar />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<OverviewPage />} />
        <Route path="/create" element={<CretateProjectPage/>} />
        <Route path="/build" element={<BuildLogsPage/>} />
        <Route path="/deployements" element={<DeployementsPage/>} />
        <Route path="/analytics" element={<AnalyticsPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </div>
  );
}

export default App;
