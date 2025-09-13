export default function Footer() {
  return (
    <footer className="bg-[#191A23] text-white px-6 py-8 lg:px-20 mt-20 mx-20 rounded-t-4xl">
      {/* Header with logo and navigation */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
        <div className="flex items-center mb-4 lg:mb-0">
          <div className="w-8 h-8 bg-green-300 rounded-full flex items-center justify-center">
            <span className="text-black font-bold text-lg">P</span>
          </div>
          <span className="ml-2 text-2xl font-bold">Positivus</span>
        </div>
        
        <nav className="flex flex-wrap gap-6 mb-4 lg:mb-0">
          <a href="#" className="hover:text-green-300">About us</a>
          <a href="#" className="hover:text-green-300">Services</a>
          <a href="#" className="hover:text-green-300">Use Cases</a>
          <a href="#" className="hover:text-green-300">Pricing</a>
          <a href="#" className="hover:text-green-300">Blog</a>
        </nav>
        
        <div className="flex gap-4">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <span className="text-black text-sm">in</span>
          </div>
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <span className="text-black text-sm">f</span>
          </div>
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <span className="text-black text-sm">@</span>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex flex-col lg:flex-row justify-between items-center gap-8 mb-8">
        <div>
          <div className="bg-[#B9FF66] text-black px-4 py-1 rounded mb-4 inline-block">
            <span className="font-semibold">Contact us</span>
          </div>
          <div className="space-y-2">
            <p>Email: info@positivus.com</p>
            <p>Phone: 555-567-8901</p>
            <p>
              Address: 1234 Main St
              <br />
              Moonstone City, Stardust State 12345
            </p>
          </div>
        </div>

        <div className="flex gap-2 bg-[#292A32] p-18 rounded-lg">
          <input
            type="email"
            placeholder="Email"
            className="bg-gray-700 text-white px-4 py-3 rounded flex-1 min-w-[200px]"
          />
          <button className="bg-[#B9FF66] text-black px-6 py-3 rounded font-semibold hover:bg-green-400">
            Subscribe to news
          </button>
        </div>
      </div>

      <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-400 mb-2 md:mb-0">
          © 2023 Positivus. All Rights Reserved.
        </p>
        <a href="#" className="text-gray-400 hover:text-white underline">
          Privacy Policy
        </a>
      </div>
    </footer>
  );
}