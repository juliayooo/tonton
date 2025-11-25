import React from 'react'
import Slideshow from '../components/Slideshow'
export default function Home(){
  return (
    <div className="pt-[6rem] p-4">
      <Slideshow images={['/assets/interior2.jpeg', '/assets/interior3.jpeg', '/assets/interior4.jpeg','/assets/2.jpg','/assets/1.jpg']} />
      <h2 className="pt-5 text-center text-xl mt-4 pb-7" style={{ color: '#2E6A2B' }}>VISIT US</h2>
      <a target="_blank" href="https://maps.app.goo.gl/YVU3UqmREKmERHe68"><p className="text-center">1-100 Western Battery Road, Toronto</p></a>
      <h2 className="text-center text-xl mt-4 pb-7"style={{ color: '#2E6A2B' }}>HOURS</h2>
      <p className="text-center pb-7">Monday - Thursday: 9am - 5pm <br />Friday - Sunday: 9am - 6pm</p>
      <a href="https://www.instagram.com/tonton.matcha.coffee" target="_blank"><img className="mx-auto justify-center max-w-[5vw]" src="/assets/ig.png" alt="matcha" /></a>
    </div>
  )
}
