import "./styles.scss";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();
  return (
    <div className="header-container">
      <span className="header-title"> {t("header.headerTitle")}</span>
    </div>
  );
};

export default Header;
