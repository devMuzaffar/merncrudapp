import ContactForm from "./components/ContactForm";
import contactList from "../../list/contactList";

function Contact() {
  return (
    <div className="h-full flex flex-col section-padding">
      {/* Contact Cards */}
      <div className="grid gap-4 md:grid-cols-3">
        {/* Card */}
        {contactList.map(({ icon, title, text }, index) => (
          <div
            key={index}
            className="flex items-center gap-4 px-4 py-2 border-2 border-gray-300 w-full"
          >
            <img className="w-8" src={icon} alt="" />

            <div className="flex flex-col leading-2">
              <h4 className="text-base">{title}</h4>
              <p className="text-sm">{text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Contact Form */}
      <ContactForm />

      
    </div>
  );
}

export default Contact;
