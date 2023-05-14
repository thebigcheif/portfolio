import React from "react";

const educationContent = [
  {
    year: "2022",
    degree: "BACHELORS DEGREE",
    institute: "VIRTUAL UNIVERSITY",
    details: ` GRADUATED WITH 3.4 CPGA`,
  },
  {
    year: "2018",
    degree: "HIGH SCHOOL ",
    institute: "ASPIRE GROUP OF COLLEGES",
    details: ` GRADUATED WITH 89% `,
  },
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
            <span className="place open-sans-font">{val.institute}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;
