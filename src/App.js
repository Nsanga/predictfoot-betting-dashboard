import Dashboard from "./pages/dashboard"
import LandingPageAccueil from "./pages/landingPageAccueil"
import LandingPageBlog from "./pages/landingPageBlog"
import Notifications from "./pages/notifications"
import Pronostics from "./pages/pronostics"
import Settings from "./pages/settings"
import TransactionsAdmin from "./pages/transactionsAdmin"
import TransactionsUsers from "./pages/transactionsUsers"
import Users from "./pages/users"
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() { 


  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="landing-page-accueil" element={<LandingPageAccueil />} />
          <Route path="landing-page-blog" element={<LandingPageBlog />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="pronostics" element={<Pronostics />} />
          <Route path="settings" element={<Settings />} />
          <Route path="transactions-admin" element={<TransactionsAdmin />} />
          <Route path="transactions-users" element={<TransactionsUsers />} />
          <Route path="users" element={<Users />} />
          
        </Routes>
      </BrowserRouter>
  );
}

export default App;