import Image from 'next/image';
import Link from 'next/link';
import BlurBG from '../components/BlurBG';
import Navbar from '../components/Navbar';
import SocialLinks from '../components/SocialLinks';

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="overflow-hidden relative">
        <BlurBG
          bg="bg-[#0070f3]"
          width="w-[600px]"
          height="h-[600px]"
          blur="blur-3xl"
          opacity="opacity-10"
          left="-left-[200px]"
          top="-top-[200px]"
          className="-z-50"
        />
        <div className="min-h-screen grid items-center justify-center max-w-[1360px] mx-auto">
          <div className="max-w-lg px-2 relative">
            <BlurBG
              bg="bg-[#ff0080]"
              width="w-[800px]"
              height="h-[800px]"
              blur="blur-3xl"
              opacity="opacity-10"
              left="-left-[100px]"
              top="-top-[100px]"
              className="-z-50"
            />
            <div className="flex justify-center">
              <div className="flex justify-center bg-white rounded-full relative after:w-full after:h-full after:-z-50 after:rounded-full after:bg-[length:300%_100%] after:transform after:scale-105 after:bg-gradient-to-r after:from-[#ff0080] after:via-white after:to-[#0070f3] after:animate-bg-position after:absolute after:block after:bg-red-300">
                <Image
                  src="/images/mubashir-630x630-no-border.png"
                  alt="Mubashir Hassan Profile"
                  className="w-32 h-32"
                  width="200"
                  height="200"
                />
              </div>
            </div>
            <div className="text-center mt-4">
              <Link href="/">
                <a className="text-3xl font-semibold font-nunito inline-block text-ie-blue">
                  Mubashir Hassan | mhm13.dev
                </a>
              </Link>
              <p className="mt-4">
                I am a MERN Stack Web Developer. I craft beautiful websites
                using ReactJS, NextJS on the Frontend and NodeJS, Express,
                MongoDB on the backend!
              </p>
              <p className="mt-2">
                I also work with Git, GitHub, Docker, VPS Servers, Nginx and
                other tools to manage and deploy code to production.
              </p>
            </div>
            <SocialLinks className="mt-4" />
          </div>
        </div>
      </div>
    </div>
  );
}
