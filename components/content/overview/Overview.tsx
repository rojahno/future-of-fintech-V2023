import React from "react";
import { Container } from "../../layout/container/Container";
import styles from "./Overview.module.css";
import { PriceList } from "../../priceList/PriceList";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import consumption from "../../../data/consumption.json";
import { format } from "date-fns";

const ChartDataFromFile = dynamic(
  () => import("../../charts/ChartDataFromFile"),
  {
    ssr: false,
  }
);

interface Consumption {
  date: number;
  forbruk: number;
}

export const Overview = () => {
  const [currentYear, setCurrentYear] = useState("2023");
  const gridRef = React.useRef<HTMLDivElement>(null);

  const [lineChartData, setLineChartData] = useState<Consumption[]>([]);
  const [lineChartTick, setLineChartTick] = useState<string[]>([]);

  function convertDateToReadable(date: Date) {
    // Convert the data from "2023-01-07" to "07 Jan 2023"
    let newDate = format(new Date(date), "dd MMM yyyy");
    return newDate;
  }

  function convertedDataForWeek() {
    let data = [];
    let ticks = [];
    // Sets the start date for the data to be the last day in the dataset
    let startDay = "2023-01-07";
    let startDate = new Date(startDay);
    let endDay = new Date(startDate.getTime() - 7 * 24 * 60 * 60 * 1000);
    let currentDay = startDate;

    for (let i = consumption.length - 1; i >= 0; i--) {
      if (
        startDate.getTime() >= new Date(consumption[i].from).getTime() &&
        endDay.getTime() <= new Date(consumption[i].from).getTime()
      ) {
        let fromTime = convertDateToReadable(new Date(consumption[i].to));
        let record = {
          date: fromTime,
          forbruk: consumption[i].consumption,
        };

        data.push(record);

        if (currentDay.getTime() > new Date(consumption[i].from).getTime()) {
          currentDay = new Date(currentDay.getTime() - 1 * 24 * 60 * 60 * 1000);
          ticks.push(fromTime);
        }
      }
    }
    setLineChartData(data.reverse());
    setLineChartTick(ticks.reverse());
  }

  useEffect(() => {
    convertedDataForWeek();
    //Runs only on the first render
  }, []);

  return (
    <div id={styles.overview}>
      <Container>
        <h2 className={styles.container_text}>{"Forburk"}</h2>
        <div id={styles.stat_grid} ref={gridRef}>
          <div className={styles.stat_grid_item}>
            <p>{"Siste 7 dager"}</p>
            <h3>{"0 Kwh"}</h3>
            <p>{"0"}</p>
          </div>

          <div className={styles.stat_grid_item}>
            <p>{"Siste måned"}</p>
            <h3>{"0 Kwh"}</h3>
            <p>{"0"}</p>
          </div>

          <div className={styles.stat_grid_item}>
            <p>{"Siste år"}</p>
            <h3>{"0 Kwh"}</h3>
            <p>{"0"}</p>
          </div>
        </div>
        <h2 className={styles.container_text}>{""}</h2>
      </Container>
      <div className={styles.info_grid}>
        <Container>
          <h2 className={styles.container_text}>{"Graf"}</h2>
          <ChartDataFromFile data={lineChartData} ticks={lineChartTick} />
        </Container>

        <Container>
          <h2 className={styles.container_text}>Snitt pris </h2>
          <PriceList currentYear={currentYear} />
        </Container>
      </div>
    </div>
  );
};
