import React, { useEffect, useState } from 'react'
import { assets } from "../../assets/front_images/assets"; 
import axios from 'axios';
const Achievement = () => {
  const [cf,setCf]= useState({});
  useEffect(()=>{
    const cf_fetch=async()=>{
      const response = await axios.get('https://codeforces.com/api/user.info?handles=Dark_Striker_');

      // console.log(response.data.result);
      setCf(response.data.result[0]);
    }

    cf_fetch();
    
  },[])
console.log(cf)
  const {maxRating,maxRank} = cf;
    const achievementsData = [
        {
          title: `Codeforces ${maxRank}`,
          description:
            `Reached a rating of ${maxRating} on Codeforces and participated in multiple contests, improving problem-solving skills.`,
          date: "2025",
          logo: assets.codeforces,
        },
        // {
        //   title: "LeetCode Contest Winner",
        //   description:
        //     "Ranked top 10% in weekly LeetCode contests, strengthening algorithm and data structure knowledge.",
        //   date: "2023",
        //   logo: assets.leetcode,
        // },
        // {
        //   title: "Hackathon Winner",
        //   description:
        //     "Won 1st place in a university-level hackathon by developing a full-stack web application in 24 hours.",
        //   date: "2022",
        //   logo: assets.hackathon_logo, // optional, add to your assets
        // },
        // {
        //   title: "Top Performer in AtCoder",
        //   description:
        //     "Solved 150+ problems on AtCoder and reached a rating of 1200, showing consistency in competitive programming.",
        //   date: "2023",
        //   logo: assets.atcoder,
        // },
      ];
    
      return (
        <section className="mt-32 w-full px-6 md:px-12 text-center">
          <h2 className="text-5xl font-bold mb-12 font-mono">🏅 Achievements</h2>
    
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-left">
            {achievementsData.map((achieve, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                {achieve.logo && (
                  <img
                    src={achieve.logo}
                    alt={`${achieve.title} logo`}
                    className="w-12 h-12 mb-4 mx-auto"
                  />
                )}
                <h3 className="text-xl font-semibold text-blue-700 mb-2">{achieve.title}</h3>
                {achieve.date && (
                  <p className="text-sm text-gray-500 mb-2">{achieve.date}</p>
                )}
                <p className="text-gray-700 leading-relaxed">{achieve.description}</p>
              </div>
            ))}
          </div>
        </section>
      );
}

export default Achievement