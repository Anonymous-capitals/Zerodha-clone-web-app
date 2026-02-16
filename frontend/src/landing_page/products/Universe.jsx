import React from "react";

function Universe() {
  const universeProducts = [
    {
      id: 1,
      name: "Zerodha Fund House",
      image: "media/images/zerodhafundhouse.png",
      description: "Our asset management venture that is creating simple and transparent index funds to help you save for your goals."
    },
    {
      id: 2,
      name: "Sensibull",
      image: "media/images/sensibullLogo.svg",
      description: "Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more."
    },
    {
      id: 3,
      name: "Tijori",
      image: "media/images/tijori.svg",
      description: "Systematic trading platform that allows you to create and backtest strategies without coding."
    },
    {
      id: 4,
      name: "Streak",
      image: "media/images/streakLogo.png",
      description: "Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs."
    },
    {
      id: 5,
      name: "Smallcase",
      image: "media/images/smallcaseLogo.png",
      description: "Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more."
    },
    {
      id: 6,
      name: "Ditto",
      image: "media/images/dittoLogo.png",
      description: "Personalized advice on life and health insurance. No spam and no mis-selling."
    }
  ];

  return (
    <div style={{background: "var(--zerodha-section-alt)"}}>
      <div className="container py-5" style={{paddingTop: "3rem", paddingBottom: "3rem"}}>
        <div className="row text-center mb-5">
          <h1 className="mt-1 mb-4 universe-title">The Zerodha Universe</h1>
          <p className="mb-4 mb-md-5 universe-subtitle" style={{fontSize: "1rem", lineHeight: 1.6}}>
            Extend your trading and investment experience even further with our
            partner platforms
          </p>
        </div>
        
        <div className="row g-4 mb-4">
          {universeProducts.map((product, index) => (
            <div 
              key={product.id} 
              className="col-12 col-sm-6 col-lg-4"
            >
              <div
                style={{
                  background: "var(--zerodha-bg)",
                  borderRadius: "8px",
                  padding: "2rem",
                  textAlign: "center",
                  border: "1px solid var(--zerodha-border)",
                  transition: "all 0.3s ease",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  cursor: "pointer"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--zerodha-primary)";
                  e.currentTarget.style.boxShadow = "0 4px 12px rgba(56, 126, 209, 0.1)";
                  e.currentTarget.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--zerodha-border)";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <div
                  style={{
                    width: "120px",
                    height: "80px",
                    marginBottom: "1.5rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden"
                  }}
                >
                  <img 
                    src={product.image} 
                    alt={product.name}
                    style={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      objectFit: "contain",
                      filter: "drop-shadow(0 1px 3px rgba(0,0,0,0.05))"
                    }}
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.parentElement.innerHTML = '<p style="color: var(--zerodha-text-muted); font-size: 0.9rem;">Image not found</p>';
                    }}
                  />
                </div>
                <p 
                  style={{
                    fontSize: "0.95rem",
                    lineHeight: 1.6,
                    color: "var(--zerodha-text-muted)",
                    margin: 0,
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="row mt-4">
          <div style={{textAlign: "center", width: "100%"}}>
            <button 
              className="universe-cta btn btn-primary py-3 px-5 fs-5"
              style={{
                borderRadius: "6px",
                fontWeight: "500",
                letterSpacing: "0.3px",
                minWidth: "180px"
              }}
            >
              Sign up for free
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Universe;
