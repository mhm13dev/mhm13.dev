import React from 'react';
import { Link } from 'react-router-dom';
import MubashirProfile from '../../assets/images/mubashir.png';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa';

const Home = () => {
  return (
    <div className="bg-primary text-white">
      <div className="min-h-screen grid items-center justify-center">
        <div>
          <div className="text-center">
            <img
              src={MubashirProfile}
              alt="Mubashir Hassan Profile"
              className="w-32 h-32 inline-block"
            />
          </div>
          <div className="text-center mt-4">
            <Link
              to="/"
              className="text-2xl font-semibold font-nunito inline-block"
            >
              Mubashir Hassan | mhm13.dev
            </Link>
          </div>
          <div className="text-center mt-4 flex gap-x-4 items-center justify-center">
            <a
              href="https://github.com/mhm13dev"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="w-6 h-6" />
            </a>
            <a
              href="https://twitter.com/mhm13dev"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter className="w-6 h-6" />
            </a>
            <a
              href="https://instagram.com/mhm13dev"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram className="w-6 h-6" />
            </a>
            <a
              href="https://facebook.com/mhm13dev"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/mhm13dev"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
