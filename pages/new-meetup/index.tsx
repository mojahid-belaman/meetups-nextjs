import NewMeetupForm from "@/components/meetups/NewMeetupForm";

const NewMeetupPage = () => {
  const handleInsertMeetup = (meetup: any) => {
    console.log(meetup);
  };
  return <NewMeetupForm onAddMeetup={handleInsertMeetup} />;
};

export default NewMeetupPage;
