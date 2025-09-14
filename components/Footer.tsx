export default function Footer() {
  return (
    <footer className="bg-[#191A23] text-white px-4 sm:px-6 py-8 lg:px-20 mt-20 mx-4 sm:mx-8 lg:mx-20 rounded-t-4xl">
      {/* Header with logo, navigation, and social icons */}
      <div className="flex flex-col space-y-6 lg:space-y-0 lg:flex-row lg:justify-between lg:items-center mb-8">
        {/* Logo */}
        <div className="flex items-center">
          <div className="w-8 h-8 bg-green-300 rounded-full flex items-center justify-center">
            <span className="text-black font-bold text-lg">P</span>
          </div>
          <span className="ml-2 text-2xl font-bold">Positivus</span>
        </div>
        
        {/* Navigation - stacked on mobile, horizontal on desktop */}
        <nav className="flex flex-col space-y-3 sm:flex-row sm:flex-wrap sm:space-y-0 sm:gap-4 lg:gap-6">
          <a href="#" className="hover:text-green-300 transition-colors">About us</a>
          <a href="#" className="hover:text-green-300 transition-colors">Services</a>
          <a href="#" className="hover:text-green-300 transition-colors">Use Cases</a>
          <a href="#" className="hover:text-green-300 transition-colors">Pricing</a>
          <a href="#" className="hover:text-green-300 transition-colors">Blog</a>
        </nav>
        
        {/* Social Icons */}
        <div className="flex gap-4">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
            <span className="text-black text-sm font-bold">in</span>
          </div>
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
            <span className="text-black text-sm font-bold">f</span>
          </div>
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
            <span className="text-black text-sm font-bold">@</span>
          </div>
        </div>
      </div>

      {/* Main content - Contact info and newsletter */}
      <div className="flex flex-col lg:flex-row lg:justify-between gap-8 mb-8">
        {/* Contact Section */}
        <div className="flex-1">
          <div className="bg-green-300 text-black px-4 py-2 rounded mb-6 inline-block">
            <span className="font-semibold text-sm">Contact us</span>
          </div>
          <div className="space-y-3">
            <p className="text-sm sm:text-base">Email: info@positivus.com</p>
            <p className="text-sm sm:text-base">Phone: 555-567-8901</p>
            <p className="text-sm sm:text-base">
              Address: 1234 Main St<br />
              Moonstone City, Stardust State 12345
            </p>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="flex-1 lg:max-w-md">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Email"
              className="flex-1 bg-gray-700 text-white px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-green-300 text-sm sm:text-base"
            />
            <button className="bg-green-300 text-black px-6 py-3 rounded font-semibold hover:bg-green-400 transition-colors whitespace-nowrap text-sm sm:text-base">
              Subscribe to news
            </button>
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="border-t border-gray-700 pt-6 flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:justify-between sm:items-center">
        <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
          © 2023 Positivus. All Rights Reserved.
        </p>
        <a href="#" className="text-gray-400 hover:text-white underline text-xs sm:text-sm text-center sm:text-right">
          Privacy Policy
        </a>
      </div>
    </footer>
  );
}