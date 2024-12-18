import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState(''); // to show success or error message

  const handleSubmit = (e) => {
    e.preventDefault();

    // Form validation check
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('Please fill in all fields.');
      return;
    }

    // Simulating the API call (Replace with actual API call to backend)
    setTimeout(() => {
      setStatus('Message sent successfully!');

      setFormData({
        name: '',
        email: '',
        message: '',
      });
    }, 1000);
  };

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="text-blue-600 mr-3" size={20} />
                    <a href="mailto:jubiiitaj@example.com" className="text-gray-600 hover:text-blue-600">
                      jubiiitaj@example.com
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Phone className="text-blue-600 mr-3" size={20} />
                    <span className="text-gray-600">+91 8590959856</span>
                    <a
                      href="tel:+918590959856"
                      className="ml-4 text-blue-600 hover:text-blue-700"
                    >
                      <button className="bg-blue-600 text-white py-1 px-3 rounded-lg hover:bg-blue-700 transition-colors">
                        Call Now
                      </button>
                    </a>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="text-blue-600 mr-3" size={20} />
                    <span className="text-gray-600">Malappuram, Kerala, India</span>
                  </div>
                </div>
              </div>
            </motion.div>


            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-sm">
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
                  >
                    <Send size={20} className="mr-2" />
                    Send Message
                  </button>
                </div>
              </form>
            </motion.div>
          </div>

          {status && (
            <div className="mt-6 text-center text-lg font-semibold text-gray-700">
              {status}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
