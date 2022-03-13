import React from "react";
import styles from "./RickList.module.css";
import fourNotfourPNG from "./assets/404.gif";
function NotFound() {
  return (
    <div className={styles.fourNotfour}>
      <div>Portal Gun Broke?</div>
      <img src={fourNotfourPNG} alt="Error"></img>
    </div>
  );
}
export default NotFound;
