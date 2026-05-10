import { Link } from "react-router-dom"
function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="w-[90%] max-w-6xl mx-auto text-center sm:flex sm:justify-between sm:items-center">

        {/* Left */}
        <p className="text-sm">
          &copy; 2026 Your Company. All rights reserved.
        </p>

        {/* Right */}
        <ul className="flex flex-col sm:flex-row gap-2 sm:gap-6 mt-3 sm:mt-0">
          <li><Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link></li>
          <li><Link to="/terms-of-service" className="hover:underline">Terms of Service</Link></li>
          <li><Link to="/contact" className="hover:underline">Contact Us</Link></li>
        </ul>

      </div>
    </footer>
  )
}

export default Footer