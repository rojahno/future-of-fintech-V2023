import styles from "./LandingPage.module.css";
import lights from "./../../../public/lights.jpg";
import Image from "next/image";
import Link from "next/link";

export const LandingPage = () => {
  return (
    <div id={styles.landing_page}>
      <div className={styles.text_container}>
        <h1 className={styles.title}>Velkommen til Electrify</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
          aliquid alias ea nam, doloribus in voluptatum, ducimus adipisci
          officia, perferendis ut cumque? Iste, obcaecati vel. Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Voluptates iusto tempore ipsam
          quam eaque sint.
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Impedit,
          laudantium..
        </p>

        <div className={styles.button_container}>
          <Link href="/oversikt">
            <button className={styles.button}>Oversikt</button>
          </Link>
          <Link href="/stromavtaler">
            <button className={styles.button}>Strømavtaler</button>
          </Link>
        </div>
        <div className={styles.icon}></div>
      </div>
      <div className={styles.image_container}>
        <Image id={styles.landing_img} src={lights} alt="bilde av lys"></Image>
      </div>
    </div>
  );
};
