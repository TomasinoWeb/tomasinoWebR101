import React from "react";
import styles from "../../components/Layout.module.scss";

interface Props {
  visible: boolean;
  fill: string;
  handleMenuClick: () => void;
}

function MenuBar({ visible, fill, handleMenuClick }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      className={visible ? styles.hidden : styles.dropdown}
      onClick={handleMenuClick}
    >
      <path
        d="M2.5 3.33337H17.5V5.00004H2.5V3.33337ZM7.5 9.16671H17.5V10.8334H7.5V9.16671ZM2.5 15H17.5V16.6667H2.5V15Z"
        fill={fill ? `${fill}` : "#393939"}
      />
    </svg>
  );
}

export default MenuBar;
