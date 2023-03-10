import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Cart } from "./pages/cart";
import { Catalog } from "./pages/catalogo";

export function AppRoutes() {
    return (
        <Router>
            <Routes>
            <Route path="catalog" element={<Catalog/>}/>
            <Route path="cart" element={<Cart/>}/>
            </Routes>
        </Router>
    )
}