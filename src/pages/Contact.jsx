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
    <div className="pt-16 min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white dark:bg-gray-800 p-10 rounded-xl shadow-lg"
        >
          <div>
            <h2 className="text-4xl font-bold mb-8 text-primary-700 dark:text-primary-500">Contact Us</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-lg border-2 border-gray-300 px-4 py-3 text-lg shadow-sm focus:border-primary-500 focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white transition duration-200"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-lg border-2 border-gray-300 px-4 py-3 text-lg shadow-sm focus:border-primary-500 focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white transition duration-200"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                <textarea
                  name="message"
                  id="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-lg border-2 border-gray-300 px-4 py-3 text-lg shadow-sm focus:border-primary-500 focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white transition duration-200"
                  placeholder="Type your message here..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary-600 text-white px-6 py-4 text-lg font-semibold rounded-lg hover:bg-primary-700 transform hover:scale-[1.02] transition-all duration-200 dark:bg-primary-500 dark:hover:bg-primary-400"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-primary-700 dark:text-primary-500">About BuildMend</h2>
              <p className="text-lg text-gray-600 mb-6 dark:text-gray-400 leading-relaxed">
                BuildMend is your trusted partner in home repairs and maintenance, combining AI technology with a network of skilled professionals to provide top-notch solutions.
              </p>
              <p className="text-lg text-gray-600 mb-6 dark:text-gray-400 leading-relaxed">
                We connect you with expert advice and reliable professionals, ensuring that your home repairs are handled efficiently and effectively.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6 text-primary-700 dark:text-primary-500">Our Office</h3>
              <div className="space-y-3 text-lg">
                <p className="text-gray-600 dark:text-gray-300">Dhyaan Bhavan ke saamne.</p>
                <p className="text-gray-600 dark:text-gray-300">Tagore Bhavan, A Hostel Room No. 315</p>
                <p className="text-gray-600 dark:text-gray-300">Parul City, BC 2383</p>
                <div className="pt-4">
                  <p className="text-gray-600 dark:text-gray-300 flex items-center">
                    <span className="font-semibold mr-2">Email:</span> support@buildmend.com
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 flex items-center">
                    <span className="font-semibold mr-2">Phone:</span> 7879963325
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;
