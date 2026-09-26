import { login } from '../store/authSlice';
import AuthForm from './AuthForm';

function Login() {
  return (
    <AuthForm
      title="Login"
      action={login}
      submitText="Войти"
      linkTo="/register"
      linkText="Нет аккаунта? Зарегистрироваться"
    />
  );
}

export default Login;
