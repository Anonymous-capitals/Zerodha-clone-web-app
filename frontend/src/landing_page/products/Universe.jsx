import React from "react";

function Universe() {
  return (
    <div className="container">
      <div className="row text-center">
        <h1 className="mt-1 mb-4 universe-title">The Zerodha Universe</h1>
        <p className="mb-4 mb-md-5 universe-subtitle">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>
      <div className="row Universe g-4">
        <div className="col-12 col-sm-6 col-lg-4">
          <img src="media/images/zerodhafundhouse.png" alt="Zerodha Fund House" />
          <p className="universe-p">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col-12 col-sm-6 col-lg-4">
          <img src="media/images/sensibullLogo.svg" alt="Sensibull" />
          <p className="text-small text-muted universe-p">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col-12 col-sm-6 col-lg-4">
          <img src="media/images/tijori.svg" alt="Tijori" />
          <p className="text-small text-muted universe-p">
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>
      </div>
      <div className="row mt-4 mt-md-5 Universe g-4">
        <div className="col-12 col-sm-6 col-lg-4">
          <img src="media/images/streakLogo.png" alt="Streak" />
          <p className="text-small text-muted universe-p">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-12 col-sm-6 col-lg-4">
          <img src="media/images/smallcaseLogo.png" alt="Smallcase" />
          <p className="text-small text-muted universe-p">
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>
        <div className="col-12 col-sm-6 col-lg-4">
          <img src="media/images/dittoLogo.png" alt="Ditto" />
          <p className="text-small text-muted universe-p">
            Personalized advice on life and health insurance. No spam and no
            mis-selling.
          </p>
        </div>
      </div>
      <div className="row">
        <button className="universe-cta btn btn-primary py-2 px-4 fs-5 mb-5">Sign up for free</button>
      </div>
    </div>
  );
}

export default Universe;
