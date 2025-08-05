import { useUser } from "../hooks/useUser"
import { Link } from "react-router-dom";
import { useLogoutUser } from "../hooks/useLogoutUser";
export const Sidebar = () =>{
    const {user} = useUser();
    console.log(user);
    const logoutMutation = useLogoutUser();
    
    return (
        <aside class="h-screen w-64 bg-gray-800 text-white fixed top-0 left-0 shadow-lg">
            <div class="p-6 text-center border-b border-gray-700">
                <h1 class="text-2xl font-bold">{user.roles} Panel</h1>
            </div>
            <nav className="p-4 space-y-2">
                <Link to="/dashboard" className="flex items-center p-2 rounded hover:bg-gray-700">
                    <span className="ml-2">Dashboard</span>
                </Link>
                {user.roles !== 'User' && (
                    <Link to="/Users" className="flex items-center p-2 rounded hover:bg-gray-700">
                        <span className="ml-2">Users</span>
                    </Link>)}
                
                
                <button
                    onClick={()=> logoutMutation.mutate()}
                    className="w-25 bg-blue-300 hover:bg-blue-400 text-white font-semibold p-2 rounded-lg transition"
                >Logout</button>
            </nav>
        </aside>

    )
}