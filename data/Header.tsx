import { ReactNode } from 'react';
import { FaFacebookF, FaInstagram, FaPinterestP, FaTwitter, FaYoutube } from 'react-icons/fa';

interface socialicons {
    social : ReactNode
}

export const Socialicons : socialicons[] = [
    {
      social :  <FaFacebookF />
    },
    {
        social :  <FaInstagram />
      },
      {
        social :  <FaYoutube />
      },
      {
        social :  <FaTwitter />
      },
      {
        social :  <FaPinterestP />
      },
]