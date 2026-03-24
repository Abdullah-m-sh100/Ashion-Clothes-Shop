import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import CartProvider from "./Contexts/cartContext/CartProvider.jsx";
import WishlistProvider from "./Contexts/wishlistContext/wishlistProvider.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <HelmetProvider>
        <CartProvider>
          <WishlistProvider>
            <App />
          </WishlistProvider>
        </CartProvider>
      </HelmetProvider>
    </BrowserRouter>
  </StrictMode>,
);
