interface AnnouncemntProp {
  text: string;
}

function Announcemnt({ text }: AnnouncemntProp) {
  return <div>{text}</div>;
}
export default Announcemnt;
