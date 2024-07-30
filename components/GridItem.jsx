import Refresh from "../public/assets/refresh.svg";
import styles from "../styles/GridItem.module.css";
import { handleClick } from "../public/js/functions";
import { useState } from "react";
import Image from "next/image";

function GridItem({ user, idx, setArray, getArray }) {
  let [selected, setSelected] = useState(false);
  let display = `${styles.refresh}  ${
    selected ? styles.display : styles.not_display
  }`;
  return (
    <div
      className={styles.gridItem}
      onClick={() => {
        handleClick(setArray, getArray, idx);
      }}
    >
      <Image
        className={styles.userImage}
        style={{ opacity: selected ? "0.5" : "1" }}
        src={user.url}
        alt="user avatar"
        onMouseOver={() => setSelected(true)}
        onMouseOut={() => setSelected(false)}
        width={240}
        height={240}
      />
      <Image
        src={Refresh.src}
        className={display}
        onMouseOver={() => setSelected(true)}
      />
    </div>
  );
}

export default GridItem;
