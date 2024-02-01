import React from "react";
import styles from "./HomePage.module.css";
import Hero from "./../../components/Hero/Hero";
import { useOutletContext } from "react-router-dom";
import Section from "../../components/Section/Section";

function HomePage() {
  const { data } = useOutletContext();
  const { topAlbums, newAlbums, songs } = data;
  return (
    <>
      <Hero />
      <div className={styles.wrapper}>
        <Section title="Top Albums" data={topAlbums} type="album" />
        <Section title="New Albums" data={newAlbums} type="album" />
      </div>
    </>
  );
}

export default HomePage;
