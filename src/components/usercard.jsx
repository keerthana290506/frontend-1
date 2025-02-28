import React from "react";

const Usercard = () => {
  // Static User Data
  const profilePhoto = "https://randomuser.me/api/portraits/men/1.jpg";
  const name = "John Doe";
  const email = "johndoe@example.com";
  const phone = "+1 234 567 890";
  const address = "123, Elm Street, New York, USA";

  return (
    <div className="user-card">
      <img src={profilePhoto} alt="Profile" className="user-image" />
      <h2 className="user-name">{name}</h2>
      <p className="user-email">📧 {email}</p>
      <p className="user-phone">📞 {phone}</p>
      <p className="user-address">📍 {address}</p>
    </div>
  );
};

export default Usercard;
