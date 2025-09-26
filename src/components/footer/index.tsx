import React from "react";
import XFooterIcon from "../../assets/img/X-Footer.svg";
import TeleFooterIcon from "../../assets/img/Tele-Footer.svg";
import ListFooterIcon from "../../assets/img/List-Footer.svg";

interface FooterProps {
  onFeatureRequestClick?: () => void;
  onContactUsClick?: () => void;
  onSocialClick?: (platform: "twitter" | "telegram" | "list") => void;
}

const Footer: React.FC<FooterProps> = ({
  onFeatureRequestClick,
  onContactUsClick,
  onSocialClick,
}) => {
  const handleFeatureRequestClick = () => {
    if (onFeatureRequestClick) {
      onFeatureRequestClick();
    } else {
      console.log("Feature Request clicked");
    }
  };

  const handleContactUsClick = () => {
    if (onContactUsClick) {
      onContactUsClick();
    } else {
      console.log("Contact Us clicked");
    }
  };

  const handleSocialClick = (platform: "twitter" | "telegram" | "list") => {
    if (onSocialClick) {
      onSocialClick(platform);
    } else {
      console.log(`${platform} clicked`);
    }
  };

  return (
    <div className="footer">
      <div className="text">
        <div className="text-left">
          <span
            onClick={handleFeatureRequestClick}
            style={{ cursor: "pointer" }}
          >
            Feature Request
          </span>
        </div>
        <div className="text-right">
          <span onClick={handleContactUsClick} style={{ cursor: "pointer" }}>
            Contact Us
          </span>
        </div>
      </div>
      <div className="Social">
        <img
          src={XFooterIcon}
          alt="X"
          onClick={() => handleSocialClick("twitter")}
          style={{ cursor: "pointer" }}
        />
        <img
          src={TeleFooterIcon}
          alt="Telegram"
          onClick={() => handleSocialClick("telegram")}
          style={{ cursor: "pointer" }}
        />
        <img
          src={ListFooterIcon}
          alt="List"
          onClick={() => handleSocialClick("list")}
          style={{ cursor: "pointer" }}
        />
      </div>
    </div>
  );
};

export default Footer;
