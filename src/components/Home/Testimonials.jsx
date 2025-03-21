import React, { useState } from 'react'
import { motion } from 'framer-motion';


const Testimonials = ({
    testimonialTitle = "What Our Clients Say",
  testimonials = [
    {
      name: "Sarah Johnson",
      position: "CEO, TechVision",
      image: "https://example.com/person1.jpg",
      quote: "Working with this team transformed our digital presence completely. Their innovative approach delivered exactly what we needed."
    },
    {
      name: "Michael Chen",
      position: "Marketing Director, GrowthLabs",
      image: "https://example.com/person2.jpg",
      quote: "Outstanding service and technical expertise. Their attention to detail and creative solutions exceeded our expectations."
    },
    {
      name: "Emma Rodriguez",
      position: "Founder, CreativeWorks",
      image: "https://example.com/person3.jpg",
      quote: "The most responsive and professional team I've worked with. They truly understand how to bring ideas to life."
    },
    {
      name: "David Williams",
      position: "CTO, FutureTech",
      image: "https://example.com/person4.jpg",
      quote: "Their technical knowledge combined with creative vision made our project a huge success. Highly recommended!"
    },
    {
      name: "Lisa Anderson",
      position: "Product Manager, InnovateX",
      image: "https://example.com/person5.jpg",
      quote: "From concept to execution, they delivered excellence at every stage. A truly outstanding digital partner."
    }
  ],
  variant="modern"
}) => {

    const getVariantStyles = () => {
        switch(variant) {
          case "modern":
            return {
              sectionBg: "bg-gradient-to-b from-indigo-50 to-white",
              titleStyle: "text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-500 leading-tight",
              descriptionStyle: "text-xl text-gray-700 leading-relaxed font-light",
              featureIconBg: "bg-gradient-to-r from-indigo-500 to-pink-500",
              buttonStyle: "px-8 py-4 bg-gradient-to-r from-indigo-600 to-pink-500 text-white text-lg font-semibold rounded-full shadow-lg",
              buttonHoverBg: "linear-gradient(90deg, #4F46E5 0%, #EC4899 100%)",
              cardStyle: "bg-white p-8 rounded-xl shadow-lg border-t-4 border-indigo-500",
              cardTitleStyle: "text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-pink-500",
              badgeStyle: "bg-gradient-to-r from-indigo-500 to-pink-500",
              testimonialHeadingStyle: "text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-pink-500",
              activeDotStyle: "bg-indigo-600"
            };
          case "minimal":
            return {
              sectionBg: "bg-white",
              titleStyle: "text-4xl font-medium text-gray-900 leading-tight",
              descriptionStyle: "text-lg text-gray-600 leading-relaxed",
              featureIconBg: "bg-gray-800",
              buttonStyle: "px-6 py-3 bg-gray-900 text-white text-base font-medium rounded-md shadow-sm",
              buttonHoverBg: "#111827",
              cardStyle: "bg-gray-50 p-6 rounded-sm border-l-4 border-gray-800",
              cardTitleStyle: "text-xl font-medium text-gray-900",
              badgeStyle: "bg-gray-800",
              testimonialHeadingStyle: "text-2xl font-medium text-center mb-10 text-gray-900",
              activeDotStyle: "bg-gray-800"
            };
          case "corporate":
            return {
              sectionBg: "bg-gradient-to-b from-blue-900 to-blue-800",
              titleStyle: "text-4xl font-bold text-white leading-tight",
              descriptionStyle: "text-lg text-blue-100 leading-relaxed",
              featureIconBg: "bg-yellow-500",
              buttonStyle: "px-6 py-3 bg-yellow-500 text-blue-900 text-lg font-bold rounded-md shadow-md",
              buttonHoverBg: "#F59E0B",
              cardStyle: "bg-blue-800 p-6 rounded-md border border-blue-700 shadow-md",
              cardTitleStyle: "text-xl font-bold text-white",
              badgeStyle: "bg-yellow-500",
              testimonialHeadingStyle: "text-3xl font-bold text-center mb-12 text-white",
              activeDotStyle: "bg-yellow-500"
            };
          default: // "default"
            return {
              sectionBg: "bg-gradient-to-b from-blue-50 to-white",
              titleStyle: "text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 leading-tight",
              descriptionStyle: "text-xl text-gray-700 leading-relaxed font-light",
              featureIconBg: "bg-gradient-to-r from-blue-500 to-purple-500",
              buttonStyle: "px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-semibold rounded-full shadow-lg",
              buttonHoverBg: "linear-gradient(90deg, #3B82F6 0%, #8B5CF6 100%)",
              cardStyle: "bg-white p-8 rounded-xl shadow-lg border-t-4 border-blue-500",
              cardTitleStyle: "text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600",
              badgeStyle: "bg-gradient-to-r from-blue-500 to-purple-500",
              testimonialHeadingStyle: "text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600",
              activeDotStyle: "bg-blue-600"
            };
        }
      };
    
      const [activeIndex, setActiveIndex] = useState(0);

      const styles = getVariantStyles();

    const renderTestimonials = (variant) => {
        if (testimonials.length === 0) return null;
        
        return (
          <motion.div
            className={`${variant === "modern" ? 'mb-24' : 'mt-24'} mb-8`}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <h2 className={styles.testimonialHeadingStyle}>
              {testimonialTitle}
            </h2>
            
            <div className="relative overflow-hidden">
              <div className="flex justify-center">
                <motion.div 
                  className="w-full max-w-4xl"
                  animate={{ x: `-${activeIndex * 100}%` }}
                  transition={{ type: "spring", stiffness: 50, damping: 20 }}
                >
                  <div className="flex">
                    {testimonials.map((testimonial, index) => (
                      <motion.div 
                        key={index}
                        className="min-w-full px-4"
                      >
                        <div className={`${variant === 'corporate' ? 'bg-blue-800 border border-blue-700' : 'bg-white border border-blue-100'} p-8 rounded-xl shadow-lg`}>
                          <div className="flex items-center mb-6">
                            <div className={`h-16 w-16 rounded-full ${variant === 'minimal' ? 'bg-gray-800' : styles.badgeStyle} mr-4 flex items-center justify-center text-white text-2xl font-bold`}>
                              {testimonial.name.charAt(0)}
                            </div>
                            <div>
                              <h4 className={`text-xl font-semibold ${variant === 'corporate' ? 'text-white' : 'text-gray-900'}`}>
                                {testimonial.name}
                              </h4>
                              <p className={variant === 'corporate' ? 'text-yellow-400' : 'text-blue-600'}>
                                {testimonial.position}
                              </p>
                            </div>
                          </div>
                          <p className={`text-lg ${variant === 'corporate' ? 'text-blue-100' : 'text-gray-700'} italic leading-relaxed`}>
                            "{testimonial.quote}"
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
              
              {/* Navigation dots */}
              <div className="flex justify-center mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`mx-1 w-3 h-3 rounded-full transition-all duration-300 ${index === activeIndex ? `${styles.activeDotStyle} w-8` : 'bg-gray-300'}`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        );
      };
    

  return (
    <div>
        {renderTestimonials(variant)}
    </div>
  )
}

export default Testimonials