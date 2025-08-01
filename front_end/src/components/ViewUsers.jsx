import { useUsers } from "../hooks/useUsers";
import { useUpdateStatus } from "../hooks/useUpdateStatus";
const UserTable = () => {

  const { users, isLoading,isError } = useUsers();
  console.log("users: " ,users);
  
  const { mutate: updateStatus} = useUpdateStatus();
   if (isLoading) return <div>Loading users...</div>;
   if (isError) return <div>Failed to load users.</div>;
   if (!users || users.length === 0) return <div>No users found.</div>;
    
  return (
    <div className="mt-10 overflow-x-auto rounded-lg border shadow-sm bg-white">
      <h3 className="text-xl font-semibold p-4 border-b text-gray-700">👥 Users List</h3>
      <table className="min-w-full divide-y divide-gray-200 text-sm">
        <thead className="bg-gray-100 text-left">
          <tr>
            <th className="px-6 py-3 font-medium text-gray-600">#</th>
            <th className="px-6 py-3 font-medium text-gray-600">Username</th>
            <th className="px-6 py-3 font-medium text-gray-600">Email</th>
            <th className="px-6 py-3 font-medium text-gray-600">Role</th>
            <th className="px-6 py-3 font-medium text-gray-600">Status</th>
            <th className="px-6 py-3 font-medium text-gray-600">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {users.length === 0 ? (
            <tr>
              <td colSpan="4" className="text-center text-gray-500 py-6">No users found</td>
            </tr>
          ) : (
            users.map((user, index) => (
              <tr key={user.Email} className="hover:bg-gray-50 transition">
                <td className="px-6 py-4 text-gray-700">{index + 1}</td>
                <td className="px-6 py-4 text-gray-800 font-medium">{user.Name}</td>
                <td className="px-6 py-4 text-gray-700">{user.Email}</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold
                    ${user.roles === 'Teacher' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'}`}>
                    {user.roles}
                  </span>
                </td>
                <td className="px-6 py-4 text-gray-700">
                    {user.isActive?`Active`:`Inactive`}
                </td>
                <td className="px-6 py-4">
                    <button
                     onClick={()=> updateStatus(user)}          
                    className={`w-25 
                        ${!user.isActive?`bg-blue-300 hover:bg-blue-400`:`bg-pink-300 hover:bg-pink-400` }  text-white font-semibold p-2 rounded-lg transition`}
                    >{!user.isActive?`Activate`:`Disable`} </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
