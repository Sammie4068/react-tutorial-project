import { createContext, useState } from "react";

const FavContext = createContext({
  fav: [],
  totalFav: 0,
  addFav: (favMeetup) => {},
  removeFav: (meetupId) => {},
  isFav: (meetupid) => {},
});

export function FavContextProvider(props) {
  const [userFav, setFav] = useState([]);

  function addFavHandler(favMeetup) {
    setFav((prevState) => {
      return prevState.concat(favMeetup);
    });
  }

  function removeFavHandler(meetupId) {
    setFav((prevState) => {
      return prevState.filter((meetup) => meetup.id != meetupId);
    });
  }

  function isFavHandler(meetupid) {
    return userFav.some((meetup) => meetup.id === meetupid);
  }

  const context = {
    fav: userFav,
    totalFav: userFav.length,
    addFav: addFavHandler,
    removeFav: removeFavHandler,
    isFav: isFavHandler,
  };

  return (
    <FavContext.Provider value={context}>{props.children}</FavContext.Provider>
  );
}

export default FavContext;
