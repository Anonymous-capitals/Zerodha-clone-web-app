import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appleStore,
}) {
  return (
    <div className="container mt-4 mt-md-5 product-section">
      <div className="row align-items-center g-4">
        <div className="col-12 col-lg-6 order-2 order-lg-1 text-center text-lg-start">
          <img src={imageURL} alt={productName} className="product-section-img" />
        </div>
        <div className="col-12 col-lg-6 order-1 order-lg-2 product-section-content">
          <h1 className="mb-3 mb-md-5 opacity-75 product-section-title">{productName}</h1>
          <p className="product-section-desc">{productDescription}</p>
          <div className="mt-3 opacity-75 mb-3 product-section-links">
            {tryDemo !== "nil" && (
              <a href="/"> {tryDemo} <i className="fa-solid fa-arrow-right"></i> </a>
            )}
            {learnMore !== "nil" && (
              <a href="/" className="ms-3 ms-md-4"> {learnMore} <i className="fa-solid fa-arrow-right"></i> </a>
            )}
          </div>
          <div className="product-badges d-flex flex-wrap gap-3 gap-md-4">
            <a href="/" aria-label="Google Play">
              <img src="media/images/googlePlayBadge.svg" alt="Google Play" className="store-badge" />
            </a>
            <a href="/" aria-label="App Store">
              <img src="media/images/appstoreBadge.svg" alt="App Store" className="store-badge" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
