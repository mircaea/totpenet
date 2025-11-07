import { useAppContext } from 'store';
import reactLogo from '../assets/react.svg';
import { Link, Typography } from '@mui/material';

function Landing() {
  const { currentUser } = useAppContext();

  return (
    <>
      <p>
        Landing page [route in host-tpn].{' '}
        {currentUser && `User string: ${currentUser}`}
      </p>
      <Link href='/' rel='noreferrer'>
        <img src={reactLogo} className='logo react' alt='React logo' />
      </Link>
      <br />
      {currentUser ? (
        <Link href='/neuroanatomie-celulara' rel='noreferrer'>
          Go to NeuroAnatomie Celuara
        </Link>
      ) : (
        <Typography>
          Sign in to access the NeuronAnthropomorphic section :)
        </Typography>
      )}
    </>
  );
}

export default Landing;
