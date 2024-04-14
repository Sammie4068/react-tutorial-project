import { useContext } from "react";

import FavContext from "../store/fav-context";
import MeetupList from "../components/meetups/Meetuplist";

function FavoritesPage() {
  const favCtx = useContext(FavContext);

  let content;

  if (favCtx.totalFav === 0) {
    content = <p>You got no favorites yet. Start adding some?</p>;
  } else {
    content = <MeetupList meetups={favCtx.fav} />;
  }

  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  );
}

export default FavoritesPage;
