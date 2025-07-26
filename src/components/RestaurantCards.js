import { CDN_URL } from "../utils/constants";

const RestaurantCards = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData.info;
  return (
    <div className="res-cards" style={{ backgroundColor: "#f4eeeeff" }}>
      <img
        src={CDN_URL + cloudinaryImageId}
        alt="Pizza-Hut"
        className="res-logo"
      ></img>
      <h3>{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

export default RestaurantCards;
