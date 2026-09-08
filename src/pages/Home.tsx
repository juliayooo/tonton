import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import OrderAheadButton from '../components/OrderButton';
import Slideshow from '../components/Slideshow';

export default function Home() {
  return (
    <div className="pt-[2rem] overflow-x-hidden">
      {/* Slideshow */}
      <Slideshow 
        images={[
          '/assets/interior3.jpeg', 
          '/assets/2.jpg', 
          '/assets/interior2.jpeg', 
          '/assets/1.jpg', 
          '/assets/interior4.jpeg'
        ]} 
      />

      {/* Locations Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-10 pb-20 px-6 sm:px-12 md:px-20 locations-container">
        
        {/* Liberty Village Location */}
        <div className="flex flex-col items-center md:items-end text-center md:text-right">
          <a target="_blank" rel="noopener noreferrer" href="https://maps.app.goo.gl/YVU3UqmREKmERHe68">
            <h2 className="text-white text-2xl" style={{ fontFamily: 'IntroRust' }}>
              LIBERTY VILLAGE
            </h2>
            <p className="pt-4 pb-6 text-sm sm:text-base text-white" style={{ fontFamily: 'Garet' }}>
              1-100 Western Battery Road, Toronto <br /><br />
              Monday - Thursday: 9am - 5pm<br />
              Friday - Sunday: 9am - 6pm
            </p>
          </a>
          <OrderAheadButton href="https://gosnappy.io/owa/r/tonton-matcha-coffee/4908/menu_664/?skipBeforeEnter=true" />
        </div>

        {/* Bloor West Location */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left mt-6 md:mt-0">
          <a target="_blank" rel="noopener noreferrer" href="https://maps.app.goo.gl/5Lftp5z6kmNsnJ7b7">
            <h2 className="text-white text-2xl" style={{ fontFamily: 'IntroRust' }}>
              BLOOR WEST
            </h2>
            <p className="pt-4 pb-6 text-sm sm:text-base text-white" style={{ fontFamily: 'Garet' }}>
              1005 Bloor St W, Toronto <br /><br />
              Monday - Friday: 9am - 6pm<br />
              Saturday - Sunday: 9am - 5pm
            </p>
          </a>
          <OrderAheadButton href="https://gosnappy.io/owa/r/tonton-matcha-coffee-bloor/4909/menu_664/?skipBeforeEnter=true" />
        </div>

      </div>

      {/* Banner & Reviews Section */}
      <div className="w-full relative" style={{ backgroundColor: '#F4F5E6' }}>
        <div className="px-6 sm:px-12 md:px-20 absolute -translate-y-8 sm:-translate-y-16 top-0 left-0 right-0 z-0">
          <img 
            src="assets/drinkbanner.png" 
            alt="Drink Banner"
            className="w-full object-cover" 
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-20 md:pt-32 pb-10 px-4 relative z-10 home-img-container">
          {/* Optional images placeholder */}
        </div>

        {/* Reviews */}
<div className="flex flex-col md:flex-row md:justify-center items-center gap-8 px-6 sm:px-12 md:px-20 pb-20 relative z-10 reviews-container">          <a target="_blank" href="https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT20weVIxZExPSFkzWkhoVmFHSlRkakI2VkV4alpHYxAB!2m1!1s0x0:0xe46234b97d96f8d5!3m1!1s2@1:CAIQACodChtycF9oOm0yR1dLOHY3ZHhVaGJTdjB6VExjZGc%7C%7C?hl=en-US&g_ep=CAISBjYuNDUuNRgAINDkAUICQ0E%3D&skid=6c54e956-702e-4ca7-a2be-4713b1fb84f5&g_st=i">
          <div className="flex flex-col items-center">
            <img src="assets/review-3.png" alt="Review 3" className="max-w-[60vw] md:max-w-[20vw] h-auto" />
          </div>
          </a>
          <a target="_blank" href="https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT21kQ1ZIRk5PSEYwVGtwR1JrMVVXVlppV1hnMVRtYxAB!2m1!1s0x0:0xe46234b97d96f8d5!3m1!1s2@1:CAIQACodChtycF9oOmdCVHFNOHF0TkpGRk1UWVZiWXg1Tmc%7C%7C?hl=en-US&g_ep=CAISBjYuNDUuNRgAINDkAUICQ0E%3D&skid=a7733096-4334-4f50-a036-ea6e1aad76ba&g_st=i">
          <div className="flex flex-col items-center">
            <img src="assets/review-2.png" alt="Review 2" className="max-w-[60vw] md:max-w-[20vw] h-auto" />
          </div>
          </a>
          <a target="_blank" href="https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT201M1VYaEdOazlDUVRWd1J6TkdSSEI2UjFCYWVrRRAB!2m1!1s0x0:0xf4915e87e3c6c44!3m1!1s2@1:CAIQACodChtycF9oOm53UXhGNk9CQTVwRzNGRHB6R1BaekE%7C%7C?hl=en-US&g_ep=CAISBjYuNDUuNRgAINDkAUICQ0E%3D&skid=52f974a3-1abd-4bc0-ae11-ca3df9698362&g_st=i">
          <div className="flex flex-col items-center">
            <img src="assets/review-1.png" alt="Review 1" className="max-w-[60vw] md:max-w-[20vw] h-auto" />
          </div></a>
        </div>
      </div>

      {/* Menu Link */}
      <div className="pt-16 sm:pt-24 md:pt-32 relative z-30 underline decoration-[#FFFFFF] flex justify-center items-center text-center">
        <Link to="/menu">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white whitespace-nowrap" style={{ fontFamily: 'IntroRust' }}>
            VIEW MENU
          </h2>
        </Link>
      </div>

      {/* Instagram Button */}
      <div className="relative justify-center flex p-8 sm:p-10 pt-12 sm:pt-20 z-30 items-center">
        <a href="https://www.instagram.com/tonton.matcha.coffee" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-105">
          <FaInstagram className="text-white w-24 h-24 sm:w-36 sm:h-36 md:w-48 md:h-48" />
        </a>
      </div>
    </div>
  );
}