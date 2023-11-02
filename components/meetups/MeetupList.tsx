import { meetupProps } from "@/types/meetup";
import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";

type MeetupListProps = {
  meetups: Array<meetupProps>;
};

const MeetupList = (props: MeetupListProps) => {
  const { meetups } = props;
  return (
    <ul className={classes.list}>
      {meetups.map((meetup: meetupProps) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
        />
      ))}
    </ul>
  );
};

export default MeetupList;
