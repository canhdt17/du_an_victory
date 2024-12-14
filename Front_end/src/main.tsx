<<<<<<< HEAD
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './css/bootstrap.min.css'
import './css/elegant-icons.css'
import './css/font-awesome.min.css'
import './css/nice-select.css'
import './css/owl.carousel.min.css'
import './css/plyr.css'
import './css/slicknav.min.css'
import './css/style.css'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext.tsx'
import 'react-toastify/dist/ReactToastify.min.css';
import {ToastContainer} from 'react-toastify'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
    <BrowserRouter>
    <App />
    <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>


      </BrowserRouter></AuthProvider>
  </StrictMode>,
)
=======
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./css/bootstrap.min.css";
import "./css/elegant-icons.css";
import "./css/font-awesome.min.css";
import "./css/nice-select.css";
import "./css/owl.carousel.min.css";
import "./css/plyr.css";
import "./css/slicknav.min.css";
import "./css/style.css";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>
);
>>>>>>> 8af2404de8d6d2adac23e8f1a80ed0d1b4785a34
