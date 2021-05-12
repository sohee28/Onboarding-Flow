import React, { useEffect, useContext } from "react";

import "../Products.css";

import userContext from "../../../../index";

function Products_Left() {
  const { user, setUser } = useContext(userContext);
  const productData = user.products;
  const productLefts = productData.productLeft;
  const productRights = productData.productRight;
  console.log(productData);

  //Once item is click, add the specific item to productRight array in usecontext.
  //Also delete the clicked item from productLeft array in usecontext.
  const handleSelectedProduct = (url, e) => {
    const tempLefts = productLefts.filter(
      (leftproduct) => leftproduct.id !== `${e.target.id}`
    );
    setUser({
      ...user,
      products: {
        ...productData,
        productRight: [
          ...productRights,
          {
            name: `${e.target.name}`,
            vendor: `${e.target.value}`,
            id: `${e.target.id}`,
            url: `${url}`,
          },
        ],
        productLeft: [...tempLefts],
      },
    });
  };

  //when user click 10 products, display words to ask user to put more products if they have one!

  return (
    <div className="Products_Left_Container">
      <div className="Products_Left_TitleArea">
        <div className="Products_Left_subtitleArea">
          <p className="Products_Left_Title">Add Products</p>
          {productLefts.length >= 10 ? (
            <div className="Products_Left_morethan10">
              <img src="/Images/icons8-gift.gif" alt=" " />
              <p>
                You selected 10 products!<br></br>
                <span>But feel free to add more! </span>
              </p>
            </div>
          ) : (
            <p>{productLefts.length} / 10</p>
          )}
        </div>
        <p className="Products_Left_SubTitle">
          Vendors want to know the top 10 products you are currently using on a
          day-to-day basis. Moreso, they care about how you are using these
          tools, and what problems they are solving for your organization. Click
          Add Product to get started.
        </p>
      </div>

      <div className="Products_Left_MainArea">
        {productData.addproduct === false ? (
          <button
            className="Products_Left_Addproduct"
            onClick={(e) => {
              setUser({
                ...user,
                products: { ...productData, addproduct: true },
              });
            }}
          >
            <p className="Products_Addproduct_btn">Add Product +</p>
          </button>
        ) : (
          [
            <div className="Products_Left_cardarea">
              {productLefts.length > 0
                ? productLefts.map((product) => (
                    <label
                      for={`${product.id}`}
                      key={product.id}
                      className="Products_Right_label"
                    >
                      <div className="Products_Right_image">
                        <img src={product.url} alt="" />
                      </div>
                      <div className="Products_Right_cardDetail">
                        <p className="Products_Right_cardname">
                          {product.name}
                        </p>
                        <p className="Products_Right_cardvendor">
                          {product.vendor}
                        </p>
                      </div>
                      <input
                        id={`${product.id}`}
                        type="checkbox"
                        value={product.vendor}
                        name={product.name}
                        onClick={(e) => handleSelectedProduct(product.url, e)}
                      />
                    </label>
                  ))
                : null}
            </div>,
          ]
        )}
      </div>
    </div>
  );
}

export default Products_Left;
