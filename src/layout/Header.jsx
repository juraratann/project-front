import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const userNav = [
  { to: '/', text: 'Home' },
  { to: '/new', text: 'Pharmacy' },
];

export default function Header() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const hdlLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <form className="max-w-sm mx-auto">
      <div className="navbar bg-base-100">
        <div className="flex-1"></div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            {user && user.id && (
              <>
                {userNav.map(el => (
                  <li key={el.to}>
                    <Link to={el.to}>{el.text}</Link>
                  </li>
                ))}
                <li>
                  <Link to="#" onClick={hdlLogout}>
                    Logout
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </form>
  );
}