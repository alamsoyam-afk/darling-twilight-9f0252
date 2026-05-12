import { motion } from "framer-motion";
import { useState } from "react";

export default function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const services = [
    "Extensions",
    "Kitchen Installation",
    "Bathroom Remodeling",
    "Property Renovation",
    "Flooring Specialist",
    "Plumbing Services",
    "Garden Services",
    "Painting & Decorating",
    "General Repairs",
    "Handyman Services",
    "Electrical Services"
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Quote request submitted:', formData);
    alert('Thank you for your quote request! We will contact you within 24 hours.');
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-accent to-primary text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Get Your Free Quote</h1>
          <p className="text-xl opacity-90">Professional consultation at no cost</p>
        </motion.div>
      </section>

      {/* Info Cards */}
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <div className="text-5xl mb-4">⏱️</div>
              <h3 className="text-xl font-semibold mb-2">Quick Response</h3>
              <p className="text-neutral">We'll contact you within 24 hours with your free quote.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <div className="text-5xl mb-4">✅</div>
              <h3 className="text-xl font-semibold mb-2">No Obligation</h3>
              <p className="text-neutral">Our quote is completely free and comes with no strings attached.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-xl font-semibold mb-2">Transparent Pricing</h3>
              <p className="text-neutral">Detailed quotes with no hidden costs or surprises.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="max-w-3xl mx-auto"
          >
            <div className="mb-8">
              <h2 className="text-4xl font-bold text-center mb-3">Tell Us About Your Project</h2>
              <p className="text-lg text-neutral text-center">
                Share your project details and our expert team will provide a comprehensive, no-obligation quote.
              </p>
            </div>

            <div className="bg-gradient-to-br from-secondary to-gray-50 p-8 md:p-12 rounded-lg shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <label htmlFor="name" className="block text-sm font-semibold text-primary mb-3">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition duration-300"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <label htmlFor="email" className="block text-sm font-semibold text-primary mb-3">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition duration-300"
                    />
                  </motion.div>
                </div>

                {/* Phone and Service Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <label htmlFor="phone" className="block text-sm font-semibold text-primary mb-3">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+44 (0) 20..."
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition duration-300"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <label htmlFor="service" className="block text-sm font-semibold text-primary mb-3">
                      Service Required *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition duration-300 appearance-none bg-white"
                    >
                      <option value="">Select a service...</option>
                      {services.map(service => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                  </motion.div>
                </div>

                {/* Project Details */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <label htmlFor="message" className="block text-sm font-semibold text-primary mb-3">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Describe your project, timeline, budget range, and any specific requirements..."
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition duration-300 resize-none"
                  ></textarea>
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn w-full text-lg font-bold shadow-lg hover:shadow-xl transition duration-300"
                >
                  Request Free Quote
                </motion.button>

                <p className="text-sm text-neutral text-center">
                  ✓ Free consultation | ✓ No obligation | ✓ 24-hour response
                </p>
              </form>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-12 text-center"
          >
            <p className="text-neutral">
              By submitting this form, you agree to our privacy policy. We will never share your information with third parties.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}