import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Baby shop',
    description: 'Baby Shop is an online store designed to offer a wide variety of high-quality products for babies and young children. From clothing and toys to essential care items and accessories, our goal is to provide parents with everything they need to care for their little ones in one convenient place. The website ensures a seamless shopping experience with easy navigation, secure transactions, and fast delivery services.',
    image: 'http://yaffa-cdn.s3.amazonaws.com/yaffadsp/images/dspArticle/leadImage/31-BUSINESS-NEWBORNS-4-11_971D5AF0-0401-11E5-B8BA0698A1F216C3.jpg',
    technologies: ['React', 'Tailwind'],
    githubUrl: 'https://github.com/JUBINTAJ/E-commerce-baby',
    liveUrl: '#',
  },
  {
    title: 'Thread-clone App',
    description: 'Thread App is a social media application designed to mimic the features and functionality of the popular "Threads" app. It allows users to post short text updates, interact with posts through comments and likes, and follow other users. The app is built with a focus on real-time communication, user-friendly design, and seamless performance. With features like a personalized feed and notifications, the "Thread App " offers a streamlined social experience for sharing thoughts and engaging with others.',
    image: 'https://facts.net/wp-content/uploads/2023/07/threads-app-logo.jpeg',
    technologies: ['Next js','Type script','Redux', 'Tailwind'],
    githubUrl: 'https://github.com/JUBINTAJ/thread-clone',
    liveUrl: '#',
  },
  {
    title: 'Refurbished Electronics ',
    description: 'Refurbished Electronics Marketplace is an online platform designed to buy and sell refurbished electronics like mobiles, laptops, earphones, watches, speakers, and cameras. The platform features four distinct user roles: Admin, User, Vendor, and Delivery Boy, each with specific functionalities. Admins manage the entire marketplace, users can browse and purchase products, vendors list their refurbished goods, and delivery personnel track and manage shipments. With a focus on security, easy navigation, and efficient order management, the platform provides a seamless experience for both customers and sellers. The app ensures competitive pricing, warranty options, and reliable post-purchase support, making it a one-stop destination for high-quality refurbished electronics',
    image: '9015d229-efdf-4f15-a48a-54607e55ddb7.jpg',
    technologies: ['Next js','Type script','Redux', 'Tailwind'],
    githubUrl: 'https://github.com/JUBINTAJ/thread-clone',
    liveUrl: '#',
  },


];

const Projects = () => {
  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4">My Projects</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 hover:text-blue-600"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    Code
                  </a>
                  {/* <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 hover:text-blue-600"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Live Demo
                  </a> */}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;