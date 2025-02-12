import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex">
      {/* Sidebar padding to prevent overlap */}
      <div className="flex-1  p-6">
        {/* Hero Section */}
        <section className="bg-primary-600 dark:bg-primary-800 text-white py-20 rounded-lg shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Your AI-Powered Home Repair Assistant
              </h1>
              <p className="text-xl mb-8">
                Get real-time AI assistance and connect with professionals for all your home repair needs.
              </p>
              <Link
                to="/chat"
                className="bg-white dark:bg-gray-100 text-primary-600 dark:text-primary-800 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 dark:hover:bg-gray-200 transition-colors shadow-md"
              >
                Chat with AI Now
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">AI-Powered Home Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition duration-300"
                >
                  <h3 className="text-xl font-semibold mb-4 dark:text-gray-100">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-gray-50 dark:bg-gray-700 py-16 rounded-lg shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">
              AI Home Repair FAQ
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-xl transition duration-300"
                >
                  <h3 className="text-lg font-semibold mb-2 dark:text-gray-100">{faq.question}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

const services = [
  {
    title: "AI-Powered Plumbing Diagnostics",
    description: "Get instant troubleshooting and expert solutions for your plumbing issues."
  },
  {
    title: "Smart Electrical Problem Detection",
    description: "Let AI analyze your electrical issues before connecting you to professionals."
  },
  {
    title: "AI-Assisted Carpentry Planning",
    description: "Receive precise AI-generated carpentry solutions and expert craftsmanship."
  }
];

const faqs = [
  {
    question: "How does AI help with home repairs?",
    answer: "Our AI instantly analyzes your issue and provides troubleshooting steps before connecting you with professionals."
  },
  {
    question: "Can AI fix my problem remotely?",
    answer: "AI provides guidance and step-by-step solutions, but for complex issues, we recommend professional assistance."
  },
  {
    question: "Is the AI chat available 24/7?",
    answer: "Yes! Our AI assistant is available anytime to provide instant home repair advice."
  }
];

export default Home;
