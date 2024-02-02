import Link from "next/link";
import styles from "./styles.module.css";

export default function HomePage() {
  return (
    <div className={styles.wrapper}>
      <Link href="/home">Home</Link>
    </div>
  );
}
