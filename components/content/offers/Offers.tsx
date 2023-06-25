import { FormEvent, useState } from "react";
import { SimpleCard } from "../../cards/SimpleCard";
import styles from "./Offers.module.css";
import dynamic from "next/dynamic";

import providers from "../../../data/providers.json";
import averagePriceData from "../../../data/averagePrice.json";
import { Container } from "../../layout/container/Container";

const LineChartComparison = dynamic(
    () => import("../../charts/LineChartComparison"),
    {
      ssr: false,
    }
  );

export const Offers = () => {
  const [hasKwh, setHasKwh] = useState(false);
  const [yearlyConsumption, setYearlyConsumption] = useState(0);
  const [data, setData] = useState(prepareDataForChart().data);
  function translatePricingModel(pricingModel: string) {
    switch (pricingModel) {
      case "spot-hourly":
        return "Spotpris per time";
      case "variable":
        return "Variabel pris";
      case "fixed":
        return "Fastpris";
      case "spot-monthly":
        return "Spotpris per måned";
      default:
        return "Ukjent prismodell";
    }
  }

  function prepareDataForChart() {
    let data = [];
    let ticks = [];
    let years = Object.keys(averagePriceData.data);

    Object.keys(averagePriceData.data[years[0]]).map((month) => {
      let record = {
        month: month,
      };
      for (const year of years) {
        record[year] = averagePriceData.data[year][month];
      }

      data.push(record);
      ticks.push(month);
    });
    return { data, ticks };
  }

  function changeYearlyConsumption(e: FormEvent<HTMLInputElement>) {
    let value = e.currentTarget.value;
    console.log(value);
    setYearlyConsumption(parseInt(value));
  }

  if (hasKwh) {
    return (
      <div id={styles.offers}>
        <h1 id={styles.title}>Strømavtaler</h1>
        <div id={styles.offers_grid}>
          <SimpleCard borderColour="#47FE84">
            <div className={styles.text_container}>
              <h2 className={styles.firm_names}>{providers[3].name}</h2>
              <p className={styles.firm_text}>
                Type: {translatePricingModel(providers[3].pricingModel)}
              </p>
              <p className={styles.firm_text}>
                Månedlig avgift: {providers[3].monthlyFee} kr
              </p>
              <p className={styles.firm_text}>
                Pris: {providers[3].spotPrice * 100} øre/kWh
              </p>
              <p className={styles.month_price}>
                Månedspris:{" "}
                {(providers[0].monthlyFee + providers[0].fixedPrice) *
                  yearlyConsumption}{" "}
                kr
              </p>
            </div>
          </SimpleCard>

          <SimpleCard borderColour="#ffe81f">
            <div className={styles.text_container}>
              <h2 className={styles.firm_names}>{providers[2].name}</h2>
              <p className={styles.firm_text}>
                Type: {translatePricingModel(providers[2].pricingModel)}
              </p>
              <p className={styles.firm_text}>
                Månedlig avgift: {providers[2].monthlyFee} kr
              </p>
              <p className={styles.firm_text}>
                Pris: {providers[2].spotPrice * 100} øre/kWh
              </p>
              <p className={styles.month_price}>
                Månedspris:{" "}
                {(providers[0].monthlyFee + providers[0].fixedPrice) *
                  yearlyConsumption}{" "}
                kr
              </p>
            </div>
          </SimpleCard>

          <SimpleCard borderColour="#A940E6">
            <div className={styles.text_container}>
              <h2 className={styles.firm_names}>{providers[0].name}</h2>
              <p className={styles.firm_text}>
                Type: {translatePricingModel(providers[0].pricingModel)}
              </p>
              <p className={styles.firm_text}>
                Månedlig avgift: {providers[0].monthlyFee} kr
              </p>
              <p className={styles.firm_text}>
                Pris: {providers[0].fixedPrice * 100} øre/kWh
              </p>
              <p className={styles.firm_text}>
                Bindingstid: {providers[0].fixedPricePeriod} måneder
              </p>
              <p className={styles.month_price}>
                Månedspris:{" "}
                {(providers[0].monthlyFee + providers[0].fixedPrice) *
                  yearlyConsumption}{" "}
                kr
              </p>
            </div>
          </SimpleCard>

          <SimpleCard borderColour="#FC8053">
            <div className={styles.text_container}>
              <h2 className={styles.firm_names}>{providers[1].name}</h2>
              <p className={styles.firm_text}>
                Type: {translatePricingModel(providers[1].pricingModel)}
              </p>
              <p className={styles.firm_text}>
                Månedlig avgift: {providers[1].monthlyFee} kr
              </p>
              <p className={styles.firm_text}>
                Pris: {providers[1].variablePrice * 100} øre/kWh
              </p>
              <p className={styles.firm_text}>
                Bindingstid: {providers[1].variablePricePeriod} måneder
              </p>
              <p className={styles.month_price}>
                Månedspris:{" "}
                {(providers[0].monthlyFee + providers[0].fixedPrice) *
                  yearlyConsumption}{" "}
                kr
              </p>
            </div>
          </SimpleCard>
        </div>
        <div className={styles.chart_container}>
          <Container>
            <h1 id={styles.title}>Sammenlign priser med tidligere år</h1>
            <LineChartComparison
              data={data}
            
            />
          </Container>
        </div>
        <div>
          <button
            className={styles.button}
            id={styles.fab}
            onClick={() => setHasKwh(false)}
          >
            Endre kWh
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div id={styles.offers}>
        <h1 id={styles.title}>Strømavtaler</h1>
        <p>Hva er ditt årlige forbruk i kWh?</p>
        <div>
          <input
            className={styles.input}
            onChange={(e) => changeYearlyConsumption(e)}
            type="number"
            placeholder="Legg inn kWt"
            pattern="[0-9]+"
          />
          <button className={styles.button} onClick={() => setHasKwh(true)}>
            Få tilbud
          </button>
        </div>
      </div>
    );
  }
};
