'use client';

import { supabase } from '../lib/supabaseClient';
import React, { JSX } from 'react'; 


interface Bookmark {
  id: string;          
  title: string;
  url: string;
  user_id: string;
  created_at: string;  
}

interface BookmarkListProps {
  bookmarks: Bookmark[];
  onDelete: () => void;
}


export default function BookmarkList({ bookmarks, onDelete }: BookmarkListProps): JSX.Element {
  const deleteBookmark = async (id: string) => {
    const { error } = await supabase.from('bookmarks').delete().eq('id', id);
    if (error) {
      console.error("Delete error:", error.message);
    } else {
      onDelete();
    }
  };

  return (
    <div className="card  p-4  rounded-2xl  ">
      <ul>
      {bookmarks.map(b => (
        <li key={b.id} className="flex justify-between items-center border-b py-2">
          {/* <a href={b.url} target="_blank" rel="noopener noreferrer" className="text-blue-600">
            {b.title}
          </a> */}
          <span className="text-gray-500 ml-2">{b.title}</span>
              <a href={b.url} target="_blank" rel="noopener noreferrer" className="text-blue-600">
            {b.url}
          </a>
          <button
            onClick={() => deleteBookmark(b.id)}
            className="bg-red-500 text-white px-2 py-1 rounded"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
    </div>
  );
}
