import React from "react";

function RightSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appleStore,
}) {
  return (
    <div className="container mt-2 product-section product-section-right">
      <div className="row align-items-center g-4">
        <div className="col-12 col-lg-6 product-section-content">
          <h1 className="mb-3 mb-md-5 opacity-75 product-section-title">{productName}</h1>
          <p className="product-section-desc">{productDescription}</p>
          <div className="mt-3 opacity-75 mb-4 product-section-links">
            {tryDemo !== "nil" && (
              <a href="/"> {tryDemo} <i className="fa-solid fa-arrow-right"></i> </a>
            )}
            {learnMore !== "nil" && (
              <a href="/" className="ms-3 ms-md-4"> {learnMore} <i className="fa-solid fa-arrow-right"></i> </a>
            )}
          </div>
        </div>
        <div className="col-12 col-lg-6 text-center">
          <img src={imageURL} alt={productName} className="product-section-img" />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
