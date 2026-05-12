import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Extensions",
    description: "Expand your living space with expertly designed and built home extensions.",
    icon: "🏠",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2053&q=80"
  },
  {
    title: "Kitchen Installation",
    description: "Transform your kitchen with modern designs and professional installation.",
    icon: "🍳",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
  },
  {
    title: "Bathroom Remodeling",
    description: "Create your dream bathroom with our complete remodeling services.",
    icon: "🛁",
    image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80"
  },
  {
    title: "Property Renovation",
    description: "Full property renovations to modernize and enhance your home's value.",
    icon: "🔨",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
  },
  {
    title: "Flooring Specialist",
    description: "Expert flooring installation for all types of materials and finishes.",
    icon: "🪵",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2158&q=80"
  },
  {
    title: "Plumbing Services",
    description: "Reliable plumbing repairs, installations, and maintenance services.",
    icon: "🔧",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80"
  },
  {
    title: "Garden Services",
    description: "Landscaping and garden design to enhance your outdoor space.",
    icon: "🌳",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
  },
  {
    title: "Painting & Decorating",
    description: "Professional painting services for interior and exterior finishes.",
    icon: "🎨",
    image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
  },
  {
    title: "General Repairs",
    description: "Comprehensive repair services for all your home maintenance needs.",
    icon: "🛠️",
    image: "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
  },
  {
    title: "Handyman Services",
    description: "Skilled handyman services for small repairs and installations.",
    icon: "👷",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
  },
  {
    title: "Electrical Services",
    description: "Certified electrical work for safety and functionality.",
    icon: "⚡",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80"
  }
];

export default function Services() {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-12 sm:py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-5xl font-bold text-center mb-6 sm:mb-12"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-neutral text-center max-w-2xl mx-auto mb-12 sm:mb-16"
          >
            From small repairs to major renovations, we offer comprehensive construction services tailored to your needs in London.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
              >
                <div
                  className="h-40 sm:h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${service.image})` }}
                  alt={`${service.title} service`}
                ></div>
                <div className="p-4 sm:p-6">
                  <div className="text-3xl sm:text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-sm sm:text-base text-neutral mb-4">{service.description}</p>
                  <Link to="/booking" className="btn text-xs sm:text-sm">
                    Get Quote
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}