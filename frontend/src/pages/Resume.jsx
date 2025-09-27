import React from "react";

export default function Resume() {
  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen py-10 px-6">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Education Section */}
        <section>
          <h2 className="text-2xl font-bold text-yellow-400 mb-6 flex items-center gap-2">
            <span>🎓</span> Education
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold">
                Nihareeka College Of Management And Information Technology
              </h3>
              <p className="text-sm text-gray-400">
                Bachelor of Science in Computer Science and Information Technology (B.Sc. CSIT)
              </p>
              <p className="text-sm text-gray-500">2017 — 2021</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Greenland International College</h3>
              <p className="text-sm text-gray-400">+2 Science</p>
              <p className="text-sm text-gray-500">2015 — 2017</p>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section>
          <h2 className="text-2xl font-bold text-yellow-400 mb-6 flex items-center gap-2">
            <span>💼</span> Experience
          </h2>
          <div className="space-y-10">
            {/* Mid-Level Flutter Developer */}
            <div>
              <h3 className="text-lg font-semibold">Mid-Level Flutter Developer</h3>
              <p className="text-sm text-gray-400">
                Tokma Technologies — Aug 2024 – Feb 2025 · 7 mos
              </p>
              <p className="text-sm text-gray-500 mb-4">Kathmandu, Nepal</p>
              <ul className="list-disc list-inside space-y-2 text-sm text-gray-300">
                <li>
                  Designed and created custom e-form features including submissions and data entries.
                </li>
                <li>Integrated Google and Facebook sign-in for user authentication.</li>
                <li>Designed dynamic functionalities using the BLoC design pattern.</li>
                <li>Implemented payment gateway integration like Khalti for secure transactions.</li>
                <li>Collaborated with developers and backend teams to deliver new features.</li>
                <li>Participated in team meetings for features and project updates.</li>
                <li>Performed code review and deployed the app in Playstore and Appstore.</li>
              </ul>
            </div>

            {/* Flutter Developer */}
            <div>
              <h3 className="text-lg font-semibold">Flutter Developer</h3>
              <p className="text-sm text-gray-400">
                Infrancr Technology — Oct 2022 – Aug 2024 · 1 yr, 11 mos
              </p>
              <p className="text-sm text-gray-500 mb-4">Kathmandu, Nepal</p>
              <ul className="list-disc list-inside space-y-2 text-sm text-gray-300">
                <li>
                  Developed features and transformed UI designs into functional interfaces.
                </li>
                <li>
                  Integrated payment solutions like eSewa for secure and seamless transactions.
                </li>
                <li>
                  Optimized performance and ensured smooth user experience.
                </li>
                <li>
                  Collaborated with backend developers, designers, and cross-functional teams.
                </li>
                <li>
                  Identified and resolved bugs, improving app stability and performance.
                </li>
                <li>Performed code review and deployed apps in Playstore and Appstore.</li>
              </ul>
            </div>

            {/* Flutter Developer Intern */}
            <div>
              <h3 className="text-lg font-semibold">Flutter Developer Intern</h3>
              <p className="text-sm text-gray-400">
                YAI Tech Pvt Ltd — May 2022 – Sep 2022 · 5 mos
              </p>
              <p className="text-sm text-gray-500 mb-4">Kathmandu, Nepal</p>
              <ul className="list-disc list-inside space-y-2 text-sm text-gray-300">
                <li>
                  Assisted in maintaining Flutter applications with smooth functionality.
                </li>
                <li>
                  Implemented visually appealing UI designs based on client requirements.
                </li>
                <li>
                  Delivered efficient, high-quality, and scalable solutions.
                </li>
                <li>
                  Gained hands-on experience in debugging, troubleshooting, and refining apps.
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
