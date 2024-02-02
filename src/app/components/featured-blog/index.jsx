import Image from "next/image";

import styles from "./styles.module.css";

import { getCelestialBodyByName } from "@/src/app/services/celestial-bodies";

export default async function FeaturedBlog({ blog }) {
  const celestialBody = await getCelestialBodyByName(blog[0]);

  return (
    <section className={styles.blogWrapper}>
      {celestialBody.resourceType === "animation" && (
        <div>
          <div className={styles.iframeCover}></div>
          <iframe className={styles.iframe} src={celestialBody.url} />
        </div>
      )}
      {celestialBody.resourceType === "image" && (
        <Image
          priority
          alt={celestialBody.name}
          width={600}
          height={600}
          className={styles.celestialBodyImage}
          src={celestialBody.url}
        />
      )}
    </section>
  );
}
