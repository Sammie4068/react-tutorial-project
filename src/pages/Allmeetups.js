import { useState, useEffect } from "react";
import MeetupList from "../components/meetups/Meetuplist";
import axios from "axios";

function AllMeetupsPage() {
const [isLoading, setIsLoading] = useState(true)
const [loadedMeetups, setLoadedMeetups] = useState([])

useEffect(() => {
  setIsLoading(true)
axios
  .get(
    "https://react-getting-started-1519f-default-rtdb.firebaseio.com/meetups.json"
  )
  .then((res) => {
    const meetups = []
    for (const key in res.data) {
      const meetup = {
        id: key,
        ...res.data[key]
      }
      meetups.push(meetup)
    }

    setIsLoading(false);
    setLoadedMeetups(meetups);
  });
}, [])

  if(isLoading) {
    return <section>Loading...</section>
  }

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
}

export default AllMeetupsPage;
