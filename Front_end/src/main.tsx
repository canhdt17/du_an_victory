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
