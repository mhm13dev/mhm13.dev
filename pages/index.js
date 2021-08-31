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

export default function Home() {
  return (
    <div className="bg-gray-100">
      <div className="min-h-screen grid items-center justify-center">
        <div className="max-w-lg px-2">
          <div className="flex justify-center">
            <div className="rounded-full ring-8 ring-ie-blue overflow-hidden flex items-center">
              <Image
                src="/images/mubashir-630x630.png"
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
              I am a MERN Stack Web Developer. I craft beautiful websites using
              ReactJS, NextJS on the Frontend and NodeJS, Express, MongoDB on
              the backend!
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
