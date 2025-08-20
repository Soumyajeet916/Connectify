import Navbar from "../components/Navbar";
import ProfileCard from "../components/ProfileCard";

export default function ProfilePage() {
  return (
    <div className="">
      {/* Navbar */}
      <Navbar />

      {/* Profile Cards */}
      <div className="flex justify-center items-center mt-10 space-x-8">
        <ProfileCard />
      </div>
    </div>
  );
}
