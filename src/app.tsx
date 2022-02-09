import React from "react";
import { Route, Routes } from "react-router-dom";
import { Footer } from "./components/footer";
import { MobileNavBar } from "./components/mobile-nav-bar";
import { NavBar } from "./components/nav-bar";
import { AdminPage } from "./pages/admin";
import { Home } from "./pages/home";
import { NotFound } from "./pages/not-found";
import { Profile } from "./pages/profile";
import { ProtectedPage } from "./pages/protected";
import { PublicPage } from "./pages/public";

export const App: React.FC = () => {
  return (
    <div className="page-layout">
      <NavBar />
      <MobileNavBar />
      <div className="page-layout__content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/public" element={<PublicPage />} />
          <Route path="/protected" element={<ProtectedPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};
