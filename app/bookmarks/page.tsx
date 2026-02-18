'use client';

import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabaseClient';
import BookmarkForm from '@/components/BookMarkForm';
import BookmarkList from '@/components/BookMarkList';

interface Bookmark {
  id: string;          
  title: string;
  url: string;
  user_id: string;
  created_at: string;  
}

export default function BookmarksPage() {
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);

  // define fetchbookmarks
  const fetchBookmarks = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      window.location.href = '/';
      return;
    }

    const { data, error } = await supabase
      .from('bookmarks')
      .select('*')
      .eq('user_id', user.id) 
      .order('created_at', { ascending: false }); 

    if (error) {
      console.error("Fetch error:", error.message);
    } else {
      setBookmarks(data || []);
    }
  };

  useEffect(() => {
  const loadBookmarks = async () => {
    await fetchBookmarks(); 
  };

  loadBookmarks();

  const channel = supabase
    .channel('bookmarks')
    .on('postgres_changes', { event: '*', schema: 'public', table: 'bookmarks' }, () => {
      loadBookmarks(); 
    })
    .subscribe();

  return () => {
    supabase.removeChannel(channel);
  };
}, []);
 const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.href = "/";
  };

  return (
   <>
   <button onClick={handleLogout} className='bg-red-400 rounded-2xl underline text-white px-4'>Logout</button>
     <div className='text-center mt-5'>
      <h2 className="text-2xl font-bold mb-4">Your Bookmarks</h2>
      
      <BookmarkForm onBookmarkAdded={fetchBookmarks} />
   
      <BookmarkList bookmarks={bookmarks} onDelete={fetchBookmarks} />
    </div>
   </>
  );
}
