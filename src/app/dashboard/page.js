'use client';
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Layout from "../components/Layout"; // Ensure the path is correct
import Content from "../components/content"; // Import your content or components
export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'unauthenticated') {
    router.push('/');
    return null;
  }

  return (
    <Layout>
      <div className="space-y-4">
        <Content />
      </div>
    </Layout>
  );
}