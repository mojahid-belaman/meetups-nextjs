import { meetupProps } from "@/types/meetup";
import MeetupList from "../components/meetups/MeetupList";
import { useEffect, useState } from "react";

const DUMMY_MEETUP: meetupProps[] = [
  {
    id: "m1",
    title: "First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Yasaka-dori_early_morning_with_street_lanterns_and_the_Tower_of_Yasaka_%28Hokan-ji_Temple%29%2C_Kyoto%2C_Japan.jpg/2560px-Yasaka-dori_early_morning_with_street_lanterns_and_the_Tower_of_Yasaka_%28Hokan-ji_Temple%29%2C_Kyoto%2C_Japan.jpg",
    address: "some addrss, some city",
  },
  {
    id: "m2",
    title: "Second Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Yasaka-dori_early_morning_with_street_lanterns_and_the_Tower_of_Yasaka_%28Hokan-ji_Temple%29%2C_Kyoto%2C_Japan.jpg/2560px-Yasaka-dori_early_morning_with_street_lanterns_and_the_Tower_of_Yasaka_%28Hokan-ji_Temple%29%2C_Kyoto%2C_Japan.jpg",
    address: "some addrss, some city",
  },
];

const HomePage = () => {
  const [meetups, setMeetups] = useState<meetupProps[]>([]);
  useEffect(() => {
    // Send a http request and fetch data
    setMeetups(DUMMY_MEETUP);
  }, []);
  return <MeetupList meetups={meetups} />;
};

export default HomePage;
