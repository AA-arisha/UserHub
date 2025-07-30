import { useFormik} from 'formik';
import * as Yup from 'yup';
import toast, {Toaster} from 'react-hot-toast';
import api from '../api/axiosConfig'
import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues:{
      Name: '',
      Email: '',
      Password: ''
    },

    validationSchema:Yup.object({
      Name: Yup.string().min(3).required("required"),
      Email: Yup.string().email("Invalid Email").required("required"),
      Password: Yup.string().min(5).required("required")
    
    }),

    onSubmit: async (values) =>{
      try{
        const res =  await api.post('/register' , values);
        toast.success(res.data.message);
        setTimeout(() => {
          navigate('/login')
        }, 1500);
      }catch(err){
        console.log(err);
        toast.error(err.response?.data?.message || 'Registration failed' );
      }
    }
  })

  return (
    <>
      <Toaster position='top-right' reverseOrder={false} />
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md text-gray-800">
        <h2 className="text-3xl font-bold text-center mb-6">Register</h2>
        <form className="space-y-5"  onSubmit={formik.handleSubmit}>
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              id='Name'
              type="text"
              required
              {...formik.getFieldProps('Name')}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300"
            />
            {formik.touched.Name && formik.errors.Name ? (
              <div>{formik.errors.Name}</div>
            ) : null}
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              id='Email'
              type="email"
              required
              {...formik.getFieldProps('Email')}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300"
            />
            {formik.touched.Email && formik.errors.Email ? (
              <div>{formik.errors.Email}</div>
            ) : null}
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              id='Password'
              type="password"
              required
              {...formik.getFieldProps('Password')}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300"
            />
            {formik.touched.Password && formik.errors.Password ? (
              <div>{formik.errors.Password}</div>
            ) : null}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-300 hover:bg-blue-400 text-white font-semibold py-2 rounded-lg transition"
          >
            Register
          </button>
        </form>
      </div>
    </>
  );
}

export default Register;
