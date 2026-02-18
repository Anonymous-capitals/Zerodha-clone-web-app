import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

function ProductsPage() {
  return (
    <>
      <Hero />
      <LeftSection
        imageURL="media/images/trading_simulator.png"
        productName="ZEROTRADE Trading Simulator"
        productDescription="Our intuitive simulation platform for learning trading with virtual market data, charts, and a user-friendly interface. Experience seamless learning on your devices."
        tryDemo="Try Simulation"
        learnMore="Learn More"
        googlePlay=""
        appleStore=""
      />
      <RightSection
        imageURL="media/images/dashboard.png"
        productName="ZEROTRADE Dashboard"
        productDescription="The central hub for your simulation account. Get insights into your virtual trades and investments with reports and visualizations."
        tryDemo="Learn More"
        learnMore="nil"
        googlePlay=""
        appleStore=""
      />
      <LeftSection
        imageURL="media/images/investment_simulator.png"
        productName="ZEROTRADE Investment Simulator"
        productDescription="Simulate mutual fund investments online with educational tools, delivered to your virtual account. Learn the investment process on your devices."
        tryDemo="Investment Simulator"
        learnMore="nil"
        googlePlay=""
        appleStore=""
      />
      <RightSection
        imageURL="media/images/api_simulator.png"
        productName="ZEROTRADE API Simulator"
        productDescription="Build educational trading experiences with our simple APIs. Perfect for learners and developers creating simulation apps."
        tryDemo="API Simulator"
        learnMore="nil"
        googlePlay=""
        appleStore=""
      />
      <LeftSection
        imageURL="media/images/learning_mobile.png"
        productName="ZEROTRADE Learning Mobile"
        productDescription="An easy-to-follow collection of trading lessons with illustrations and bite-size content. Learn on the go with our mobile-friendly simulator."
        tryDemo="nil"
        learnMore="nil"
        googlePlay=""
        appleStore=""
      />
      <p className="products-tech-link">Want to know more about our technology stack? Check out the <a href="/">ZEROTRADE Blog</a>.</p>
      <Universe />
    </>
  );
}

export default ProductsPage;