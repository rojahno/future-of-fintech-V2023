import styles from "./SimpleCard.module.css";

interface SimpleCardProps {
  children?: React.ReactNode;
  borderColour?: string;
}

export const SimpleCard = (props: SimpleCardProps) => {
  return (
    <div
      className={styles.simple_card}
      style={{
        borderColor: props.borderColour,
      }}
    >
      {props.children}
    </div>
  );
};
