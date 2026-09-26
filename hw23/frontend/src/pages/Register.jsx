import { register } from '../store/authSlice';
import AuthForm from './AuthForm';

function Register() {
  return (
    <AuthForm
      title="Register"
      action={register}
      submitText="Зарегистрироваться"
      linkTo="/login"
      linkText="Уже есть аккаунт? Войти"
    />
  );
}

export default Register;
