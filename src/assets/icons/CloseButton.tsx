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
      width="13"
      height="14"
      viewBox="0 0 13 14"
      fill="none"
      className={visible ? styles.dropdown : styles.hidden}
      onClick={handleMenuClick}
    >
      <path
        d="M6.36398 5.5865L11.3137 0.636719L12.7279 2.05093L7.77818 7.0007L12.7279 11.9504L11.3137 13.3646L6.36398 8.4149L1.41421 13.3646L0 11.9504L4.94978 7.0007L0 2.05093L1.41421 0.636719L6.36398 5.5865Z"
        fill={fill ? `${fill}` : "#393939"}
      />
    </svg>
  );
}

export default MenuBar;
