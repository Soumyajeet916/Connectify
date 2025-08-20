"use client";
import { useState } from 'react';
import Image from 'next/image';
import { signIn } from 'next-auth/react';
import Dashboard from '@/app/dashboard/page';

export default function LoginPage() {
  const [message, setMessage] = useState('');

  const handleGoogleLogin = async () => {
    try {
      await signIn('google', { callbackUrl: '/dashboard' });
    } catch (error) {
      setMessage('Authentication failed: ' + error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-400 to-purple-500 p-8">
      <div className="w-full max-w-md backdrop-blur-lg bg-white/30 rounded-2xl shadow-xl p-8">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-3">
            <Image
              src="/images/applogo.png"
              alt="Connectly Logo"
              width={30}
              height={30}
              className="rounded-full"
            />
            <h1 className="text-4xl font-extrabold text-white tracking-tight">
              Connectify
            </h1>
          </div>
          <p className="mt-2 text-white/70">Sign in to your account</p>
        </div>

        <button
          onClick={handleGoogleLogin}
          className="mt-8 w-full flex justify-center items-center py-3 px-4 border border-white/50 rounded-xl shadow-sm text-sm font-bold text-white bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-all"
        >
          Continue with Google
        </button>

        {message && (
          <div className="mt-6 p-4 rounded-xl bg-white/20 backdrop-blur-sm text-white text-sm border border-white/20">
            {message}
          </div>
        )}
      </div>
    </div>
  );
}

