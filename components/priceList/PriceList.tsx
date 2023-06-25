import styles from "./PriceList.module.css";
import { useState, useEffect } from "react";

// Reading data directly from a JSON file
import data from "../../data/averagePrice.json";

interface PriceListProps {
  currentYear: string;
}

export const PriceList = (props: PriceListProps) => {
  return (
    <div id={styles.price_overview}>
      {/* <h2 className={styles.tabel_title}>{props.currentYear}</h2> */}

      <ul id={styles.price_list}>
        <div className={styles.price_items}>
          <h3 className={styles.price_overview_title}>{"Måned"}</h3>
          <h3 className={styles.price_overview_title}>{"Pris (øre/Kwh)"}</h3>
        </div>
        {Object.keys(data.data[props.currentYear]).map((month) => {
          return (
            <li key={month} className={styles.price_items}>
              <p>{month} </p>
              <p>{data.data[props.currentYear][month]}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
