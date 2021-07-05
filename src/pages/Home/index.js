import React from 'react';
import { Link } from 'react-router-dom';
import MubashirProfile from '../../assets/images/mubashir.png';

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
              className="text-3xl font-bold font-nunito inline-block"
            >
              mhm13.dev
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
