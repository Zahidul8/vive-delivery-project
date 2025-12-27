import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import Logo from '../components/Logo';

function About() {
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
              About Vive Delivery
            </motion.h1>
          </div>
          <motion.p
            className="text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We are a leading delivery service company committed to providing fast, reliable, and secure parcel delivery worldwide.
          </motion.p>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default About;
