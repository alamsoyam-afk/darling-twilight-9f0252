import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About Neighborhood Builders</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
              Building Trust. Crafting Spaces. Transforming Homes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-neutral mb-6">
                Founded over 15 years ago, Neighborhood Builders emerged from a simple vision: to transform homes with the highest standards of craftsmanship and customer care. What started as a small team of passionate builders has grown into London's most trusted construction partner.
              </p>
              <p className="text-lg text-neutral mb-6">
                Today, we proudly serve hundreds of satisfied clients across London, from intimate kitchen renovations to comprehensive home transformations. Our reputation is built on integrity, quality work, and genuine relationships with our customers.
              </p>
              <div className="flex gap-8">
                <div>
                  <div className="text-4xl font-bold text-accent">1000+</div>
                  <p className="text-neutral">Projects Completed</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-accent">500+</div>
                  <p className="text-neutral">Happy Clients</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-accent">15+</div>
                  <p className="text-neutral">Years Experience</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-to-br from-accent to-primary rounded-lg p-12 text-white shadow-xl"
            >
              <div className="text-6xl mb-6">🏢</div>
              <h3 className="text-2xl font-bold mb-4">Neighborhood Builders Ltd.</h3>
              <p className="mb-4 opacity-90">
                Premium construction and renovation services in London
              </p>
              <div className="border-t border-opacity-30 border-white pt-4 mt-4">
                <p className="mb-2"><strong>Address:</strong> London, UK</p>
                <p className="mb-2"><strong>Phone:</strong> +44 (0) 20 XXXX XXXX</p>
                <p><strong>Hours:</strong> Monday - Friday, 8 AM - 6 PM</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-center mb-16"
          >
            Our Core Values
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Trust",
                description: "Building lasting relationships through honest communication and reliability",
                icon: "🤝",
                color: "from-blue-400 to-blue-600"
              },
              {
                title: "Quality",
                description: "Every project meets our rigorous standards of craftsmanship",
                icon: "⭐",
                color: "from-amber-400 to-amber-600"
              },
              {
                title: "Innovation",
                description: "Staying ahead with modern techniques and premium materials",
                icon: "💡",
                color: "from-green-400 to-green-600"
              },
              {
                title: "Excellence",
                description: "Delivering outstanding results that exceed expectations",
                icon: "🏆",
                color: "from-purple-400 to-purple-600"
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-gradient-to-br ${value.color} p-8 rounded-lg shadow-lg text-white transform hover:scale-105 transition duration-300`}
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-2xl font-semibold mb-3">{value.title}</h3>
                <p className="opacity-90">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-center mb-16"
          >
            Why Choose Neighborhood Builders?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Certified Professionals",
                description: "All team members are certified, insured, and regularly trained in latest industry standards.",
                icon: "👷"
              },
              {
                title: "Transparent Pricing",
                description: "No hidden costs. We provide detailed quotes and stick to them with no surprises.",
                icon: "💰"
              },
              {
                title: "Timely Delivery",
                description: "We respect your time and complete projects on schedule, every time.",
                icon: "⏰"
              },
              {
                title: "Quality Materials",
                description: "We only use premium materials sourced from trusted suppliers.",
                icon: "📦"
              },
              {
                title: "Customer Support",
                description: "Dedicated support throughout your project and beyond completion.",
                icon: "📞"
              },
              {
                title: "Warranty Coverage",
                description: "Full warranty on workmanship and materials for your peace of mind.",
                icon: "✅"
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-neutral">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-r from-primary to-secondary p-12 rounded-lg shadow-lg text-white text-center"
          >
            <h2 className="text-4xl font-bold mb-6">Our Expert Team</h2>
            <p className="text-lg max-w-3xl mx-auto opacity-90 mb-8">
              Our diverse team includes master builders, architects, designers, and project managers with combined experience of over 150 years. Every team member shares our commitment to excellence and customer satisfaction.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {["Builders", "Electricians", "Plumbers", "Designers"].map((role, i) => (
                <div key={i} className="bg-white bg-opacity-20 p-4 rounded-lg backdrop-blur">
                  <div className="text-3xl mb-2">👥</div>
                  <p className="font-semibold">{role}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-center mb-16"
          >
            What Our Clients Say
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                text: "Neighborhood Builders transformed our outdated kitchen into a modern masterpiece. Their attention to detail and professionalism was outstanding.",
                author: "Sarah Johnson",
                location: "London",
                rating: 5
              },
              {
                text: "Excellent service from start to finish. They completed our home extension on time and within budget. Highly recommended!",
                author: "Michael Chen",
                location: "London",
                rating: 5
              },
              {
                text: "Our bathroom renovation exceeded all expectations. The team was professional, courteous, and delivered exceptional results.",
                author: "Emma Williams",
                location: "London",
                rating: 5
              },
              {
                text: "We couldn't be happier with our new living room. The builders took great care of our home and the quality is fantastic.",
                author: "David Martinez",
                location: "London",
                rating: 5
              },
              {
                text: "From initial consultation to final touches, the experience was seamless. They truly care about customer satisfaction.",
                author: "Lisa Thompson",
                location: "London",
                rating: 5
              },
              {
                text: "Best decision to hire Neighborhood Builders. Professional, reliable, and they deliver beautiful results every time.",
                author: "James Wilson",
                location: "London",
                rating: 5
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-secondary text-primary p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-accent text-xl">★</span>
                  ))}
                </div>
                <p className="mb-6 italic text-base">"{testimonial.text}"</p>
                <div className="border-t border-gray-300 pt-4">
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm opacity-75">{testimonial.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent text-white text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="container mx-auto px-6"
        >
          <h2 className="text-4xl font-bold mb-6">Ready to Work With Us?</h2>
          <p className="text-xl mb-8 opacity-90">
            Contact us today for a free consultation and quote on your next project.
          </p>
          <a href="/contact" className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition duration-300 inline-block">
            Get in Touch
          </a>
        </motion.div>
      </section>
    </div>
  );
}