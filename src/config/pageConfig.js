import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
} from "@ant-design/icons";

// import {
//   News,
//   Cryptocurrencies,
//   Exchanges,
//   CryptoDetails,
//   Homepage,
// } from "../components";
import News from "../components/News";
import Homepage from "../components/Homepage";
import Exchanges from "../components/Exchanges";
import Cryptocurrencies from "../components/Cryptocurrencies";
import CryptoDetails from "../components/CryptoDetails";

export const menuItems = [
  { icon: <HomeOutlined />, text: "Home", path: "/" },
  {
    icon: <FundOutlined />,
    text: "Cryptocurrencies",
    path: "/cryptocurrencies",
  },
  { icon: <MoneyCollectOutlined />, text: "Exchanges", path: "/exchanges" },
  { icon: <BulbOutlined />, text: "News", path: "/news" },
];

export const routeItems = [
  { path: "/", component: <Homepage /> },
  { path: "/exchanges", component: <Exchanges /> },
  { path: "/cryptocurrencies", component: <Cryptocurrencies /> },
  { path: "/crypto/:coinId", component: <CryptoDetails /> },
  { path: "/news", component: <News /> },
];

export const footerItems = [
  { path: "/", text: "Home" },
  { path: "/exchanges", text: "Exchanges" },
  { path: "/news", text: "News" },
];
