import React from 'react';
import logo from '../Images/mtn-logo-lg.svg'

export default function Footer() {
  return (
    <div>
        <footer className="super-dk-green">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <div className="sm:flex sm:items-center sm:justify-between">
                <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0">
                    <img src= {logo} alt="Flowbite Logo" />
                    <span className="mt-2 self-center text-2xl signature whitespace-nowrap dark:text-white">Hikeaways</span>
                </a>
                <ul className="flex flex-wrap items-center text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6 ">Legal</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6 ">Careers</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">Contact</a>
                    </li>
                </ul>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="#" className="hover:underline">Hikeaways</a>. All Rights Reserved.</span>
        </div>
</footer>


    </div>
  )
}
