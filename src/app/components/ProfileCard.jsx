"use client";
import { useSession } from 'next-auth/react'; // 1. Import the useSession hook
import Image from 'next/image';
import GlassCard from "./GlassCard"; // Assuming this is your custom card component

export default function ProfileCard() {
  // 2. Call the hook to get session data and status
  const { data: session, status } = useSession();

  // 3. Handle the loading state while session is being fetched
  if (status === "loading") {
    return (
      <GlassCard>
        <div className="flex justify-center items-center h-48">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      </GlassCard>
    );
  }

  // 4. Handle the case where the user is not logged in
  if (!session) {
    return (
      <GlassCard>
        <p className='text-white'>Please log in to view your profile.</p>
      </GlassCard>
    );
  }

  return (
    <GlassCard>
      <div className="flex flex-col items-center gap-4 p-4">
        {session.user.image && (
          <Image
            alt="User Profile Picture"
            src={session.user.image} // 5. Use the session object
            width={96} // Increased size for better visibility
            height={96}
            className="rounded-full ring-4 ring-primary ring-offset-base-100 ring-offset-2"
          />
        )}
        <h2 className="text-2xl font-bold text-base-content">
          {session.user.name} {/* 5. Use the session object */}
        </h2>
        <p className="text-base-content/70 text-center">
          {/* This bio is static. You could add this field to your user model later. */}
          🚀 Full Stack Developer | MERN | Next.js | Cloud & AI Enthusiast
        </p>
        <button className="btn btn-primary mt-4">Edit Profile</button>
      </div>
    </GlassCard>
  );
}
