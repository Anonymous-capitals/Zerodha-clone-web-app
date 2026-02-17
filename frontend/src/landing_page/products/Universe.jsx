import React from "react";

function Universe() {
  return (
    <div className="container">
      <div className="row text-center">
        <h1 className="mt-1 mb-4 universe-title">The ZEROTRADE Learning Ecosystem</h1>  {/* Updated to ZEROTRADE branding and educational focus */}
        <p className="mb-4 mb-md-5 universe-subtitle">
          Expand your learning experience with our partner simulation tools for trading and investing  {/* Updated to educational, simulation-focused */}
        </p>
      </div>
      <div className="row Universe g-4">
        <div className="col-12 col-sm-6 col-lg-4">
          <img src="media/images/fund_simulator.png" alt="ZEROTRADE Fund Simulator" />  {/* Updated to original image and alt text */}
          <p className="universe-p">
            Our simulation tool for creating virtual index funds to help you learn about saving for goals.  {/* Rewritten to educational, simulation-focused */}
          </p>
        </div>
        <div className="col-12 col-sm-6 col-lg-4">
          <img src="media/images/strategy_builder.png" alt="ZEROTRADE Strategy Builder" />  {/* Updated to original image and alt text */}
          <p className="text-small text-muted universe-p">
            Options simulation platform that lets you build strategies, analyze positions, and explore data like trends in a virtual environment.  {/* Rewritten to simulation-focused, removed real data references */}
          </p>
        </div>
        <div className="col-12 col-sm-6 col-lg-4">
          <img src="media/images/backtest_tool.png" alt="ZEROTRADE Backtest Tool" />  {/* Updated to original image and alt text */}
          <p className="text-small text-muted universe-p">
            Virtual trading platform for creating and testing strategies without coding.  {/* Rewritten to simulation-focused */}
          </p>
        </div>
      </div>
      <div className="row mt-4 mt-md-5 Universe g-4">
        <div className="col-12 col-sm-6 col-lg-4">
          <img src="media/images/thematic_simulator.png" alt="ZEROTRADE Thematic Simulator" />  {/* Updated to original image and alt text */}
          <p className="text-small text-muted universe-p">
            Thematic simulation platform for learning about diversified virtual investments in baskets of stocks.  {/* Rewritten to educational, simulation-focused */}
          </p>
        </div>
        <div className="col-12 col-sm-6 col-lg-4">
          <img src="media/images/research_hub.png" alt="ZEROTRADE Research Hub" />  {/* Updated to original image and alt text */}
          <p className="text-small text-muted universe-p">
            Educational research platform offering insights on virtual stocks, sectors, and markets.  {/* Rewritten to educational, simulation-focused */}
          </p>
        </div>
        <div className="col-12 col-sm-6 col-lg-4">
          <img src="media/images/advice_simulator.png" alt="ZEROTRADE Advice Simulator" />  {/* Updated to original image and alt text */}
          <p className="text-small text-muted universe-p">
            Personalized simulation for learning about life and health advice in a virtual setting.  {/* Rewritten to educational, simulation-focused */}
          </p>
        </div>
      </div>
      <div className="row">
        <button className="universe-cta btn btn-primary py-2 px-4 fs-5 mb-5">Start Your Simulation</button>  {/* Updated to simulation-focused */}
      </div>
    </div>
  );
}

export default Universe;