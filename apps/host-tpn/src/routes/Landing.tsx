import React from 'react';

import reactLogo from '../assets/react.svg';
import { useStore } from 'store';
import { Link, Stack } from '@mui/material';

function Landing() {
  const { user } = useStore();

  return (
    <>
      <p>Landing page [route in host-tpn]. {user && `User string: ${user}`}</p>
      <Link href='https://reactjs.org' target='_blank' rel='noreferrer'>
        <img src={reactLogo} className='logo react' alt='React logo' />
      </Link>
      <br />
      <Link href='/neuroanatomie-celulara' target='_blank' rel='noreferrer'>
        Go to NeuroAnatomie Celuara
      </Link>
    </>
  );
}

export default Landing;
