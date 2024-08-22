import { Link, NavLink } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaPinterest, FaYoutube, FaHeart, FaUser } from 'react-icons/fa';

export default function Navbar() {
  return (
    <>
      <div
        className="bg-gray-800 text-white p-2"
      >
        <div className="container mx-auto flex justify-between">
          <div className="flex space-x-4">
            {/* Social media icons */}
            <Link className="flex gap-2 my-auto" to="#">
              <FaTwitter className="my-auto" /> Twitter
            </Link>
            <Link className="flex gap-2 my-auto" to="#">
              <FaFacebookF className="my-auto" /> Facebook
            </Link>
            <Link className="flex gap-2 my-auto" to="#">
              <FaPinterest className="my-auto" /> Pinterest
            </Link>
            <Link className="flex gap-2 my-auto" to="#">
              <FaYoutube className="my-auto" /> Youtube
            </Link>
          </div>
          <div className="flex space-x-4">
            <Link className="flex gap-2 my-auto" to="#">
              <FaHeart className="my-auto" /> Wishlist
            </Link>
            <Link className="flex gap-2 my-auto" to="#">
              <FaUser className="my-auto" /> Sign in or Register
            </Link>
          </div>
        </div>
      </div>

      <div
        className="bg-grey text-gray-100 shadow-md bg-gray-400 p-2"
      >
        <div className="container mx-auto flex justify-between items-center">
          {/* Brand */}
          <div className="text-xl font-bold">
            <Link to="/">
              <img src="https://metasourcesolutions.com/wp-content/themes/ziston/images/logo-mobile.png"
                alt="Metasource Solutions" className="h-12 w-25 object-fill" />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "hover:underline text-lg font-bold text-red-500" : "hover:underline text-lg font-bold"
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "hover:underline text-lg font-bold text-red-500" : "hover:underline text-lg font-bold"
              }
            >
              About Us
            </NavLink>

            <NavLink
              to="/how-it-works"
              className={({ isActive }) =>
                isActive ? "hover:underline text-lg font-bold text-red-500" : "hover:underline text-lg font-bold"
              }
            >
              How It Works
            </NavLink>

            <NavLink
              to="/search"
              className={({ isActive }) =>
                isActive ? "hover:underline text-lg font-bold text-red-500" : "hover:underline text-lg font-bold"
              }
            >
              Listings
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "hover:underline text-lg font-bold text-red-500" : "hover:underline text-lg font-bold"
              }
            >
              Contact
            </NavLink>

          </div>

          {/* Add Listing Button */}
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            + ADD LISTINGS
          </button>
        </div>
      </div>
    </>
  )
}
