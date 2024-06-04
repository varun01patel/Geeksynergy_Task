import React, { useState } from 'react';
import Lottie from 'react-lottie';
import HomePage from './HomePage';
import backgroundImage from '../assets/background.jpg';
import animationData from '../assets/animation.json'; // Import your Lottie animation file

const LoginSignup = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [profession, setProfession] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isLogin) {
      const user = JSON.parse(localStorage.getItem('user'));

      if (user && user.name === name && user.password === password) {
        setIsLoggedIn(true);
      } else {
        alert('Invalid credentials');
      }
    } else {
      const user = { name, password, email, phone, profession };
      localStorage.setItem('user', JSON.stringify(user));
      alert('Registration successful!');
      setIsLogin(true);
    }
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div className="min-h-screen">
      {isLoggedIn ? (
        <HomePage />
      ) : (
        <div
          className="min-h-screen flex items-center justify-center bg-cover bg-center p-4"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="flex flex-col md:flex-row bg-white p-8 rounded-lg shadow-md max-w-4xl w-full">
            <div className="w-full md:w-1/2 flex items-center justify-center mb-4 md:mb-0">
              <Lottie options={defaultOptions} height={300} width={300} />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
                {isLogin ? 'Login' : 'Sign Up'}
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block font-bold mb-2 text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                {!isLogin && (
                  <>
                    <div className="mb-4">
                      <label htmlFor="email" className="block font-bold mb-2 text-gray-700">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="phone" className="block font-bold mb-2 text-gray-700">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="profession" className="block font-bold mb-2 text-gray-700">
                        Profession
                      </label>
                      <select
                        id="profession"
                        value={profession}
                        onChange={(e) => setProfession(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      >
                        <option value="">Select a profession</option>
                        <option value="developer">Developer</option>
                        <option value="designer">Designer</option>
                        <option value="manager">Manager</option>
                      </select>
                    </div>
                  </>
                )}
                <div className="mb-6">
                  <label htmlFor="password" className="block font-bold mb-2 text-gray-700">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
                >
                  {isLogin ? 'Login' : 'Sign Up'}
                </button>
              </form>
              <p className="mt-4 text-center text-gray-600">
                {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
                <button
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-blue-500 hover:underline"
                >
                  {isLogin ? 'Sign Up' : 'Login'}
                </button>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginSignup;
