import { useState, type FormEvent, type ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../graphQL/mutations/register_login';

import Auth from '../utils/auth';

const Login = () => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event: FormEvent) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    setFormState({
      email: '',
      password: '',
    });
  };

  return (
    <main className="flex-row justify-center items-center min-h-screen mb-4 p-4">
    <div className="col-12 col-lg-10 flex justify-center">
      <div className="card w-full max-w-md">
        <h4 className="card-header text-center text-xl font-semibold p-2">
          Login
        </h4>
        <div className="card-body text-center col-auto content-center p-4">
          {data ? (
            <p>
              Success! You may now head{' '}
              <Link to="/" className="text-blue-500 hover:underline">back to the homepage.</Link>
            </p>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <input
                className="form-input w-full p-2 border border-gray-300 rounded-md mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Your email"
                name="email"
                type="email"
                value={formState.email}
                onChange={handleChange}
              />
              <input
                className="form-input w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="******"
                name="password"
                type="password"
                value={formState.password}
                onChange={handleChange}
              />
              <button
                className="btn btn-block btn-primary w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
                style={{ cursor: 'pointer' }}
                type="submit"
              >
                Submit
              </button>
            </form>
          )}

          {error && (
            <div className="my-3 p-3 bg-red-500 text-white rounded-md">
              {error.message}
            </div>
          )}
        </div>
      </div>
    </div>
  </main>
  );
};

export default Login;
