import Link from 'next/link';
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa';

const SocialLinks = ({ className = '' }) => {
  return (
    <div
      className={`text-center flex gap-x-4 items-center justify-center ${className}`}
    >
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
        <a target="_blank" rel="noreferrer" title="instagram.com/mhm13dev">
          <FaInstagram className="w-6 h-6 text-gray-700 hover:text-ie-blue" />
        </a>
      </Link>
      <Link href="https://facebook.com/mhm13dev">
        <a target="_blank" rel="noreferrer" title="facebook.com/mhm13dev">
          <FaFacebook className="w-6 h-6 text-gray-700 hover:text-ie-blue" />
        </a>
      </Link>
      <Link href="https://www.linkedin.com/in/mhm13dev">
        <a target="_blank" rel="noreferrer" title="linkedin.com/in/mhm13dev">
          <FaLinkedin className="w-6 h-6 text-gray-700 hover:text-ie-blue" />
        </a>
      </Link>
    </div>
  );
};

export default SocialLinks;
