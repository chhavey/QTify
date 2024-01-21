import React from "react";
import styles from "./HeroSection.module.css";
import { ReactComponent as Headphones } from "../../assets/vibrating-headphone.svg";

function HeroSection() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div>100 Thousand Songs, ad-free</div>
        <div>Over thousands podcast episodes</div>
      </div>
      <Headphones />
    </div>
  );
}

export default HeroSection;
