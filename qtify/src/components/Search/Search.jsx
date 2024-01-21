import React from "react";
import styles from "./Search.module.css";
import { ReactComponent as SearchIcon } from "../../assets/Search.svg";

function Search({ placeholder }) {
  const onSubmit = (e) => {
    e.preventDefault();
    //functionality here
  };

  return (
    <form className={styles.wrapper} onSubmit={onSubmit}>
      <input className={styles.search} placeholder={placeholder} required />
      <button className={styles.searchBtn} type="submit">
        <SearchIcon />
      </button>
    </form>
  );
}

export default Search;
