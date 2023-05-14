import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Adil" },
  { meta: "last name", metaInfo: "Ahmad" },
  { meta: "Age", metaInfo: "22 Years" },
  { meta: "Nationality", metaInfo: "Pakistani" },
  { meta: "Freelance", metaInfo: "Available" },
  { meta: "Address", metaInfo: "Riyadh,Saudi Arabia" },
  { meta: "phone", metaInfo: "+966556059835" },
  { meta: "Email", metaInfo: "aahmad@mayader.sa" },
  { meta: "Whatsapp", metaInfo: "+923174641363" },
  { meta: "langages", metaInfo: "Urdu, Arabic , English" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
