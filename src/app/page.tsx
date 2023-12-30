"use client";

import { useState, useEffect } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [dateTime, setDateTime] = useState<string>(new Date().toLocaleString());

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date().toLocaleString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className={styles.main}>
      <h1 className={styles.titulo}>Relógio 🕗</h1>
      <p className={styles.relogio}>{dateTime}</p>
    </main>
  );
}
