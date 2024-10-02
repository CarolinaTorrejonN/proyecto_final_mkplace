// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';
import CreatePostPage from './pages/CreatePostPage';
import GalleryPage from './pages/GalleryPage';
import DetailPage from './pages/DetailPage';
import CartPage from './pages/CartPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registro" element={<RegisterPage />} />
        <Route path="/perfil" element={<ProfilePage />} />
        <Route path="/crear-post" element={<CreatePostPage />} />
        <Route path="/galeria" element={<GalleryPage />} />
        <Route path="/detalle/:id" element={<DetailPage />} />
        <Route path="/carrito" element={<CartPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
