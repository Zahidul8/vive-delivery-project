import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import Logo from '../components/Logo';

function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  if (!user) {
    navigate('/login');
    return null;
  }

  return (
    <div className="min-h-screen">
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center items-center mb-8">
            <Logo className="w-16 h-16 mr-4" />
            <motion.h1
              className="text-5xl font-bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              Welcome to Your Dashboard, {user.name || user.email}
            </motion.h1>
          </div>
          <motion.p
            className="text-lg mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Manage your deliveries and account here.
          </motion.p>
          <button onClick={logout} className="btn btn-primary">Logout</button>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Dashboard;
