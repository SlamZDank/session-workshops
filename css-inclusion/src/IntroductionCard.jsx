import React from 'react'

function IntroductionCard({ img, name, profession, age, hobby }) {
  // to return a special card that is in the center
  return (
    <div className='container flex flex-row-reverse border justify-between rounded-2xl border-gray-500 text-white bg-gray-600/30 backdrop-blur w-2/3 m-auto my-9 p-5'>
      <div className='self-center'>
        <img src={img} className='size-32 border min-w-32 rounded-lg' />
      </div>
      <div className='pb-5 text-base md:text-lg lg:text-2xl'>
        <h1 className='font-bold text-6xl py-9'>Hello! 👋</h1>
        <h2>I'm {name}!</h2>
        <h3>Profession: {profession} 💼</h3>
        <h4>Age: {age} 🔢</h4>
        <h4>and I like {hobby}</h4>
      </div>
    </div>
  )
}

export default IntroductionCard
