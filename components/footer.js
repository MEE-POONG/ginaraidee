import { BsFacebook, BsTelephone, BsLine } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { GiWorld } from "react-icons/gi";

export default function Footer() {
  return (
    <div className="fixed left-0 right-0 bottom-0 bg-white p-0">
      <footer className="bg-gray-50 text-gray-600 px-6 lg:px-8 py-10">
        <div className="max-w-screen-xl mx-auto ">
          <div className="grid grid-cols-8 md:grid-cols-9  lg:grid-cols-8  divide-gray-200 divide-y-2 md:divide-x-2 md:divide-y-0 md:-mx-8">
            <div className="col-span-8 md:col-span-3 lg:col-span-2 md:px-8 py-4 md:py-0">
              <h5 className="text-xl font-semibold text-gray-700">Company</h5>
              <nav className="mt-4">
                <ul className="space-y-2">
                  รับทำเว็บไซต์ และการตลาดออนไลน์ครบวงจร
                  ไม่ว่าธุรกิจของคุณ จะมีขนาดเล็กหรือใหญ่ เราช่วยให้ธุรกิจของคุณเติบโต ในโลกออนไลน์
                </ul>
              </nav>
            </div>
            <div className="col-span-8 md:col-span-3 lg:col-span-3 md:px-8 py-4 md:py-0">
              <h5 className="text-xl font-semibold text-gray-700">Contact</h5>
              <nav className="mt-4">
                <ul className="grid lg:grid-cols-2">
                  <li className="mb-2">
                    <a href="#" className="flex space-x-2  font-normal text-base hover:text-gray-400">
                      <div className="item-center">
                        <BsTelephone size={20} />
                      </div>

                      <span>
                        082 216 3528
                      </span>
                    </a>
                    <a href="#" className="flex space-x-2  font-normal text-base hover:text-gray-400">
                      <div className="item-center">
                        <HiOutlineMail size={20} />
                      </div>

                      <span>
                        meepoonggroup@gmail.com
                      </span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-span-8 md:col-span-3 lg:col-span-3 md:px-8 py-4 md:py-0">
              <h5 className="text-xl font-semibold text-gray-700">Follow us</h5>
              <nav className="mt-4">
                <ul className="grid lg:grid-cols-2">
                  <li className="mb-2">
                    <a href="https://www.facebook.com/meepoong/" className="flex space-x-2  font-normal text-base hover:text-gray-400">
                      <div className="item-center">
                        <BsFacebook size={24} />
                      </div>

                      <span>
                        Facebook
                      </span>
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="https://www.meepoong.com/?fbclid=IwAR2nLLulbiY4PSUEp-Wm70apEKwmMI4lLigq7auZjmL6RRagOoHJPuCBqP0" className="flex space-x-2  font-normal text-base hover:text-gray-400">
                      <div className="item-center">
                        <GiWorld size={24} />
                      </div>

                      <span>
                        Website
                      </span>
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="https://www.tiktok.com/@meepoongfamily?" className="flex space-x-2  font-normal text-base hover:text-gray-400">
                      <div className="item-center">
                        <FaTiktok size={24} />
                      </div>

                      <span>
                        Tiktok
                      </span>
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="https://line.me/th/" className="flex space-x-2  font-normal text-base hover:text-gray-400">
                      <div className="item-center">
                        <BsLine size={24} />
                      </div>

                      <span>
                        @meepoong
                      </span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-center items-center space-y-4 mt-8 lg:mt-12 border-t-2 border-gray-200 pt-8">
          <p className="text-sm text-center">&copy;2022 Company. Mee Poong Group | All rights reserved</p>
        </div>
      </footer>
    </div>
  );
}
