import React from "react";
import Image from "next/image";

const restaurant = [
  {
    id: 1,
    name: "ร้านแม่ประนอม",
    href: "#",
    imageSrc: "/images/delivery.png",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "ราคา 45 บาท",
    color: "Black",
    distance: "1.5 km.",
  },
  {
    id: 2,
    name: "ร้านแม่ประณี",
    href: "#",
    imageSrc: "/images/delivery.png",
    imageAlt: "Front of men's Basic Tee in Aspen White.",
    price: "ราคา 50 บาท",
    color: "Aspen White",
    distance: "1.6 km.",
  },
  {
    id: 3,
    name: "ร้านแม่ประนาม",
    href: "#",
    imageSrc: "/images/delivery.png",
    imageAlt: "Front of men's Basic Tee in Charcoal.",
    price: "ราคา 55 บาท",
    color: "Charcoal",
    distance: "1.7 km.",
  },
  {
    id: 4,
    name: "ร้านแม่ประนม",
    href: "#",
    imageSrc: "/images/delivery.png",
    imageAlt: "Front of men's Artwork Tee in Iso Dots.",
    price: "ราคา 60 บาท",
    color: "Iso Dots",
    distance: "1.8 km.",
  },
  {
    id: 5,
    name: "ร้านแม่ประอวม",
    href: "#",
    imageSrc: "/images/delivery.png",
    imageAlt: "Front of men's Artwork Tee in Iso Dots.",
    price: "ราคา 60 บาท",
    color: "Iso Dots",
    distance: "1.8 km.",
  },
];
export function Store() {
  return (
    <div className="container mx-auto max-w-lg py-5">
      <div className="px-4 flex-auto">
        <div className="text-center">
          <h1 className="text-2xl bg-shadow font-bold py-4">
            สั่งอาหารจากร้านค้า
          </h1>
        </div>
        {restaurant.map((restaurant) => (
          <div key={restaurant.id} className=" grid">
            <div className=" cursor-pointer mb-3 border-2 border-gray-300 rounded-lg px-3 bg-white  hover:shadow-lg hover:border-yellow-400 transition delay-150 duration-300 ease-in-out">
              <div className="grid grid-cols-2 gap-1 ">
                <div className="col-span-12 rounded-lg place-content-center">
                  <div className="grid grid-cols-6 gap-1 py-4 ">
                    <div className="text-xl col-span-2 text-center">
                      <Image
                        src={restaurant.imageSrc}
                        alt=""
                        width={80}
                        height={80}
                        layout=""
                      />
                    </div>
                    <div className="text-xl col-span-4">
                      <p className="font-bold">{restaurant.name}</p>
                      <p className="text-sm">{restaurant.price}</p>
                      <p className="text-xs">{restaurant.distance}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
