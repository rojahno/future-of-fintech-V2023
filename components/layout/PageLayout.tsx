import { Footer } from "./footer/Footer";
import { GeneralLayout } from "./generalLayout/GeneralLayout";
import { Header } from "./header/Header";
import { MainContent } from "./MainContent";

interface PageLayoutProps {
  children?: React.ReactNode;
}

export const PageLayout = (props: PageLayoutProps) => {
  return (
    <GeneralLayout>
      <Header />
      <MainContent>{props.children}</MainContent>
      <Footer />
    </GeneralLayout>
  );
};
