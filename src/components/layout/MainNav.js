import { useContext } from "react";

import { Link } from "react-router-dom";

import classes from "./MainNav.module.css";
import FavContext from "../../store/fav-context";

function MainNav() {
  const favCtx = useContext(FavContext);
  return (
    <header className={classes.header}>
      <div className={classes.logo}> React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">Add New Meetup</Link>
          </li>
          <li>
            <Link to="/favorites">
              Favorites <span className={classes.badge}>{favCtx.totalFav}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNav;
