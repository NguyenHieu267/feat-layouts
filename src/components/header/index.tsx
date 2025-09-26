import React from "react";

interface HeaderProps {
  onConnectClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onConnectClick }) => {
  const handleConnectClick = () => {
    if (onConnectClick) {
      onConnectClick();
    } else {
      console.log("Connect button clicked");
    }
  };

  return (
    <div className="header">
      <div className="ACW3">
        <span>ACW3</span>
      </div>
      <div className="frame">
        <div
          className="button"
          onClick={handleConnectClick}
          style={{ cursor: "pointer" }}
        >
          <span>Connect</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
