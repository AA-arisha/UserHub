import { useUser } from "../hooks/useUser"
import { Link } from "react-router-dom";
export const Sidebar = () =>{
    const {user} = useUser();
    console.log(user);
    
    return (
        <aside class="h-screen w-64 bg-gray-800 text-white fixed top-0 left-0 shadow-lg">
            <div class="p-6 text-center border-b border-gray-700">
                <h1 class="text-2xl font-bold">{user.roles} Panel</h1>
            </div>
            <nav className="p-4 space-y-2">
                <Link to="/dashboard" className="flex items-center p-2 rounded hover:bg-gray-700">
                    <span className="ml-2">Dashboard</span>
                </Link>
                <Link to="/users" className="flex items-center p-2 rounded hover:bg-gray-700">
                    <span className="ml-2">Users</span>
                </Link>
                <Link to="/roles" className="flex items-center p-2 rounded hover:bg-gray-700">
                    <span className="ml-2">Roles</span>
                </Link>
                <Link to="/permissions" className="flex items-center p-2 rounded hover:bg-gray-700">
                    <span className="ml-2">Permissions</span>
                </Link>
                <Link to="/profile" className="flex items-center p-2 rounded hover:bg-gray-700">
                    <span className="ml-2">Profile</span>
                </Link>
                <Link to="/logout" className="flex items-center p-2 rounded hover:bg-gray-700">
                    <span className="ml-2">Logout</span>
                </Link>
            </nav>
        </aside>

    )
}