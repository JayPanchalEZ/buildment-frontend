import { useState } from 'react';
import { motion } from 'framer-motion';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white p-8 rounded-lg shadow-md"
        >
          <div>
            <h2 className="text-3xl font-bold mb-6 text-primary-700">Contact Us</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6 text-primary-700">About BuildMend</h2>
            <p className="text-gray-600 mb-4">
              BuildMend is your trusted partner in home repairs and maintenance, combining AI technology with a network of skilled professionals to provide top-notch solutions.
            </p>
            <p className="text-gray-600 mb-4">
              We connect you with expert advice and reliable professionals, ensuring that your home repairs are handled efficiently and effectively.
            </p>
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-4 text-primary-700">Our Office</h3>
              <p className="text-gray-600">123 Repair Street</p>
              <p className="text-gray-600">Building Fix, Suite 100</p>
              <p className="text-gray-600">Maintenance City, MC 12345</p>
              <p className="text-gray-600 mt-2">Email: support@buildmend.com</p>
              <p className="text-gray-600">Phone: (555) 123-4567</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;
