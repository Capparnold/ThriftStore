import React from 'react'

function Footer() {
  return (
       <footer className="bg-gray-900 text-gray-300 py-10 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">

        <div>
          <h2 className="text-xl font-semibold text-white mb-3">  ThriftStore</h2>
          <p className="text-sm">
            Your one-stop shop for the best deals on top products. Fast shipping, secure payments, and excellent support.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">Products</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li>Email: support@thriftstore.com</li>
            <li>Phone: +254 700 123 456</li>
            <li>Location: Nairobi, Kenya</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} ThriftStore. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer