import React from "react";
import "./Footer.css";
import { FaCopyright } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <span>
        <FaCopyright style={{ marginBottom: "4px" }} /> 2020: Rob Kellen, Dakota
        Melcher, Giancarlo Brida, Maria Betancourt
      </span>
    </footer>
  );
}
