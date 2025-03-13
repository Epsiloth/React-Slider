import Image from "next/image";
import styles from "./page.module.css";
import Main from "@/views/main";

export default function Home() {

  return (
    <div className={styles.page}>
      <title className={styles.title}>React Next Slider</title>
      <main className={styles.main}>
        <Main />
      </main>
    </div>
  );
}
