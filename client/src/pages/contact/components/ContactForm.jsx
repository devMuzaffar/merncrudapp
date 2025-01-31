import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { fetchAbout, postMessage } from "../../../services/contactService";

const ContactForm = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const callAbout = async () => {
    const aboutData = await fetchAbout(userData);
    if (aboutData) {
      setUserData(aboutData);
    }
  };

  useEffect(() => {
    callAbout();
  }, []);

  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };

  // Submit Message Form Method
  const handleForm = async (e) => {
    e.preventDefault();

    const newMessage = await postMessage(userData);
    if (newMessage) {
      setUserData(newMessage);
    }
  };

  return (
    <div className="py-12 h-full">
      {/* Contact Window */}
      <div className="bg-white shadow-lg rounded-xl px-4 py-10 space-y-6 sm:!px-12">
        {/* Title */}
        <div>
          <h2>Contact Us</h2>
        </div>

        {/* Form */}
        <Form
          method="POST"
          onSubmit={handleForm}
          className="flex flex-col gap-4"
        >
          {/* Name Email Password Row */}
          <div className="grid gap-4 sm:grid-cols-3">
            <Form.Control
              placeholder="Your Name"
              name="name"
              value={userData.name}
              onChange={handleInputs}
            />
            <Form.Control
              type="email"
              placeholder="Your email"
              name="email"
              value={userData.email}
              onChange={handleInputs}
            />
            <Form.Control
              placeholder="Your Phone Number"
              name="phone"
              value={userData.phone}
              onChange={handleInputs}
            />
          </div>

          <Form.Control
            as="textarea"
            placeholder="Message"
            name="message"
            value={userData.message}
            style={{ height: "100px" }}
            onChange={handleInputs}
          />

          <Button className="md:!w-64" variant="primary" type="submit">
            Send Message
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default ContactForm;
