"use client";

import { Fab, Webchat } from "@botpress/webchat";
import { useState } from "react";

export default function WebchatWidget() {
  const [isWebchatOpen, setIsWebchatOpen] = useState(false);
  const toggleWebchat = () => {
    setIsWebchatOpen((prevState) => !prevState);
  };
  return (
    <>
      <Webchat
        clientId="bbd2623c-885d-43ea-be09-3622056ccc0c"
        style={{
          width: "400px",
          height: "600px",
          display: isWebchatOpen ? "flex" : "none",
          position: "fixed",
          bottom: "90px",
          right: "20px",
        }}
      />
      <Fab
        onClick={toggleWebchat}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          width: "64px",
          height: "64px",
        }}
      />
    </>
  );
}

