import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
} from "@ant-design/icons";

import News from "../components/News";
import Homepage from "../components/Homepage";
import Cryptocurrencies from "../components/Cryptocurrencies";
import CryptoDetails from "../components/CryptoDetails";

export const menuItems = [
  { icon: <HomeOutlined />, text: "Home", path: "/" },
  {
    icon: <FundOutlined />,
    text: "Cryptocurrencies",
    path: "/cryptocurrencies",
  },
  { icon: <BulbOutlined />, text: "News", path: "/news" },
];

export const routeItems = [
  { path: "/", component: <Homepage /> },
  { path: "/cryptocurrencies", component: <Cryptocurrencies /> },
  { path: "/crypto/:coinId", component: <CryptoDetails /> },
  { path: "/news", component: <News /> },
];

export const footerItems = [
  { path: "/", text: "Home" },
  { path: "/news", text: "News" },
];
