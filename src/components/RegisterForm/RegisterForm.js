import { useDispatch } from 'react-redux';
import { register } from '../redux/operations';
import './RegisterForm.css'
export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className="form" onSubmit={handleSubmit} autoComplete="off">
      <label className="label">
        Username
      </label>
      <input type="text" name="name" />
      <label className="label">
        Email
      </label>
      <input type="email" name="email" />
      <label className="label">
        Password
      </label>
      <input type="password" name="password" />
      
      <button type="submit" className="button-submit" >Register</button>
    </form>
  );
};


export default RegisterForm;
