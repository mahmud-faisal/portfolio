import React from "react";
import { assets } from "../../assets/front_images/assets"; // optional if you have logos

const Education = () => {
  const educationData = [
    {
      degree: "B.Sc. in Computer Science & Engineering",
      institution: "Daffodil International University (DIU)",
      duration: "2022 – Present",
      details:
        "Currently pursuing my undergraduate degree focusing on Data Structures, Algorithms, and Full-Stack Web Development.",
      logo: assets.diu_logo,
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Govt. Debendra College",
      duration: "2017 – 2019",
      details:
        "Completed my higher secondary education with a concentration in Science, achieving excellent results in Mathematics and Physics.",
      logo: assets.hsc_logo,
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Ideal School and College",
      duration: "2012 – 2017",
      details:
        "Graduated with distinction, building the foundation for my technical and analytical skills.",
      logo: assets.ssc_logo,
    },
  ];

  return (
    <section className="mt-32 w-full px-6 md:px-12 text-center">
      <h2 className="text-5xl font-bold mb-12 font-mono">🎓 Education</h2>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-left">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="p-8 bg-gray-50 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            {edu.logo && (
              <img
                src={edu.logo}
                alt={`${edu.institution} logo`}
                className="w-16 h-16 mb-4 mx-auto"
              />
            )}
            <h3 className="text-2xl font-semibold text-blue-700 mb-2">
              {edu.degree}
            </h3>
            <p className="text-lg font-medium text-gray-800 mb-1">
              {edu.institution}
            </p>
            <p className="text-sm text-gray-500 mb-4">{edu.duration}</p>
            <p className="text-gray-700 leading-relaxed">{edu.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
