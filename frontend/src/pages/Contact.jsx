import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import Logo from '../components/Logo';

function Contact() {
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
              Contact Us
            </motion.h1>
          </div>
          <motion.div
            className="max-w-md mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="mb-4">Email: info@vivedelivery.com</p>
            <p className="mb-4">Phone: +1 234 567 890</p>
            <p>Address: 123 Delivery St, City, Country</p>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Contact;
