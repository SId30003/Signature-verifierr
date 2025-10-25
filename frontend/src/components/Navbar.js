import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="glass-strong border-b border-[#EDEDED]/10 fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-xl font-bold text-[#EDEDED] hover:text-[#EDEDED]/80 transition-all flex items-center"
          >
            <Image
              src="/Logo_For_ML.png"
              alt="Logo"
              width={32}
              height={32}
              className="mr-2 rounded-xl"
            />
            <div className="h-8 w-full flex items-center justify-center text-[#EDEDED] text-center">
              <span>Signature Auth</span>
            </div>
          </Link>
          <div className="flex gap-8">
            <Link
              href="/"
              className="text-[#EDEDED]/90 hover:text-[#EDEDED] transition-all font-medium relative group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#EDEDED] transition-all group-hover:w-full"></span>
            </Link>
            <Link
              href="/about"
              className="text-[#EDEDED]/90 hover:text-[#EDEDED] transition-all font-medium relative group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#EDEDED] transition-all group-hover:w-full"></span>
            </Link>
            <Link
              href="/team"
              className="text-[#EDEDED]/90 hover:text-[#EDEDED] transition-all font-medium relative group"
            >
              Team
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#EDEDED] transition-all group-hover:w-full"></span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
