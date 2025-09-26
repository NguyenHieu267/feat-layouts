import React, { useState } from "react";
import LeftMenu from "./components/left-menu";
import Header from "./components/header";
import Footer from "./components/footer";

const App = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [menuMode, setMenuMode] = useState<"default" | "token" | "nft">(
    "default"
  );

  return (
    <div>
      <Header
        onConnectClick={() => {
          // Quay lại
          setIsConnected((prev) => {
            const next = !prev;
            if (!next) {
              setMenuMode("default");
            }
            return next;
          });
        }}
      />

      {isConnected ? (
        <LeftMenu
          variant={menuMode === "default" ? "default" : "with-submenu"}
          activeMenuItem={menuMode === "default" ? "dashboard" : undefined}
          activeGroup={menuMode === "token" ? "token" : menuMode === "nft" ? "nft" : undefined}
          onMenuClick={(menuId) => {
            if (menuId === "token") setMenuMode((m) => (m === "token" ? "default" : "token"));
            else if (menuId === "nft") setMenuMode((m) => (m === "nft" ? "default" : "nft"));
            else setMenuMode("default");
          }}
        />
      ) : (
        <div className="content-spacer" />
      )}

      <Footer />
    </div>
  );
};

export default App;
