import React from "react";
import ContactInfoSection from "./ContactInfoSection";
import AddressCard from "./AddressCard";
import PhoneList from "./PhoneList";
import EmailList from "./EmailList";
import SocialMediaLinks from "./SocialMediaLinks";
import Map from "./Map";
import ContactForm from "./ContactForm";
import FeedbackForm from "./FeedbackForm";
import FAQAccordion from "./FAQAccordion";
import ScheduleAppointmentButton from "./ScheduleAppointmentButton";

const ContactPage = () => {
  return (
    <div className="contact-page">
      <ContactInfoSection />
      <AddressCard />
      <PhoneList />
      <EmailList />
      <SocialMediaLinks />
      <Map />
      <ContactForm />
      <FeedbackForm />
      <FAQAccordion />
      <ScheduleAppointmentButton />
    </div>
  );
};

export default ContactPage;
