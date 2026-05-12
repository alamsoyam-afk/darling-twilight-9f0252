import { motion } from "framer-motion";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Modern Kitchen Renovation",
    category: "Kitchen",
    image: "/images/project-kitchen-1.jpg",
    description: "Complete kitchen transformation with premium appliances and contemporary design."
  },
  {
    id: 2,
    title: "Luxury Living Room",
    category: "Living Room",
    image: "/images/project-living-room-1.jpg",
    description: "Sophisticated living space with modern entertainment setup and elegant design."
  },
  {
    id: 3,
    title: "Spa-Luxury Bathroom Remodel",
    category: "Bathroom",
    image: "/images/project-bathroom-1.jpg",
    description: "Luxury bathroom renovation with spa-like features and premium fixtures."
  },
  {
    id: 4,
    title: "Contemporary Kitchen Design",
    category: "Kitchen",
    image: "/images/project-kitchen-3.jpg",
    description: "Sleek kitchen renovation featuring high-end appliances and modern cabinetry."
  },
  {
    id: 5,
    title: "Master Bathroom Suite",
    category: "Bathroom",
    image: "/images/project-bathroom-3.jpg",
    description: "Elegant master bathroom with marble finishes and designer fixtures."
  },
  {
    id: 6,
    title: "Warm Hallway Renovation",
    category: "Renovation",
    image: "/images/project-hallway.jpg",
    description: "Beautifully refurbished hallway with wood flooring and modern aesthetics."
  },
  {
    id: 7,
    title: "Media & Entertainment Room",
    category: "Living Room",
    image: "/images/project-media-room.jpg",
    description: "Custom-built media room with modern furnishings and technology integration."
  },
  {
    id: 8,
    title: "Contemporary Living Space",
    category: "Living Room",
    image: "/images/project-living-room-2.jpg",
    description: "Modern living area with open-plan design and premium finishes."
  },
  {
    id: 9,
    title: "Home Office Setup",
    category: "Office",
    image: "/images/project-office.jpg",
    description: "Professional home office with integrated storage and modern workspace."
  },
  {
    id: 10,
    title: "Kitchen & Dining",
    category: "Kitchen",
    image: "/images/project-kitchen-4.jpg",
    description: "Premium kitchen with integrated dining area and state-of-the-art appliances."
  },
  {
    id: 11,
    title: "Luxury Master Bedroom",
    category: "Bedroom",
    image: "/images/project-bedroom.jpg",
    description: "Spacious master bedroom with elegant design and high-end furnishings."
  },
  {
    id: 12,
    title: "Premium Bathroom Retreat",
    category: "Bathroom",
    image: "/images/project-bathroom-4.jpg",
    description: "Luxurious bathroom with premium finishes and modern amenities."
  }
];

const categories = ["All", "Kitchen", "Bathroom", "Living Room", "Office", "Bedroom", "Renovation"];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold text-center mb-12"
          >
            Our Projects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-neutral text-center max-w-2xl mx-auto mb-12"
          >
            Explore our portfolio of completed projects showcasing our craftsmanship and attention to detail.
          </motion.p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition duration-300 ${
                  selectedCategory === category
                    ? 'bg-accent text-white'
                    : 'bg-white text-primary hover:bg-accent hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
              >
                <div
                  className="h-64 bg-cover bg-center hover:scale-110 transition duration-300"
                  style={{ backgroundImage: `url(${project.image})` }}
                  alt={`${project.title} project`}
                ></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-neutral mb-4">{project.description}</p>
                  <span className="inline-block bg-accent text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {project.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}