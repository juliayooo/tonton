import React, { useEffect, useState } from 'react';
import { initializeApp } from "firebase/app";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

interface MenuItem {
  item: string;
  filename?: string;
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
        const sheetURL = "https://opensheet.elk.sh/1rdw6mXlFVo-JhDxMOGxdeLY6XJQefKcXF3vCCOmHF2k/1";
        const response = await fetch(sheetURL);
        const data: MenuItem[] = await response.json();

        // Resolve Firebase images
        const dataWithUrls = await Promise.all(
          data.map(async (line) => {
            if (line.filename) {
              try {
                const imageRef = ref(storage, `assets/items_resized/${line.filename}.jpg`);
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

  if (loading) return <p style={{fontFamily: 'Garet'}} className="pt-[6rem] text-center">LOADING MENU...</p>;

  return (
    <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' /* Creates 3 equal-width columns */
}}className="pt-[6rem] menu-container p-2">
      {menuItems.map((line, idx) => {
        if (line.item.startsWith("*")) {
          return (
            <div key={idx} className="col-span-3"><h3 key={idx} className="text-center text-[#2E6A2B] font-bold text-xl my-2">
              <br /> {line.item.replace("*", "")}
            </h3></div>
            
          );
        } else if (line.item === "/") {
          // return <br key={idx} />;
        } else {
          return (
            <div key={idx} className="menu-card rounded mb-4 flex flex-col items-center ">
              {line.filename && line['imageUrl'] && (
                <div className=" p-5 image-crop-wrapper mb-2 flex justify-center">
                  <img
                    src={line['imageUrl']}
                    alt={line.item}
                    className="w-1/2  aspect-square w-[75vw] md:w-[50vw] object-cover object-bottom"
                  />
                </div>
              )}
              <p className="text-center">{line.item}</p>
              <p style={{fontFamily: 'Garet'}} className="text-center text-sm">{line.desc}</p>
            </div>
          );
        }
      })}
    </div>
  );
}
