import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Footer from '../components/Footer';
import { useAuth } from '../context/AuthContext';

function Home() {
  const { user } = useAuth();
  const testimonials = [
    { name: 'John Doe', company: 'TechCorp', image: 'https://randomuser.me/api/portraits/men/1.jpg', text: 'Amazing service! Delivered on time every time.' },
    { name: 'Jane Smith', company: 'LogiSolutions', image: 'https://randomuser.me/api/portraits/women/2.jpg', text: 'Reliable and fast. Highly recommend.' },
    { name: 'Bob Johnson', company: 'FastShip Inc.', image: 'https://randomuser.me/api/portraits/men/3.jpg', text: 'Best delivery company I\'ve used.' },
  ];

  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      title: 'Fast Delivery',
      text: 'Get your packages delivered quickly.'
    },
    {
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      title: 'Secure Shipping',
      text: 'Your parcels are safe with us.'
    },
    {
      image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      title: 'Global Reach',
      text: 'Ship worldwide effortlessly.'
    },
    {
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      title: 'Reliable Service',
      text: 'Trust us for on-time delivery.'
    },
    {
      image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      title: 'Eco-Friendly',
      text: 'Sustainable delivery options.'
    },
    {
      image: 'https://images.unsplash.com/photo-1586528116493-a0468a1c5a5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      title: 'Customer Focused',
      text: 'Your satisfaction is our priority.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Slider */}
      <section className="relative">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: true }}
          className="h-screen"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className="hero min-h-screen text-white relative"
                style={{ backgroundImage: `url(${slide.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
              >
                <div className="hero-overlay bg-black bg-opacity-50"></div>
                <div className="hero-content text-center relative z-10">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                  >
                    <h1 className="text-6xl font-bold">{slide.title}</h1>
                    <p className="py-6 text-xl">{slide.text}</p>
                    <button className="btn btn-primary btn-lg">Learn More</button>
                  </motion.div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Service Highlights */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Why Choose Us?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="card bg-gradient-to-br from-primary to-secondary text-white shadow-xl"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="card-body">
                <h3 className="card-title">Speed</h3>
                <p>Lightning-fast delivery within hours.</p>
              </div>
            </motion.div>
            <motion.div
              className="card bg-gradient-to-br from-accent to-info text-white shadow-xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="card-body">
                <h3 className="card-title">Reliability</h3>
                <p>99.9% on-time delivery guarantee.</p>
              </div>
            </motion.div>
            <motion.div
              className="card bg-gradient-to-br from-warning to-error text-white shadow-xl"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="card-body">
                <h3 className="card-title">Security</h3>
                <p>Advanced tracking and secure handling.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Unique Value */}
      <section className="py-20 bg-gradient-to-r from-base-200 to-base-300">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            className="text-4xl font-bold mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Our Unique Value
          </motion.h2>
          <motion.p
            className="text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We combine AI-powered logistics with personalized customer service to ensure every package is handled with care and delivered efficiently.
          </motion.p>
        </div>
      </section>

      {/* Competitor Comparison */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Why We're Better
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="card bg-success text-white shadow-xl"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="card-body">
                <h3 className="card-title">Us</h3>
                <ul className="list-disc list-inside">
                  <li>Real-time tracking</li>
                  <li>24/7 support</li>
                  <li>Competitive pricing</li>
                </ul>
              </div>
            </motion.div>
            <motion.div
              className="card bg-error text-white shadow-xl"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="card-body">
                <h3 className="card-title">Competitors</h3>
                <ul className="list-disc list-inside">
                  <li>Limited tracking</li>
                  <li>Delayed support</li>
                  <li>Higher costs</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-base-200">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            What Our Customers Say
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="card bg-base-100 shadow-xl"
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="card-body">
                  <div className="flex items-center mb-4">
                    <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                    <div>
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.company}</p>
                    </div>
                  </div>
                  <p>"{testimonial.text}"</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
