import React, { useEffect, useState } from 'react';
import { initializeApp } from "firebase/app";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

interface MenuItem {
  item: string;
  desc?: string;
  filename?: string;
  imageUrl?: string;
}

const firebaseConfig = {
  apiKey: "AIzaSyAVlvBKCE4q2zKMHwgdJ1HbuNnD15wmgzg",
  authDomain: "tonton-377bb.firebaseapp.com",
  projectId: "tonton-377bb",
  storageBucket: "tonton-377bb.firebasestorage.app",
  messagingSenderId: "663063025148",
  appId: "1:663063025148:web:a96b8fc6b174510f774e79"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export default function Menu() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const sheetURL = "https://opensheet.elk.sh/19mU6qVEyENlKqTPIb45CuIF4HA0H9QDMM8Bn_b44aJ4/1";
        const response = await fetch(sheetURL);
        const data: MenuItem[] = await response.json();

        // Resolve Firebase images
        const dataWithUrls = await Promise.all(
          data.map(async (line) => {
            if (line.filename) {
              try {
                const imageRef = ref(storage, `assets/items_isolated/${line.filename}`);
                const url = await getDownloadURL(imageRef);
                return { ...line, imageUrl: url };
              } catch {
                return { ...line };
              }
            }
            return line;
          })
        );

        setMenuItems(dataWithUrls);
        setLoading(false);
      } catch (err) {
        console.error("Error loading menu:", err);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return (
      <p style={{ fontFamily: 'Garet', color: 'white' }} className="pt-[6rem] text-center tracking-wider">
        LOADING MENU...
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 py-12 sm:px-8 md:px-16 lg:px-24 menu-container max-w-7xl mx-auto">
      {menuItems.map((line, idx) => {
        if (line.item.startsWith("*")) {
          return (
            <div key={idx} className="col-span-full pt-6 pb-2">
              <h3 className="text-center text-white font-bold text-xl sm:text-2xl tracking-wide">
                {line.item.replace("*", "")}
              </h3>
            </div>
          );
        } else if (line.item === "/") {
          return null;
        } else {
          return (
            <div 
              key={idx} 
              className="menu-card rounded-lg mb-2 flex flex-col p-4 sm:p-5 items-center justify-between text-center transition-transform hover:scale-[1.02]"
            >
              {line.filename && line.imageUrl && (
                <div className="p-2 image-crop-wrapper mb-3 flex justify-center items-center overflow-hidden rounded w-full">
                  <img
                    src={line.imageUrl}
                    alt={line.item}
                    className="aspect-square w-full max-w-[220px] sm:max-w-[240px] object-cover object-bottom scale-[0.85] transition-transform"
                  />
                </div>
              )}
              
              <div className="flex flex-col items-center gap-1 w-full mt-auto">
                <p style={{ fontFamily: 'Garet', color: 'white' }} className="font-semibold text-base sm:text-lg leading-snug">
                  {line.item}
                </p>
                {line.desc && (
                  <p style={{ fontFamily: 'Garet', color: 'white' }} className="text-xs sm:text-sm opacity-80 leading-relaxed">
                    {line.desc}
                  </p>
                )}
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}