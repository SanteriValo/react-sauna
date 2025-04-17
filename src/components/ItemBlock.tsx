import { useState } from "react";

const ItemBlock = ({ name, price }) => {
  const [addedItems, setAddedItems] = useState(0);

  const handleAddItems = () => {
    setAddedItems(addedItems + 1);
  };
  return (
    <div className="item-block">
      <h4 className="item-block__title">{name}</h4>
      <img
        className="item-block__image"
        src="https://public.keskofiles.com/f/btt/ASSET_JPEG_24921771?auto=format&bg=fff&dpr=1&fit=fill&h=819&q=80&w=1200"
        alt="Harvia Stove"
      />
      <div className="item-block__selector">
        <ul>
          <li className="active">black</li>
          <li>silver</li>
        </ul>
        <ul>
          <li className="active">6 kW</li>
          <li>8 kW</li>
          <li>12 kW</li>
        </ul>
      </div>
      <div className="item-block__bottom">
        <div className="item-block__price">from {price}€</div>
        <button
          onClick={handleAddItems}
          className="button button--outline button--add"
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Add</span>
          <i>{addedItems}</i>
        </button>
      </div>
    </div>
  );
};

export default ItemBlock;
