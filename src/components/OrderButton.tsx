import React from 'react';

interface OrderAheadButtonProps {
  href?: string;
}

export default function OrderAheadButton({ 
  href = 'https://gosnappy.io/owa/r/tonton-matcha-coffee/4908/menu_664/?skipBeforeEnter=true' 
}: OrderAheadButtonProps) {
  return (
    <button 
      onClick={() => window.open(href, '_blank')}
      style={{ fontFamily: 'IntroRust' }} 
      className="text-2xl text-white bg-[#2E6A2B] hover:bg-[#499943] rounded-full transition-colors duration-200 ease-in-out shadow-sm  px-8 py-3 border-2 border-white"
    >
      Order Ahead
    </button>
  );
}