import React, { useState, useContext, useEffect } from "react";
import userContext from "../../../../index";
import iconData from "./ProductData.json";

import "../Products.css";

function Products_Right() {
  const { user, setUser } = useContext(userContext);
  const productData = user.products;
  const productLefts = productData.productLeft;
  const productRights = productData.productRight;

  //Once item is click, add the specific item to productLeft array in usecontext.
  //Also delete the clicked item from productRight array in usecontext.
  const handleSelectedProduct = (url, e) => {
    const tempRights = productRights.filter(
      (rightproduct) => rightproduct.id !== `${e.target.id}`
    );
    setUser({
      ...user,
      products: {
        ...productData,
        productLeft: [
          ...productLefts,
          {
            name: `${e.target.name}`,
            vendor: `${e.target.value}`,
            id: `${e.target.id}`,
            url: `${url}`,
          },
        ],
        productRight: [...tempRights],
      },
    });
    console.log(productLefts);
  };

  // Add copy of Array from ProductData.json to the useContext Data
  useEffect(() => {
    if (productRights.length === 0) {
      setUser({
        ...user,
        products: {
          ...productData,
          productRight: [...iconData],
        },
      });
    } else {
      setUser({
        ...user,
        products: {
          ...productData,
          productRight: productRights,
        },
      });
    }
  }, []);

  //search bar
  const handleSearchbar = (e) => {
    const search = e.target.value;
    const list = [...iconData];
    const intersection = list.filter(
      ({ vendor: id1 }) => !productLefts.some(({ vendor: id2 }) => id2 === id1)
    );

    if (search != "") {
      const filtered = intersection.filter(
        (filter) =>
          filter.vendor.toLowerCase().includes(search.toLowerCase()) ||
          filter.name.toLowerCase().includes(search.toLowerCase())
      );
      setUser({
        ...user,
        products: {
          ...productData,
          productRight: [...filtered],
        },
      });
    } else {
      console.log("empty search");
      setUser({
        ...user,
        products: {
          ...productData,
          productRight: [...intersection],
        },
      });
    }
  };
  return (
    <>
      {productData.addproduct === false ? (
        <div className="Products_Right_Container">
          <img src="/Images/icons8-light.gif" alt="" />
          <p className="Products_Right_para">
            Vendors will love to know the top 10 products, but feel free to add
            more!
          </p>
        </div>
      ) : (
        <div className="Products_Right_Container2">
          <input
            className="Products_Right_search"
            type="text"
            onChange={handleSearchbar}
            placeholder="Search Vendors & Products"
          />
          <div className="Products_Right_mainarea">
            {productRights.map((item) => (
              <label
                for={`${item.id}`}
                key={item.id}
                className="Products_Right_label"
              >
                <div className="Products_Right_image">
                  <img src={item.url} alt="" />
                </div>
                <div className="Products_Right_cardDetail">
                  <p className="Products_Right_cardname">{item.name}</p>
                  <p className="Products_Right_cardvendor">{item.vendor}</p>
                </div>
                <input
                  id={`${item.id}`}
                  type="checkbox"
                  value={item.vendor}
                  name={item.name}
                  onClick={(e) => handleSelectedProduct(item.url, e)}
                />
              </label>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Products_Right;
