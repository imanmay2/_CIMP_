import React, { useState, useEffect } from 'react';
import '../css/Auth.css';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [message, setMessage] = useState({ text: '', type: '' });

    const [isLogin, setIsLogin] = useState(true);
    const [name, setName] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    useEffect(() => {
        if (message.text) {
            const timer = setTimeout(() => {
                setMessage({ text: '', type: '' });
            }, 4000);
            return () => clearTimeout(timer);
        }
    }, [message]);

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: Complete this logic
        if (true) {

        } else {

            if (!name || !email || !password || !confirmPassword) {
                showMessage('Please fill all fields', 'error');
                return;
            }

            if (password !== confirmPassword) {
                showMessage('Passwords do not match', 'error');
                return;
            }


            setTimeout(() => {
                showMessage('Account created successfully!', 'success');

                setTimeout(() => setIsLogin(true), 2000);
            }, 1000);
        }
    };

    const showMessage = (text, type) => {
        setMessage({ text, type });
    };

    return (
        <div className="login-container">
            {/* Toggle for authentication */}
            <div className="auth-toggle">
                <button
                    className={isLogin ? 'active' : ''}
                    onClick={() => setIsLogin(true)}
                >
                    Login
                </button>
                <button
                    className={!isLogin ? 'active' : ''}
                    onClick={() => setIsLogin(false)}
                >
                    Sign Up
                </button>
            </div>

            {/* Message Notification */}
            {message.text && (
                <div className={`message-box ${message.type}`}>
                    <svg viewBox="0 0 20 20" fill="currentColor">
                        {message.type === 'error' ? (
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        ) : (
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        )}
                    </svg>
                    <span>{message.text}</span>
                </div>
            )}

            {/* Login Card */}
            <div className="login-card">
                <div className="login-header">
                    <div className="logo">
                        <svg viewBox="0 0 60 60" fill="none">
                            <circle cx="30" cy="30" r="30" fill="url(#logo-gradient)" />
                            <path d="M30 15L40 25H35V35H40L30 45L20 35H25V25H20L30 15Z" fill="white" />
                            <defs>
                                <linearGradient id="logo-gradient" x1="0" y1="0" x2="60" y2="60">
                                    <stop stopColor="#6366F1" />
                                    <stop offset="1" stopColor="#A855F7" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <h1>Welcome to CIMP</h1>
                    <p>Sign in to access your dashboard</p>
                </div>

                {!isLogin && (
                    <>
                        <div className="form-group">
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder=" "
                                className="peer"
                            />
                            <label htmlFor="name">Full Name</label>
                        </div>
                    </>
                )}

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder=" "
                            className="peer"
                        />
                        <label htmlFor="email">Email Address</label>
                    </div>

                    <div className="form-group">
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder=" "
                            className="peer"
                        />
                        <label htmlFor="password">Password</label>
                    </div>

                    {!isLogin && (
                        <div className="form-group">
                            <input
                                type="password"
                                id="confirmPassword"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                placeholder=" "
                                className="peer"
                            />
                            <label htmlFor="confirmPassword">Confirm Password</label>
                        </div>
                    )}

                    {isLogin && <div className="form-options">
                        <div className="remember-me">
                            <input
                                type="checkbox"
                                id="remember-me"
                                checked={rememberMe}
                                onChange={(e) => setRememberMe(e.target.checked)}
                            />
                            <label htmlFor="remember-me">Remember me</label>
                        </div>
                        <button
                            type="button"
                            className="forgot-password"
                            onClick={() => showMessage('Password reset link will be sent to your email.', 'info')}
                        >
                            Forgot password?
                        </button>
                    </div>}

                    <button type="submit" className="login-button">
                        Sign {isLogin ? "In" : "Up"}
                    </button>

                    <div className="signup-link">
                        {isLogin ? (
                            <>Don't have an account? <button onClick={() => setIsLogin(false)}>Sign up</button></>
                        ) : (
                            <>Already have an account? <button onClick={() => setIsLogin(true)}>Login</button></>
                        )}
                    </div>
                </form>
            </div>


        </div>
    );
};

export default LoginPage;