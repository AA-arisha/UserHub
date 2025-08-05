import { useUser } from "../hooks/useUser";
import { Toaster } from 'react-hot-toast';
import { Sidebar } from "./sidebar";
export const Dashboard = ()=>{
     const { user, loading, error } = useUser();
     return (
          <div className="min-h-screen flex items-center justify-center p-6">
               <Toaster position="top-right" reverseOrder={false} />
               <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-2xl">
                    <h2 className="text-3xl font-bold mb-6 text-center">👤 Admin Dashboard</h2>

                    {/* Logged-in User Info */}
                    {loading ? (
                         <p className="text-gray-600 text-center animate-pulse">Loading profile...</p>
                    ) : error ? (
                         <p className="text-red-600 text-center">{error}</p>
                    ) : user ? (
                         
                         <div className="mb-8 space-y-2 border p-4 rounded-lg bg-gray-50">
                              <Sidebar/>
                              <h3 className="text-xl font-semibold mb-2 text-gray-700">Logged-in User</h3>
                              <p><span className="font-medium">Name:</span> {user.Name}</p>
                              <p><span className="font-medium">Email:</span> {user.Email}</p>
                              <p><span className="font-medium">Role:</span> {user.roles || 'Admin'}</p>
                         </div>
                    ) : (
                         <p className="text-gray-600 text-center">No user data available</p>
                    )}
               </div>
          </div>
     )}
