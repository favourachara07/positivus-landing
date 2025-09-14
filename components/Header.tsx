import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 lg:px-20">
        <div className="flex items-center">
          <div className="w-8 h-8  flex items-center justify-center">
            <Image src="/post.svg" alt="Logo" width={32} height={32} />
          </div>
          <span className="ml-2 text-2xl font-bold">Positivus</span>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <Link href="#" className="text-gray-700 hover:text-black">
            About us
          </Link>
          <Link href="#" className="text-gray-700 hover:text-black">
            Services
          </Link>
          <Link href="#" className="text-gray-700 hover:text-black">
            Use Cases
          </Link>
          <Link href="#" className="text-gray-700 hover:text-black">
            Pricing
          </Link>
          <Link href="#" className="text-gray-700 hover:text-black">
            Blog
          </Link>
          <button className="bg-white border border-black px-6 py-2 rounded-lg hover:bg-black hover:text-white transition-colors">
            Request a quote
          </button>
        </nav>
      </header>
  );
}