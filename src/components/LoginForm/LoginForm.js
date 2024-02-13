import { useDispatch } from 'react-redux';
import { logIn } from '../redux/operations';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className="form" onSubmit={handleSubmit} autoComplete="off">
      <label className="label">
        Email
      </label>
      <input type="email" name="email" />
      <label className="label">
        Password
      </label>
      <input type="password" name="password" />

      <button type="submit" className="button-submit">Log In</button>
    </form>
  );
};

export default LoginForm;
