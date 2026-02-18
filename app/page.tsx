import { AuthButton } from '../components/AuthButton';

export default function Home() {
  return (
    <div className="text-center mt-10">
      <h2 className="text-2xl font-semibold">
        Welcome to Smart Bookmark App
      </h2>
      <p className="mt-4">Login with Google to manage your bookmarks.</p>
      <div className="mt-6 flex justify-center">
        <AuthButton />  
      </div>
    </div>
  );
}
