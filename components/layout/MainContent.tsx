import styles from "./MainContent.module.css";
interface MainContentProps {
  children?: React.ReactNode;
}
export const MainContent = (props: MainContentProps) => {
  return <div className={styles.MainContent}>{props.children}</div>;
};
