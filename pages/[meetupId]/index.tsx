import MeetupDetail from "@/components/meetups/MeetupDetail";
import { useRouter } from "next/router";

const MeetupDetailPage = () => {
  return (
    <MeetupDetail
      image="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Yasaka-dori_early_morning_with_street_lanterns_and_the_Tower_of_Yasaka_%28Hokan-ji_Temple%29%2C_Kyoto%2C_Japan.jpg/2560px-Yasaka-dori_early_morning_with_street_lanterns_and_the_Tower_of_Yasaka_%28Hokan-ji_Temple%29%2C_Kyoto%2C_Japan.jpg"
      title="First Meetup"
      address="some addrss, some city"
    />
  );
};

export default MeetupDetailPage;
