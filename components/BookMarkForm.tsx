'use client';

import { useState } from 'react';
import { supabase } from '../lib/supabaseClient';

export default function BookmarkForm({ onBookmarkAdded }: { onBookmarkAdded: () => void }) {
  const [url, setUrl] = useState('');
  const [title, setTitle] = useState('');

  // const addBookmark = async () => {
    
  //   const { data: { user } } = await supabase.auth.getUser();
  //   if (!user) return;

  //   await supabase.from('bookmarks').insert([{ url, title, user_id: user.id }]);
  //   setUrl('');
  //   setTitle('');
  //   onBookmarkAdded();
  // };
  const addBookmark = async () => {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return;

  const { data, error } = await supabase
    .from('bookmarks')
    .insert([{ url, title, user_id: user.id }]);

  if (error) {
    console.error("Insert error:", error.message);
  } else {
    console.log("Inserted row:", data);
  }

  setUrl('');
  setTitle('');
  onBookmarkAdded();
};


  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        className="border p-2 mr-2"
      />
      <input
        type="text"
        placeholder="URL"
        value={url}
        onChange={e => setUrl(e.target.value)}
        className="border p-2 mr-2"
      />
      <button onClick={addBookmark} className="bg-green-500 text-white px-4 py-2 rounded">
        Add
      </button>
    </div>
  );
}
