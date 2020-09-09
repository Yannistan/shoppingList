import React from "react";

const AddPopularProducts = (props) => {
  const { shopping, addToShoppingList } = props;
  const populars = ["sel", "sucre", "pain", "lait", "beurre", "huile"];

  return (
    <div className="mb-3 d-flex align-items-center">
      Avez vous besoin de :
      {populars.map((el) => (
        <button
          key={el}
          className="btn btn-dark mx-1"
          onClick={() => addToShoppingList(el)}
          disabled={shopping.includes(el)}
        >
          {el}
        </button>
      ))}
      ?
    </div>
  );
};

export default AddPopularProducts;
