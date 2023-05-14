import React from "react";

const experienceContent = [
  {
    year: " 2022 - Present",
    position: " Web Developer",
    compnayName: "Mayader - KSA",
    details: `  Managed and developed websites in laravel, wordpress and MERN `,
  },
  {
    year: " 2021 - 2022",
    position: " Freelance",
    compnayName: "Fiverr",
    details: ` Worked on projects related to mailing linux servers, laravel and various frontend website`,
  },
  {
    year: "2019 - Early 2021",
    position: "Front End Developer",
    compnayName: " HazelSoft -PK",
    details: ` Developed Frontend Websites `,
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
