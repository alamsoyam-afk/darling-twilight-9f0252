import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "London",
    service: "Kitchen Renovation",
    rating: 5,
    text: "Neighborhood Builders transformed our outdated kitchen into a modern masterpiece. Their attention to detail and professionalism was outstanding. The team was punctual, clean, and completed the project on time and within budget."
  },
  {
    name: "Michael Chen",
    location: "London",
    service: "Home Extension",
    rating: 5,
    text: "Excellent service from start to finish. They completed our home extension on time and within budget. The quality of work is exceptional, and we couldn't be happier with the results. Highly recommended!"
  },
  {
    name: "Emma Thompson",
    location: "London",
    service: "Bathroom Remodeling",
    rating: 5,
    text: "From the initial consultation to the final walkthrough, Neighborhood Builders exceeded our expectations. The new bathroom is beautiful and functional. Their expertise in plumbing and design is evident in every detail."
  },
  {
    name: "David Williams",
    location: "London",
    service: "Property Renovation",
    rating: 5,
    text: "We hired them for a complete property renovation, and they delivered beyond our wildest dreams. The coordination between different trades was seamless, and the final result has significantly increased our home's value."
  },
  {
    name: "Lisa Rodriguez",
    location: "London",
    service: "Flooring Installation",
    rating: 5,
    text: "Professional, reliable, and skilled. The hardwood flooring installation was done perfectly. They took the time to ensure everything was level and properly finished. Will definitely use them again for future projects."
  },
  {
    name: "James Patel",
    location: "London",
    service: "Electrical Services",
    rating: 5,
    text: "Needed urgent electrical work done, and Neighborhood Builders responded quickly. The electrician was certified, professional, and explained everything clearly. Safe and reliable service."
  }
];

export default function Testimonials() {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold text-center mb-12"
          >
            What Our Clients Say
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-neutral text-center max-w-2xl mx-auto mb-16"
          >
            Don't just take our word for it. Here's what our satisfied customers in London have to say about our services.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-accent text-xl">⭐</span>
                  ))}
                </div>
                <p className="text-neutral mb-4 italic">"{testimonial.text}"</p>
                <div className="border-t pt-4">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-neutral">{testimonial.location}</p>
                  <p className="text-sm text-accent font-medium">{testimonial.service}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-center mt-16"
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Join Our Satisfied Customers?</h2>
            <p className="text-lg text-neutral mb-8">
              Experience the Neighborhood Builders difference. Get your free quote today.
            </p>
            <a href="/booking" className="btn text-lg">
              Get a Free Quote Today
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}