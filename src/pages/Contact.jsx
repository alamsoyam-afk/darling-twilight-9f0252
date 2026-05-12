import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-accent text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl opacity-90">We'd love to hear from you. Get in touch with our team today.</p>
        </motion.div>
      </section>

      {/* Quick Contact Cards */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: "📧", title: "Email", content: "Buildersneighborhood@gmail.com", action: "Send Email" },
              { icon: "📞", title: "Phone", content: "+447931101353", action: "Call Now" },
              { icon: "💬", title: "Live Chat", content: "Available 9 AM - 6 PM", action: "Start Chat" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition duration-300"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-neutral mb-4">{item.content}</p>
                <button className="text-accent font-semibold hover:text-primary transition duration-300">
                  {item.action} →
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-secondary to-gray-50 p-10 rounded-lg shadow-lg"
            >
              <h2 className="text-4xl font-bold mb-2 text-primary">Send us a Message</h2>
              <p className="text-neutral mb-8">We'll get back to you as soon as possible.</p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <label htmlFor="name" className="block text-sm font-semibold text-primary mb-3">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition duration-300"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
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
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition duration-300"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
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
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <label htmlFor="message" className="block text-sm font-semibold text-primary mb-3">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Tell us about your project or inquiry..."
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition duration-300 resize-none"
                  ></textarea>
                </motion.div>

                <motion.button
                  type="submit"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn w-full text-lg font-bold shadow-lg hover:shadow-xl transition duration-300"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Main Info Card */}
              <div className="bg-gradient-to-br from-primary to-accent text-white p-10 rounded-lg shadow-lg">
                <h2 className="text-4xl font-bold mb-8">Contact Information</h2>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-4 pb-6 border-b border-white border-opacity-20">
                    <div className="text-4xl flex-shrink-0">📧</div>
                    <div>
                      <p className="font-semibold text-lg mb-2">Email</p>
                      <p className="opacity-90 text-lg">Buildersneighborhood@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 pb-6 border-b border-white border-opacity-20">
                    <div className="text-4xl flex-shrink-0">📞</div>
                    <div>
                      <p className="font-semibold text-lg mb-2">Phone</p>
                      <p className="opacity-90 text-lg">+447931101353</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 pb-6 border-b border-white border-opacity-20">
                    <div className="text-4xl flex-shrink-0">📍</div>
                    <div>
                      <p className="font-semibold text-lg mb-2">Address</p>
                      <p className="opacity-90 text-lg">26 Rewley Road, Carshalton, SM5 1DB</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="text-4xl flex-shrink-0">🕐</div>
                    <div>
                      <p className="font-semibold text-lg mb-2">Business Hours</p>
                      <p className="opacity-90">Monday - Friday: 8 AM - 6 PM</p>
                      <p className="opacity-90">Saturday: 9 AM - 4 PM</p>
                      <p className="opacity-90">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Areas Card */}
              <div className="bg-white border-2 border-accent p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-primary mb-6">Service Areas</h3>
                <div className="grid grid-cols-2 gap-4">
                  {["Central London", "North London", "South London", "East London", "West London", "Greater London"].map((area, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="text-accent text-xl">✓</span>
                      <p className="text-neutral">{area}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-center mb-12"
          >
            Frequently Asked Questions
          </motion.h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              { q: "How quickly can you respond to inquiries?", a: "We typically respond to all inquiries within 24 hours during business days." },
              { q: "Do you provide free consultations?", a: "Yes! We offer free consultations and detailed quotes with no obligation." },
              { q: "Are you available on weekends?", a: "Yes, we're available on Saturdays. For emergency work, please call us." },
              { q: "What areas do you serve?", a: "We serve all of London and Greater London. Contact us for specific areas." }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
              >
                <h4 className="text-lg font-semibold text-primary mb-2">❓ {item.q}</h4>
                <p className="text-neutral">{item.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}