import axios from "axios";
import { useNavigate } from "react-router-dom";
import NewmeetupForm from "../components/meetups/NewMeetUpForm";

function NewmeetupsPage() {
  const navigate = useNavigate();

  function adddMeetupHandler(meetupData) {
    axios
      .post(
        "https://react-getting-started-1519f-default-rtdb.firebaseio.com/meetups.json",
        meetupData
      )
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <section>
      <h1>Add New Meetups</h1>
      <NewmeetupForm onAddMeetup={adddMeetupHandler} />
    </section>
  );
}

export default NewmeetupsPage;
