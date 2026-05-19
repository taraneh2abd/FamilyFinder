"use client";

import { Save } from "lucide-react";
import styles from "./SaveButton.module.scss";

export default function SaveButton() {
  return (
    <button className={styles.button}>
      <Save size={22} />
    </button>
  );
}