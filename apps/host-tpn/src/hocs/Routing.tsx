import { Routes, Route } from 'react-router-dom';
import Landing from '../routes/Landing';
import Layout from './Layout';
import NeuronAnthropomorphic from '../routes/NeuroanatomieCelulara';

function Routing() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Landing />} />
        <Route
          path='neuroanatomie-celulara'
          element={<NeuronAnthropomorphic />}
        />
      </Route>
    </Routes>
  );
}

export default Routing;
