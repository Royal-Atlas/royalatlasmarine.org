import Link from "next/link"
import { Anchor, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-blue-600 rounded-lg">
                <Anchor className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="font-bold text-lg">Royal Atlas Marine</div>
                <div className="text-sm text-blue-400"></div>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              Your Trusted Maritime Solutions Provider with global presence and operational excellence.
            </p>
            <p className="text-blue-400 text-sm font-medium">"Smoothly Sailing Towards Customer Excellence"</p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Useful Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-blue-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/freight-forwarding"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Freight Forwarding
                </Link>
              </li>
              <li>
                <Link
                  href="/services/customs-clearance"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Customs Clearance
                </Link>
              </li>
              <li>
                <Link
                  href="/services/container-shipping"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Container Shipping
                </Link>
              </li>
              <li>
                <Link href="/services/warehousing" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Warehousing & Distribution
                </Link>
              </li>
              <li>
                <Link href="/services/ship-agency" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Ship Agency
                </Link>
              </li>
              <li>
                <Link href="/services/marine-surveying" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Marine Surveying
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  <div className="font-medium text-white">Sharjah, UAE (Main Office)</div>
                  Royal Atlas marine LLC SHJ -Branch
                  <br />
                  Al Nayeli 16
                  <br />
                  89CQ+3F9 , Al Wahda st Al Darari
                  <br />
                  Commercial: Industrial area
                  <br />
                  Sharjah UAE
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <div className="text-sm text-gray-300">
                  <div>+971 545498293</div>
                  <div>+971 585637900</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Royal Atlas Marine. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
