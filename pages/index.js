import Image from 'next/image';
import Link from 'next/link';
import { ReactComponent as IE } from '../public/images/influearners-circle.svg';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa';
import BlurBG from '../components/BlurBG';

export default function Home() {
  return (
    <div className="bg-white overflow-hidden relative">
      <BlurBG
        bg="bg-[#0070f3]"
        width="w-[600px]"
        height="h-[600px]"
        blur="blur-3xl"
        opacity="opacity-10"
        left="-left-[200px]"
        top="-top-[200px]"
      />
      <div className="min-h-screen grid items-center justify-center">
        <div className="max-w-lg px-2 relative">
          <BlurBG
            bg="bg-[#ff0080]"
            width="w-[800px]"
            height="h-[800px]"
            blur="blur-3xl"
            opacity="opacity-10"
            left="-left-[100px]"
            top="-top-[100px]"
          />
          <div className="flex justify-center">
            <Image
              src="/images/mubashir-630x630.png"
              alt="Mubashir Hassan Profile"
              className="w-32 h-32"
              width="200"
              height="200"
            />
          </div>
          <div className="text-center mt-4">
            <Link href="/">
              <a className="text-3xl font-semibold font-nunito inline-block text-ie-blue">
                Mubashir Hassan | mhm13.dev
              </a>
            </Link>
            <p className="mt-4">
              I am a MERN Stack Web Developer. I craft beautiful websites using
              ReactJS, NextJS on the Frontend and NodeJS, Express, MongoDB on
              the backend!
            </p>
            <p className="mt-2">
              I also work with Git, GitHub, Docker, VPS Servers, Nginx and other
              tools to manage and deploy code to production.
            </p>
          </div>
          <div className="text-center mt-4 flex gap-x-4 items-center justify-center">
            <Link href="https://github.com/mhm13dev">
              <a target="_blank" rel="noreferrer">
                <FaGithub
                  className="w-6 h-6 text-gray-700 hover:text-ie-blue"
                  title="github.com/mhm13dev"
                />
              </a>
            </Link>
            <Link href="https://twitter.com/mhm13dev">
              <a target="_blank" rel="noreferrer" title="twitter.com/mhm13dev">
                <FaTwitter className="w-6 h-6 text-gray-700 hover:text-ie-blue" />
              </a>
            </Link>
            <Link href="https://instagram.com/mhm13dev">
              <a
                target="_blank"
                rel="noreferrer"
                title="instagram.com/mhm13dev"
              >
                <FaInstagram className="w-6 h-6 text-gray-700 hover:text-ie-blue" />
              </a>
            </Link>
            <Link href="https://facebook.com/mhm13dev">
              <a target="_blank" rel="noreferrer" title="facebook.com/mhm13dev">
                <FaFacebook className="w-6 h-6 text-gray-700 hover:text-ie-blue" />
              </a>
            </Link>
            <Link href="https://www.linkedin.com/in/mhm13dev">
              <a
                target="_blank"
                rel="noreferrer"
                title="linkedin.com/in/mhm13dev"
              >
                <FaLinkedin className="w-6 h-6 text-gray-700 hover:text-ie-blue" />
              </a>
            </Link>
            <Link href="https://influearners.com">
              <a target="_blank" rel="noreferrer" title="InfluEarners.com">
                <IE className="w-6 h-6 text-gray-700 hover:text-ie-blue" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
