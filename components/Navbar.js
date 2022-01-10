import Image from 'next/image';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-gray-100 bg-opacity-50 shadow-sm filter backdrop-blur-sm sticky top-0 left-0 right-0 z-40 after:h-[3px] after:bg-gradient-to-r after:bg-[length:300%_100%] from-[#ff0080] via-white to-[#0070f3] after:animate-bg-position after:block">
      <div className="max-w-[1360px] mx-auto p-4 flex items-center">
        <div className="flex items-center">
          <div className="flex justify-center items-center">
            <Image
              src="/images/mubashir-630x630.png"
              alt="Mubashir Hassan Profile"
              width="24"
              height="24"
            />
          </div>
          <Link href="/">
            <a className="ml-2 font-medium hover:text-ie-blue">mhm13.dev</a>
          </Link>
        </div>
        <div className="ml-auto flex">
          <Link href="https://github.com/mhm13dev">
            <a target="_blank" rel="noreferrer">
              <FaGithub
                className="w-6 h-6 text-gray-700 hover:text-ie-blue"
                title="github.com/mhm13dev"
              />
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
