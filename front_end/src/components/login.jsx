import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Toaster} from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { getToken } from '../utils/getToken';
import { useLoginMutation } from '../hooks/useLoginMutation';


function Login() {
  const loginMutation = useLoginMutation();
  const navigate = useNavigate();
  const token = getToken();
  const formik = useFormik({
    initialValues: {
      Email: '',
      Password: '',
    },

    validationSchema: Yup.object({
      Email: Yup.string().email('Invalid Email').required('Email is required'),
      Password: Yup.string().min(5, 'Password must be at least 5 characters').required('Password is required'),
    }),

    onSubmit: async (values) => {
      const credentials = {
        Email: values.Email.trim(),
        Password: values.Password.trim(),
      };

      loginMutation.mutate(credentials);
    },
  });

  //useEffect condition which will check if there is token available or not 
  // IF there is token then navigate it to home page.

  useEffect(() => {
    if (token){
      navigate('/dashboard')
    }
  }, [token, navigate]);     
return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md text-gray-800">
        <h2 className="text-3xl font-bold text-center mb-6">Login</h2>
        <form className="space-y-5" onSubmit={formik.handleSubmit}>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              id="Email"
              type="email"
              {...formik.getFieldProps('Email')}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300"
            />
            {formik.touched.Email && formik.errors.Email && (
              <div className="text-red-500 text-sm mt-1">{formik.errors.Email}</div>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              id="Password"
              type="password"
              {...formik.getFieldProps('Password')}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300"
            />
            {formik.touched.Password && formik.errors.Password && (
              <div className="text-red-500 text-sm mt-1">{formik.errors.Password}</div>
            )}
          </div>

          <button
            type="submit"
            disabled={!formik.isValid}
            className="w-full bg-pink-300 hover:bg-pink-400 text-white font-semibold py-2 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;
