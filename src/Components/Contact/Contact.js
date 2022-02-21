import { useParams } from "react-router-dom";

const Contact = () => {

  const {title} = useParams();

  return (
    <p>this is the contact page for {title}</p>
  );
};

export default Contact;