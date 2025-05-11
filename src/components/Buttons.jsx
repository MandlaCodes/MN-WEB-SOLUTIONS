import React from 'react'

const Buttons = () => {
  return (
    <div className="flex flex-row items-center gap-4 mt-6">
      <a
        href="#Contact"
        className="px-6 py-3 text-lg md:text-xl font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-md hover:scale-105 hover:shadow-lg transition-transform duration-300"
      >
        Let’s Connect
      </a>
      <a
        href="#Work"
        className="px-6 py-3 text-lg md:text-xl font-semibold text-white bg-white/10 border border-white/20 backdrop-blur-md rounded-xl shadow-md hover:scale-105 hover:shadow-lg transition-transform duration-300"
      >
        View Services
      </a>
    </div>
  )
}

export default Buttons
