'use client';

import { supabase } from '../lib/supabaseClient';

export function AuthButton() {
  const handleLogin = async () => {
    await supabase.auth.signInWithOAuth({ provider: 'google',
      options :{
        redirectTo: "http://localhost:3000/bookmarks",
      }
     });
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.href = "/";
  };

  return (
    <div>
      <button
        onClick={handleLogin}
        className="bg-blue-500 text-black px-4 py-2 rounded mr-2"
      >
        Login with Google
      </button>
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-4 py-2 rounded"
      >
        Logout
      </button>
    </div>
  );
}
