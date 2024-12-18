import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1"
          >
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Hi, I'm Jubin Taj
            </h1>
            <h2 className="text-2xl text-gray-600 mb-6">
              Frontend Developer
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
            "I enjoy building fast, visually appealing websites with the latest technologies. I specialize in Html ,Css,JavaScript,React,Redux,Zustand, TypeScript, and Next.js to create smooth, user-friendly web apps that perform great across all devices."
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/JUBINTAJ" target="_blank" rel="noopener noreferrer"
                className="p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/jubin-taj/" target="_blank" rel="noopener noreferrer"
                className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-500 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="jubintajj@gmail.com"
                className="p-2 bg-red-600 text-white rounded-full hover:bg-red-500 transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1"
          >
            <img
              src="jubiiin.png"
              alt="Jubin Taj"
              className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;