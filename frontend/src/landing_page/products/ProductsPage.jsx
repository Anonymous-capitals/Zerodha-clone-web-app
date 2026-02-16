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
        imageURL="media/images/trading_simulator.png"  // Updated to original image (e.g., a generic trading chart; replace with your file)
        productName="ZEROTRADE Trading Simulator"  // Updated to ZEROTRADE branding and simulation focus
        productDescription="Our intuitive simulation platform for learning trading with virtual market data, charts, and a user-friendly interface. Experience seamless learning on your devices."  // Rewritten to educational, simulation-focused
        tryDemo="Try Simulation"  // Updated to generic
        learnMore="Learn More"  // Kept generic
        googlePlay=""
        appleStore=""
      />
      <RightSection
        imageURL="media/images/dashboard.png"  // Updated to original image (e.g., a generic dashboard chart; replace with your file)
        productName="ZEROTRADE Dashboard"  // Updated to ZEROTRADE branding
        productDescription="The central hub for your simulation account. Get insights into your virtual trades and investments with reports and visualizations."  // Rewritten to simulation-focused, removed Zerodha references
        tryDemo="Learn More"  // Kept generic
        learnMore="nil"
        googlePlay=""
        appleStore=""
      />
      <LeftSection
        imageURL="media/images/investment_simulator.png"  // Updated to original image (e.g., a generic investment chart; replace with your file)
        productName="ZEROTRADE Investment Simulator"  // Updated to ZEROTRADE branding and simulation focus
        productDescription="Simulate mutual fund investments online with educational tools, delivered to your virtual account. Learn the investment process on your devices."  // Rewritten to educational, removed real account/commission references
        tryDemo="Investment Simulator"  // Updated to generic
        learnMore="nil"
        googlePlay=""
        appleStore=""
      />
      <RightSection
        imageURL="media/images/api_simulator.png"  // Updated to original image (e.g., a generic API diagram; replace with your file)
        productName="ZEROTRADE API Simulator"  // Updated to ZEROTRADE branding and simulation focus
        productDescription="Build educational trading experiences with our simple APIs. Perfect for learners and developers creating simulation apps."  // Rewritten to educational, removed startup/clientbase references
        tryDemo="API Simulator"  // Updated to generic
        learnMore="nil"
        googlePlay=""
        appleStore=""
      />
      <LeftSection
        imageURL="media/images/learning_mobile.png"  // Updated to original image (e.g., a generic learning app screenshot; replace with your file)
        productName="ZEROTRADE Learning Mobile"  // Updated to ZEROTRADE branding and educational focus
        productDescription="An easy-to-follow collection of trading lessons with illustrations and bite-size content. Learn on the go with our mobile-friendly simulator."  // Rewritten to educational, removed Zerodha-specific details
        tryDemo="nil"
        learnMore="nil"
        googlePlay=""
        appleStore=""
      />
      {/* Updated to ZEROTRADE branding, removed "Zerodha.tech" */}
      <p className="products-tech-link">Want to know more about our technology stack? Check out the <a href="/">ZEROTRADE Blog</a>.</p>
      <Universe />
    </>
  );
}

export default ProductsPage;