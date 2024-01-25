import React, { useState, useEffect } from "react";
import styles from "./Section.module.css";
import Card from "../Card/Card";
import { topAlbum, newAlbum } from "../../api/album";

function Section({ title, albumType }) {
  const [data, setData] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response =
          albumType === "top" ? await topAlbum() : await newAlbum();
        setData(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [albumType]);

  const toggleShowAll = () => {
    setShowAll((prevShowAll) => !prevShowAll);
  };

  return (
    <div className={styles.container}>
      <div className={styles.topSection}>
        <div className={styles.title}>{title}</div>
        <div className={styles.btn} onClick={toggleShowAll}>
          {showAll ? "Collapse" : "Show All"}
        </div>
      </div>
      <div className={styles.cardGrid}>
        {data.map((item) => (
          <Card
            key={item.id}
            Image={item.image}
            Follows={item.follows}
            Name={item.title}
          />
        ))}
      </div>
    </div>
  );
}

export default Section;
