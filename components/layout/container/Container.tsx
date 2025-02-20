import styles from "./Container.module.css";
interface ContainerProps {
  children?: React.ReactNode;
}
export const Container = (props: ContainerProps) => {
  return <div className={styles.container}>{props.children}</div>;
};
