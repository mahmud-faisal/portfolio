import React, { useEffect, useState } from 'react'
import { assets } from '../../assets/front_images/assets'
import axios from 'axios'
const Competitive = () => {
  
  const [cf,setCf]= useState({});

  useEffect(()=>{
    const cf_fetch=async()=>{
      const response = await axios.get('https://codeforces.com/api/user.info?handles=Dark_Striker_');

      // console.log(response.data.result);
      setCf(response.data.result[0]);
    }

    cf_fetch();
    
  },[])

  const {maxRating,maxRank} = cf;

  // console.log(rating,rank);
  return (
    <div className="p-8 rounded-lg shadow-lg bg-gray-50 hover:shadow-2xl transition-shadow duration-300">
    <h3 className="text-2xl font-semibold mb-4 text-blue-600">
      🏆 Competitive Programming
    </h3>
    <p className="text-gray-700 leading-relaxed">
      I actively participate in online contests and problem-solving challenges.
      My journey began with platforms like <strong>Codeforces</strong>,{" "}
      <strong>LeetCode</strong>, and <strong>AtCoder</strong>, where I continuously
      improve my problem-solving skills and algorithmic thinking.
    </p>

    {/* Platform Stats */}
    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Codeforces */}
      <a
        href="https://codeforces.com/profile/Dark_Striker_"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center p-4 bg-white rounded-md shadow hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
      >
        <img src={assets.codeforces} alt="Codeforces" className="w-12 h-12 mb-2" />
        <h4 className="font-semibold text-gray-800">Codeforces</h4>
        <p className="text-gray-600 text-sm">
          Solved: <span className="font-medium text-blue-600">420+</span>
        </p>
        <p className="text-gray-600 text-sm">
          Rating: <span className="font-medium text-blue-600">{maxRating} ({maxRank})</span>
        </p>
      </a>

      {/* LeetCode */}
      <a
        href="https://leetcode.com/your_username"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center p-4 bg-white rounded-md shadow hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
      >
        <img src={assets.leetcode} alt="LeetCode" className="w-12 h-12 mb-2" />
        <h4 className="font-semibold text-gray-800">LeetCode</h4>
        <p className="text-gray-600 text-sm">
          Solved: <span className="font-medium text-yellow-600">250+</span>
        </p>
        <p className="text-gray-600 text-sm">
          Rating: <span className="font-medium text-yellow-600">1650</span>
        </p>
      </a>

      {/* AtCoder */}
      <a
        href="https://atcoder.jp/users/your_username"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center p-4 bg-white rounded-md shadow hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
      >
        <img src={assets.atcoder} alt="AtCoder" className="w-12 h-12 mb-2" />
        <h4 className="font-semibold text-gray-800">AtCoder</h4>
        <p className="text-gray-600 text-sm">
          Solved: <span className="font-medium text-green-600">150+</span>
        </p>
        <p className="text-gray-600 text-sm">
          Rating: <span className="font-medium text-green-600">1200</span>
        </p>
      </a>

      {/* Others */}
      <a
        href="https://uhunt.onlinejudge.org/id/your_id"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center p-4 bg-white rounded-md shadow hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
      >
        <img
          src={assets.other_logo || assets.atcoder}
          alt="Others"
          className="w-12 h-12 mb-2"
        />
        <h4 className="font-semibold text-gray-800">Others</h4>
        <p className="text-gray-600 text-sm">
          Solved: <span className="font-medium text-green-600">150+</span>
        </p>
        <p className="text-gray-600 text-sm">
          Rating: <span className="font-medium text-green-600">1200</span>
        </p>
      </a>
    </div>
  </div>
  )
}

export default Competitive