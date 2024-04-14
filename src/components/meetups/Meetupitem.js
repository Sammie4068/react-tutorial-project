import { useContext } from "react";
import FavContext from "../../store/fav-context";

import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";

function MeetupItem(props) {
  const favCtx = useContext(FavContext);

  const itemIsFav = favCtx.isFav(props.id);

  function toggleFavState() {
    if (itemIsFav) {
      favCtx.removeFav(props.id);
    } else {
      favCtx.addFav({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address,
      });
    }
  }

  return (
    <li className={classes.content}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title}></img>
        </div>
        <div className={classes.content}>
          <h3>{props.tile}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavState}>
            {itemIsFav ? "Remove From Favorites" : "To Favorites"}
          </button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
