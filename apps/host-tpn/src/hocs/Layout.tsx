import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div style={{ padding: '10px' }}>
      {/* <p>todo: header</p> */}
      <Outlet />
      {/* <p>todo: footer</p> */}
    </div>
  );
}

export default Layout;
