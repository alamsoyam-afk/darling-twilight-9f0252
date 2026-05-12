import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-bg min-h-screen flex items-center justify-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center px-4 sm:px-6 py-8"
        >
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-4">
            Building Trust.<br />
            Crafting Spaces.<br />
            Transforming Homes.
          </h1>
          <p className="text-base sm:text-xl md:text-2xl mb-8 text-neutral">
            Premium construction services in London
          </p>
          <Link to="/booking" className="btn text-base sm:text-lg inline-block">
            Get a Free Quote Today
          </Link>
        </motion.div>
      </section>

      {/* Intro Section */}
      <section className="py-12 sm:py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-2xl sm:text-4xl font-bold mb-6"
          >
            About Neighborhood Builders
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg text-neutral max-w-3xl mx-auto"
          >
            With over 15 years of experience in London's construction industry, we specialize in transforming homes with unparalleled quality and craftsmanship. Our team of skilled professionals is dedicated to building trust through exceptional service and stunning results.
          </motion.p>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-2xl sm:text-4xl font-bold text-center mb-8 sm:mb-12"
          >
            Our Services
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8">
            {[
              { title: "Extensions", icon: "🏠" },
              { title: "Kitchen Installation", icon: "🍳" },
              { title: "Bathroom Remodeling", icon: "🛁" },
              { title: "Property Renovation", icon: "🔨" },
              { title: "Flooring Specialist", icon: "🪵" },
              { title: "Plumbing Services", icon: "🔧" },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-secondary p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
              >
                <div className="text-3xl sm:text-4xl mb-4">{service.icon}</div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-sm sm:text-base text-neutral">Professional {service.title.toLowerCase()} services in London.</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-6 sm:mt-8">
            <Link to="/services" className="btn">View All Services</Link>
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-12 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-2xl sm:text-4xl font-bold text-center mb-8 sm:mb-12"
          >
            Featured Projects
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8 mb-6 sm:mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
            >
              <img src="/images/project-kitchen-1.jpg" alt="Kitchen Renovation" className="w-full h-48 sm:h-64 object-cover hover:scale-105 transition duration-300" />
              <div className="p-4 sm:p-6 bg-white">
                <h3 className="text-lg sm:text-xl font-semibold mb-2">Modern Kitchen</h3>
                <p className="text-sm sm:text-base text-neutral">Premium kitchen renovation with contemporary design.</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
            >
              <img src="/images/project-bathroom-1.jpg" alt="Bathroom Remodel" className="w-full h-48 sm:h-64 object-cover hover:scale-105 transition duration-300" />
              <div className="p-4 sm:p-6 bg-white">
                <h3 className="text-lg sm:text-xl font-semibold mb-2">Luxury Bathroom</h3>
                <p className="text-sm sm:text-base text-neutral">Spa-like bathroom with premium fixtures and finishes.</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
            >
              <img src="/images/project-living-room-1.jpg" alt="Living Room" className="w-full h-48 sm:h-64 object-cover hover:scale-105 transition duration-300" />
              <div className="p-4 sm:p-6 bg-white">
                <h3 className="text-lg sm:text-xl font-semibold mb-2">Living Room Design</h3>
                <p className="text-sm sm:text-base text-neutral">Contemporary living space with modern furnishings.</p>
              </div>
            </motion.div>
          </div>
          <div className="text-center">
            <Link to="/projects" className="btn">View All Projects</Link>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-12 sm:py-20 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-2xl sm:text-4xl font-bold text-center mb-8 sm:mb-12"
          >
            What Our Clients Say
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-secondary text-primary p-4 sm:p-6 rounded-lg"
            >
              <p className="mb-4 text-sm sm:text-base">"Neighborhood Builders transformed our outdated kitchen into a modern masterpiece. Their attention to detail and professionalism was outstanding."</p>
              <p className="font-semibold text-sm sm:text-base">- Sarah Johnson, London</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-secondary text-primary p-4 sm:p-6 rounded-lg"
            >
              <p className="mb-4 text-sm sm:text-base">"Excellent service from start to finish. They completed our home extension on time and within budget. Highly recommended!"</p>
              <p className="font-semibold text-sm sm:text-base">- Michael Chen, London</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-20 bg-accent text-white text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="container mx-auto px-4 sm:px-6"
        >
          <h2 className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-6">Ready to Transform Your Home?</h2>
          <p className="text-base sm:text-xl mb-6 sm:mb-8">Get your free quote today and start your journey to a better living space.</p>
          <Link to="/booking" className="bg-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-gray-800 transition duration-300 inline-block text-sm sm:text-base">
            Get a Free Quote Today
          </Link>
        </motion.div>
      </section>
    </div>
  );
}