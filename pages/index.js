import Image from 'next/image';
import Link from 'next/link';
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
          <div className="text-center">
            <Image
              src="/images/mubashir-630x630.png"
              alt="Mubashir Hassan Profile"
              className="w-32 h-32 inline-block"
              width="200"
              height="200"
            />
          </div>
          <div className="text-center mt-4">
            <Link href="/">
              <a className="text-3xl font-semibold font-nunito inline-block text-primary">
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
                <FaGithub className="w-6 h-6 text-gray-700" />
              </a>
            </Link>
            <Link href="https://twitter.com/mhm13dev">
              <a target="_blank" rel="noreferrer">
                <FaTwitter className="w-6 h-6 text-gray-700" />
              </a>
            </Link>
            <Link href="https://instagram.com/mhm13dev">
              <a target="_blank" rel="noreferrer">
                <FaInstagram className="w-6 h-6 text-gray-700" />
              </a>
            </Link>
            <Link href="https://facebook.com/mhm13dev">
              <a target="_blank" rel="noreferrer">
                <FaFacebook className="w-6 h-6 text-gray-700" />
              </a>
            </Link>
            <Link href="https://www.linkedin.com/in/mhm13dev">
              <a target="_blank" rel="noreferrer">
                <FaLinkedin className="w-6 h-6 text-gray-700" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
