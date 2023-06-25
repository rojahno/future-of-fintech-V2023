import styles from "./GeneralLayout.module.css";
interface GeneralLayoutProps {
  children?: React.ReactNode;
}
export const GeneralLayout = (props: GeneralLayoutProps) => {
  return <div className={styles.generalLayoutContainer}>{props.children}</div>;
};
