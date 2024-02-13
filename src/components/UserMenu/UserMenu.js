import { useDispatch } from 'react-redux';
import { logOut } from '../redux/operations';
import { useAuth } from 'components/hooks/hooks';
import './UserMenu.css'

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className="wrapper">
      <p className="username">Welcome, {user.name}</p>
      <button type="button" className="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
