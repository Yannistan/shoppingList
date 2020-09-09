import React from "react";

const ShoppingList = (props) => {
  const { shopping, removeFromShoppingList } = props;
  return (
    <ol>
      {shopping.map((el) => {
        return (
          <li className="mb-2" key={el}>
            <div className="d-flex align-items-center justify-content-between">
              {el}
              <button
                className="btn btn-sm btn-warning"
                onClick={() => removeFromShoppingList(el)}
              >
                done!
              </button>
            </div>
          </li>
        );
      })}
    </ol>
  );
};

export default ShoppingList;
