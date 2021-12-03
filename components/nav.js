import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { Link } from "react-scroll";
import { useRouter } from "next/router";


function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const router = useRouter();
	return (
		<div>
			<nav className=" shadow-sm w-full z-10 sticky">
				<div className="w-full">
					<div className="flex items-center h-20 w-full bg-yellow-400">
						<div className="flex items-center  mx-20  justify-between w-full">
							<div className="flex justify-center items-center flex-shrink-0 ">
								<h1 className=" font-bold text-xl cursor-pointer" type="button"
								onClick={() => {
									router.push("");
								}}>
									Ad<span className="text-white">min</span>
								</h1>
							</div>
							<div className="hidden md:block">
								<div className="ml-10 flex items-baseline space-x-4">
									<button
										className="cursor-pointer hover:bg-white text-black hover:text-black px-3 py-2 rounded-md text-sm font-medium"

										onClick={() => {
											router.push('/addfood');
										}}

									>
										{"เพิ่มเมนูอาหาร"}
									</button>
									<button
										className="cursor-pointer hover:bg-white text-black hover:text-black px-3 py-2 rounded-md text-sm font-medium"

										onClick={() => {
											router.push('/addstore');
										}}

									>
										{"เพิ่มร้านอาหาร"}
									</button>
									<button
										className="w-fill px-2 text-center text-white h-9 bg-black text-sm font-medium hover:bg-white hover:text-black rounded-md "

										onClick={() => {
											router.push('/');
										}}

									>
										{"Logout"}
									</button>
								</div>
							</div>
						</div>
						<div className="mr-10 flex md:hidden ">
							<button
								onClick={() => setIsOpen(!isOpen)}
								type="button"
								className="bg-yellow-400 inline-flex items-center justify-center p-2 rounded-md text-white  hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-yellow-800 focus:ring-white"
								aria-controls="mobile-menu"
								aria-expanded="false"
							>
								<span className="sr-only">Open main menu</span>
								{!isOpen ? (
									<svg
										className="block h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M4 6h16M4 12h16M4 18h16"
										/>
									</svg>
								) : (
									<svg
										className="block h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M6 18L18 6M6 6l12 12"
										/>
									</svg>
								)}
							</button>
						</div>
					</div>
				</div>

				<Transition
					show={isOpen}
					enter="transition ease-out duration-100 transform"
					enterFrom="opacity-0 scale-95"
					enterTo="opacity-100 scale-100"
					leave="transition ease-in duration-75 transform"
					leaveFrom="opacity-100 scale-100"
					leaveTo="opacity-0 scale-95"
				>
					{(ref) => (
						<div className="md:hidden" id="mobile-menu">
							<div
								ref={ref}
								className="bg-white px-2 pt-2 pb-3 space-y-1 sm:px-3"
							>
								<button
										className="w-full text-left font-blod cursor-pointer hover:bg-yellow-400 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"

										onClick={() => {
											router.push('/addfood');
										}}

									>
										{"เพิ่มเมนูอาหาร"}
									</button>
									<button
										className="w-full text-left font-blod cursor-pointer hover:bg-yellow-400 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"

										onClick={() => {
											router.push('/addstore');
										}}

									>
										{"เพิ่มร้านอาหาร"}
									</button>
									<button
										className="w-full text-left font-blod cursor-pointer hover:bg-yellow-400 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"

										onClick={() => {
											router.push('/');
										}}

									>
										{"Logout"}
									</button>
							</div>
						</div>
					)}
				</Transition>
			</nav>
		</div>
	);
}

export default Navbar;