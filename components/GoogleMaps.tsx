import React from "react";

const GoogleMap = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.296830795644!2d-84.35138208427743!3d33.93349288063843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f509be63c90ef3%3A0x99f0588eb13a58e9!2sTaste%20Bottle%20Shop!5e0!3m2!1sen!2sus!4v1679513285572!5m2!1sen!2sus"
      width="100%"
      height="450"
      allowFullScreen={true}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
};

export default GoogleMap;
