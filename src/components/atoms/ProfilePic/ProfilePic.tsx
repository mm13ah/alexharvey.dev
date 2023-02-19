import Image from 'next/image';
import React from 'react';
import Pic from '../../../../public/profile.png';

export const ProfilePic = () => (
  <Image
    alt="me"
    src={Pic}
    width={200}
    height={200}
    className="rounded-full my-3"
  />
);
