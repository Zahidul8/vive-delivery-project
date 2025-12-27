import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import Logo from '../components/Logo';

function Services() {
  return (
    <div className="min-h-screen">
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center mb-12">
            <Logo className="w-16 h-16 mr-4" />
            <motion.h1
              className="text-5xl font-bold text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              Our Services
            </motion.h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="card bg-base-100 shadow-xl"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="card-body">
                <h3 className="card-title">Express Delivery</h3>
                <p>Fast delivery within hours for urgent packages.</p>
              </div>
            </motion.div>
            <motion.div
              className="card bg-base-100 shadow-xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="card-body">
                <h3 className="card-title">Standard Shipping</h3>
                <p>Reliable shipping for everyday deliveries.</p>
              </div>
            </motion.div>
            <motion.div
              className="card bg-base-100 shadow-xl"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="card-body">
                <h3 className="card-title">International</h3>
                <p>Global shipping to any destination.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Services;
