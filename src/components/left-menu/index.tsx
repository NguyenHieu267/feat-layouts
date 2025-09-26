import React, { useState } from "react";
import HomeIcon from "../../assets/img/Home.svg";
import GroupIcon from "../../assets/img/Group.svg";
import TokenIcon from "../../assets/img/Token.svg";
import PictureIcon from "../../assets/img/picture.svg";
import XIcon from "../../assets/img/X.svg";
import TeleIcon from "../../assets/img/Tele.svg";

interface MenuItem {
  id: string;
  icon: string;
  label: string;
  textClass: string;
  subItems?: SubMenuItem[];
}

interface SubMenuItem {
  id: string;
  label: string;
  isActive?: boolean;
}

interface LeftMenuProps {
  variant?: "default" | "active" | "with-submenu";
  activeMenuItem?: string;
  activeSubItem?: string;
  activeGroup?: "token" | "nft";
  onMenuClick?: (menuId: string) => void;
  onSubMenuClick?: (subMenuId: string) => void;
  onSocialClick?: (platform: "twitter" | "telegram") => void;
}

const LeftMenu: React.FC<LeftMenuProps> = ({
  variant = "default",
  activeMenuItem = "dashboard",
  activeSubItem,
  activeGroup,
  onMenuClick,
  onSubMenuClick,
  onSocialClick,
}) => {
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);

  const mainMenuItems: MenuItem[] = [
    {
      id: "dashboard",
      icon:
        variant === "active" && activeMenuItem === "dashboard"
          ? GroupIcon
          : HomeIcon,
      label: "Dashboard",
      textClass: "text1",
    },
    {
      id: "token",
      icon: TokenIcon,
      label: "Token",
      textClass: "text2",
      subItems:
        variant === "with-submenu" && activeGroup === "token"
          ? [
              {
                id: "token-creator",
                label: "Token Creator",
                isActive: activeSubItem === "token-creator",
              },
              {
                id: "token-list",
                label: "Token List",
                isActive: activeSubItem === "token-list",
              },
            ]
          : undefined,
    },
    {
      id: "nft",
      icon: PictureIcon,
      label: "NFT",
      textClass: "text3",
      subItems:
        variant === "with-submenu" && activeGroup === "nft"
          ? [
              {
                id: "nft-collection",
                label: "NFT Collection",
                isActive: activeSubItem === "nft-collection",
              },
              {
                id: "nft-list",
                label: "NFT List",
                isActive: activeSubItem === "nft-list",
              },
            ]
          : undefined,
    },
  ];

  const socialItems = [
    {
      id: "twitter",
      icon: XIcon,
      label: "Twitter / X",
      textClass: "text4",
      platform: "twitter" as const,
    },
    {
      id: "telegram",
      icon: TeleIcon,
      label: "Telegram",
      textClass: "text5",
      platform: "telegram" as const,
    },
  ];

  const handleMenuClick = (menuId: string) => {
    if (onMenuClick) {
      onMenuClick(menuId);
    }

    if (variant === "with-submenu" && (menuId === "token" || menuId === "nft")) {
      setExpandedMenu(menuId);
      return;
    }

    if (mainMenuItems.find((item) => item.id === menuId)?.subItems) {
      setExpandedMenu(expandedMenu === menuId ? null : menuId);
    }
  };

  const handleSubMenuClick = (subMenuId: string) => {
    if (onSubMenuClick) {
      onSubMenuClick(subMenuId);
    }
  };

  const handleSocialClick = (platform: "twitter" | "telegram") => {
    if (onSocialClick) {
      onSocialClick(platform);
    } else {
      console.log(`${platform} clicked`);
    }
  };

  const getDashboardClass = () => {
    switch (variant) {
      case "active":
        return "Dashboard-Default1";
      case "with-submenu":
        return "Dashboard-Default2";
      default:
        return "Dashboard-Default";
    }
  };

  const getFrameTopClass = () => {
    return variant === "active" ? "frame-top1" : "frame-top";
  };

  const handleNFTClick = () => {
    if (variant === "with-submenu") {
      setExpandedMenu(expandedMenu === "nft" ? null : "nft");
    }
  };

  return (
    <div className="Left-menu">
      <div className={getDashboardClass()}>
        <div className="logo">
          <span>ACW3</span>
        </div>

        <div className="background">
          <div className={getFrameTopClass()}>
            {mainMenuItems.map((item) => (
              <div key={item.id}>
                <div
                  className={
                    (variant === "active" && activeMenuItem === item.id
                      ? "Menu1"
                      : "Menu") +
                    (activeGroup === item.id ? " active" : "")
                  }
                  onClick={() => handleMenuClick(item.id)}
                  style={{ cursor: "pointer" }}
                >
                  <img src={item.icon} alt={item.label} />
                  <div className={item.textClass}>
                    <span>{item.label}</span>
                  </div>
                </div>

                {item.id === "token" && variant === "with-submenu" && activeGroup === "token" && (
                  <div className="Token">
                    <div className="list">
                      <div
                        className={activeSubItem === "token-creator" ? "link" : "item"}
                        onClick={() => handleSubMenuClick("token-creator")}
                        style={{ cursor: "pointer" }}
                      >
                        <span>Token Creator</span>
                      </div>
                      <div
                        className={activeSubItem === "token-list" ? "link" : "item"}
                        onClick={() => handleSubMenuClick("token-list")}
                        style={{ cursor: "pointer" }}
                      >
                        <span>Token List</span>
                      </div>
                    </div>
                  </div>
                )}

                {item.id === "nft" && variant === "with-submenu" && activeGroup === "nft" && (
                  <div className="Token">
                    <div className="list">
                      <div
                        className={activeSubItem === "nft-collection" ? "link" : "item"}
                        onClick={() => handleSubMenuClick("nft-collection")}
                        style={{ cursor: "pointer" }}
                      >
                        <span>NFT Collection</span>
                      </div>
                      <div
                        className={activeSubItem === "nft-list" ? "link" : "item"}
                        onClick={() => handleSubMenuClick("nft-list")}
                        style={{ cursor: "pointer" }}
                      >
                        <span>NFT List</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="frame-bottom">
          {socialItems.map((item) => (
            <div
              key={item.id}
              className="Menu"
              onClick={() => handleSocialClick(item.platform)}
              style={{ cursor: "pointer" }}
            >
              <img src={item.icon} alt={item.label} />
              <div className={item.textClass}>
                <span>{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeftMenu;
