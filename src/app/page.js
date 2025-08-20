"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Login from "./(auth)/login/page";

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "authenticated") {
    router.push("/dashboard");
    return null;
  }

  return (
    <main className="min-h-screen">
      <Login />
    </main>
  );
}
