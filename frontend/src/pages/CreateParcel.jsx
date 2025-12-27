import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';

function CreateParcel() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    senderName: '',
    senderAddress: '',
    receiverName: '',
    receiverAddress: '',
    weight: '',
    description: ''
  });
  const [price, setPrice] = useState(null);

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const calculatePrice = (weight) => {
    // Pricing strategy: Base ৳600 + ৳240 per kg + ৳60 per km (assuming average 100km)
    const basePrice = 600;
    const perKg = 240;
    const perKm = 60;
    const averageDistance = 100;
    return basePrice + (weight * perKg) + (averageDistance * perKm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const tentativePrice = calculatePrice(parseFloat(formData.weight));
    setPrice(tentativePrice);
    // In a real app, submit to backend
    alert(`Parcel submitted! Tentative price: ৳${tentativePrice.toFixed(2)}`);
  };

  if (!user) {
    return null; // Redirecting
  }

  return (
    <div className="min-h-screen">
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4 max-w-2xl">
          <motion.h1
            className="text-5xl font-bold text-center mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Create Parcel Order
          </motion.h1>
          <motion.form
            onSubmit={handleSubmit}
            className="card bg-base-100 shadow-xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="card-body">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Sender Name</span>
                  </label>
                  <input
                    type="text"
                    name="senderName"
                    className="input input-bordered"
                    value={formData.senderName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Receiver Name</span>
                  </label>
                  <input
                    type="text"
                    name="receiverName"
                    className="input input-bordered"
                    value={formData.receiverName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Sender Address</span>
                </label>
                <textarea
                  name="senderAddress"
                  className="textarea textarea-bordered"
                  value={formData.senderAddress}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Receiver Address</span>
                </label>
                <textarea
                  name="receiverAddress"
                  className="textarea textarea-bordered"
                  value={formData.receiverAddress}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Weight (kg)</span>
                  </label>
                  <input
                    type="number"
                    name="weight"
                    className="input input-bordered"
                    value={formData.weight}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Description</span>
                  </label>
                  <input
                    type="text"
                    name="description"
                    className="input input-bordered"
                    value={formData.description}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">Submit Parcel</button>
              </div>
              {price && (
                <div className="alert alert-success mt-4">
                  <span>Tentative Price: ৳{price.toFixed(2)}</span>
                </div>
              )}
            </div>
          </motion.form>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default CreateParcel;
