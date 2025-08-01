import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { useUser } from '../hooks/useUser';
import { useLogoutUser } from '../hooks/useLogoutUser';
import { useCreateUser } from '../hooks/usecreateUser';
import { Sidebar } from './sidebar';
const Profile = () => {
  const { user, loading, error } = useUser();
  const logoutMutation = useLogoutUser();
  const createUserMutation = useCreateUser();
  const formik = useFormik({
    initialValues: {
      Name: '',
      Email: '',
      Password: '',
      roles: '',
    },
    validationSchema: Yup.object({
      Name: Yup.string().required('Username is required'),
      Email: Yup.string().email('Invalid Email').required('Email is required'),
      Password: Yup.string().min(5, 'Min 5 characters').required('Password is required'),
      roles: Yup.string().required('Role is required'),
    }),
    onSubmit: async (values, { resetForm }) => {
      const payload = {
        ...values,
        creator: user?.Email || '',
      };
      createUserMutation.mutate(payload, {
        onSuccess: () =>{
          resetForm();
        } ,
      });
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      
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
            <button
            onClick={()=> logoutMutation.mutate()}
            className="w-25 bg-blue-300 hover:bg-blue-400 text-white font-semibold p-2 rounded-lg transition"
            >Logout</button>
            
            <Link
              to="/ViewUsers"
              className="w-full bg-blue-300 hover:bg-blue-400 text-white font-semibold p-2 rounded-lg m-3 transition"
            >
              View Created Users
            </Link>
          </div>
        ) : (
          <p className="text-gray-600 text-center">No user data available</p>
        )}

        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-700">➕ Create New User</h3>
          <form onSubmit={formik.handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Username</label>
              <input
                id="Name"
                {...formik.getFieldProps('Name')}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-300"
              />
              {formik.touched.Name && formik.errors.Name && (
                <div className="text-red-500 text-sm">{formik.errors.Name}</div>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                id="Email"
                type="email"
                {...formik.getFieldProps('Email')}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-300"
              />
              {formik.touched.Email && formik.errors.Email && (
                <div className="text-red-500 text-sm">{formik.errors.Email}</div>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Password</label>
              <input
                id="Password"
                type="password"
                {...formik.getFieldProps('Password')}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-300"
              />
              {formik.touched.Password && formik.errors.Password && (
                <div className="text-red-500 text-sm">{formik.errors.Password}</div>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Role</label>
              <select
                id="roles"
                {...formik.getFieldProps('roles')}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-300"
              >
                <option value="">Select Role</option>
                <option value="Student">Student</option>
                <option value="Teacher">Teacher</option>
              </select>
              {formik.touched.roles && formik.errors.roles && (
                <div className="text-red-500 text-sm">{formik.errors.roles}</div>
              )}
            </div>

            <button
              type="submit"
              disabled={!(formik.isValid && formik.dirty)}
              className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 rounded-lg transition disabled:opacity-50"
            >
              Create User
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
