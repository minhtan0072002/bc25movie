import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomeTemplate from "./containers/HomeTemplate";
import HomePage from "./containers/HomeTemplate/HomePage";
import AboutPage from "./containers/HomeTemplate/AboutPage";
import DashboardPage from "./containers/AdminTemplate/DashboardPage";
import AdminTemplate from "./containers/AdminTemplate";
import AddUserPage from "./containers/AdminTemplate/AddUserPage";
import AddMoviePage from "./containers/AdminTemplate/AddMoivePage";
import PageNotFound from "./containers/PageNotFound";
import ListMoviePage from "./containers/HomeTemplate/ListMoviePage";
import HooksPage from "./containers/HomeTemplate/HooksPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* HomeTemplate */}
        <Route path="" element={<HomeTemplate />}>
          {/* HomePage */}
          <Route path="home" element={<HomePage />} />
          {/* AboutPage */}
          <Route path="about" element={<AboutPage />} />
          {/* ListMoviePage */}
          <Route path="list-movie" element={<ListMoviePage />} />
          {/* HooksPage */}
          <Route path="hooks" element={<HooksPage />} />
        </Route>

        {/* Redirect to admin/dashboard */}
        <Route
          path="admin"
          element={<Navigate replace to="/admin/dashboard" />}
        />

        {/* AdminTemplate */}
        <Route path="admin" element={<AdminTemplate />}>
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="add-user" element={<AddUserPage />} />
          <Route path="add-movie" element={<AddMoviePage />} />
        </Route>

        {/* PageNotFound */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
