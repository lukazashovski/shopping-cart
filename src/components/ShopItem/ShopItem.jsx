import "./ShopItem.css";
import { Link } from "react-router-dom";

function ShopItem({
  itemId,
  itemImg,
  itemTitle,
  itemRating,
  ratingCount,
  itemPrice,
}) {
  const itemUrl = itemTitle
    .replaceAll(" ", "-")
    .replaceAll(".", "")
    .replaceAll(",", "");

  return (
    <>
      <Link to={`${itemId}`} className={"shop-item " + itemId}>
        <img src={itemImg} alt={"An image of the " + itemTitle} />
        <span className="item-title">{itemTitle}</span>
        <span className="item-rating">
          {itemRating} ⭐ - {ratingCount} Reviews
        </span>
        <span className="item-price">{itemPrice}</span>
      </Link>
    </>
  );
}

export default ShopItem;
