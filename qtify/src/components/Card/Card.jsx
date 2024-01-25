import React from "react";
import styles from "./Card.module.css";
import Chip from "@mui/material/Chip";

function Card({ Image, Follows, Name }) {
  return (
    <div className={styles.container}>
      <div className={styles.albumDetails}>
        <img className={styles.albumImg} src={Image} alt={Name} />
        <Chip className={styles.chip} label={`${Follows} Follows`} />
      </div>
      <div className={styles.albumName}>{Name}</div>
    </div>
  );
}

export default Card;
