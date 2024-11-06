import UserCard from "@/components/UserCard";

const AdminPage = () => {
  return (
    <div className="p-4 flex flex-col md:flex-row gap-4">
      {/* left */}
      <div className="w-full lg:w-2/3">
        {/* user cards */}
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="student" />
          <UserCard type="teacher" />
          <UserCard type="parent" />
          <UserCard type="staff" />
        </div>
      </div>
      {/* right */}
      <div className="w-full lg:w-1/3">R</div>
    </div>
  );
};
export default AdminPage;
