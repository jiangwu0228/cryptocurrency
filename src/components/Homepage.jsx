import React from "react";
import millify from "millify";
import { Typography, Row, Col, Statistic } from "antd";
import { Link } from "react-router-dom";

import { useGetCryptosQuery } from "../services/cryptoApi";
import Cryptocurrencies from "./Cryptocurrencies";
import News from "./News";
import Loader from "./Loader";

const Homepage = () => {
  const { Title } = Typography;

  const { data, isFetching } = useGetCryptosQuery();
  const globalStats = !isFetching && data?.data?.stats;

  if (isFetching) return <Loader />;

  const totalData = [
    { title: "Total Cryptocurrencies", value: `${globalStats.total}` },
    {
      title: "Total Exchanges",
      value: `${millify(globalStats.totalExchanges)}`,
    },
    {
      title: "Total Market Cap:",
      value: `${millify(globalStats.totalMarketCap)}`,
    },
    {
      title: "Total 24h Volume",
      value: `${millify(globalStats.total24hVolume)}`,
    },
    { title: "Total Markets", value: `${millify(globalStats.totalMarkets)}` },
  ];

  const headData = [
    {
      path: "/cryptocurrencies",
      title: "Top 10 Cryptos In The World",
      component: <Cryptocurrencies simplified />,
    },
    {
      path: "/news",
      title: "Latest Crypto News",
      component: <News simplified />,
    },
  ];

  return (
    <>
      <Title level={2} className="heading">
        Global Crypto Stats
      </Title>
      <Row>
        {totalData.map((data, index) => {
          return (
            <Col key={index} span={12}>
              <Statistic title={data.title} value={data.value} />
            </Col>
          );
        })}
      </Row>
      {headData.map((data, index) => {
        return (
          <div key={index}>
            <div className="home-heading-container">
              <Title level={2} className="home-title">
                {data.title}
              </Title>
              <Title level={3} className="show-more">
                <Link to={data.path}>Show more</Link>
              </Title>
            </div>
            {data.component}
          </div>
        );
      })}
    </>
  );
};

export default Homepage;
