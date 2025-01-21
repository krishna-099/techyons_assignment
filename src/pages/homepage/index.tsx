import Header from "src/components/header";
import SidePanel from "src/components/sidePanel";
import "./styles.scss";
import Body from "src/components/body";

const HomePage = () => {
  return (
    <div className="container">
      <SidePanel />
      <div className="content">
        <Header />
        <Body />
      </div>
    </div>
  );
};

export default HomePage;
