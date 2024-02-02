"use client";
import Link from "next/link";
import { useState } from "react";

import styles from "./styles.module.css";

export default function Header({ blog, celestialBodies }) {
  const [isDataButtonClicked, setIsDataButtonClicked] = useState(true);

  const handleClick = (event) => {
    event.preventDefault();
    setIsDataButtonClicked(!isDataButtonClicked);
  };

  return (
    <header>
      <div id="navbar">
        <button className={styles.dataButton} onClick={handleClick}>
          <i className="icon-data"></i>Data
        </button>
        <div className={styles.homeButtonWrapper}>
          <Link className={styles.homeButton} href="/home">
            HOME
          </Link>
        </div>
        <Link id="toggle-controls" href="/home">
          Home
        </Link>
      </div>
      {isDataButtonClicked && (
        <div id="data">
          {celestialBodies.map((celestialBody) => (
            <Link
              key={celestialBody.id}
              className={
                celestialBody.name +
                (blog[0] === `${celestialBody.name}` ? " active" : "")
              }
              href={`/blog/${celestialBody.name}`}
            >
              {celestialBody.name.charAt(0).toUpperCase() +
                celestialBody.name.slice(1)}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
