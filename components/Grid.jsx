import React from "react";
import { useState } from "react";
import GridItem from "./GridItem";
import { handleClick } from "../public/js/functions";
import styles from "../styles/Grid.module.css";

function Grid({ initialList = [] }) {
  let [userArray, setUserArray] = useState(initialList);

  return (
    <React.Fragment>
      <section>
        {userArray.map((user, idx) => {
          return (
            <GridItem
              user={user}
              key={user.id}
              idx={idx}
              setArray={setUserArray}
              getArray={userArray}
            />
          );
        })}
        <div
          className={styles.main_item}
          onClick={() => handleClick(setUserArray, userArray)}
        >
          <div id={styles.symbolHorizontal}></div>
          <div id={styles.symbolVertical}></div>
        </div>
      </section>
      <button
        className={styles.refreshButton}
        onClick={() => handleClick(setUserArray, userArray, -1, true)}
      >
        Refresh All
      </button>
    </React.Fragment>
  );
}

export default Grid;
