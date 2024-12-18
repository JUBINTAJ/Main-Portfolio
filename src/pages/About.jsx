import { motion } from 'framer-motion';
import { GraduationCap, Briefcase } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen pt-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <GraduationCap className="text-blue-600 mr-2" size={24} />
                  <h3 className="text-xl font-semibold">Education</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium">Ssmhss Theyyalingal</h4>
                    <p className="text-gray-600">plus tow Biology science</p>
                    <p className="text-gray-500">2022 - 2024</p>
                  </div>
                  {/* Add more education items if needed */}
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <Briefcase className="text-blue-600 mr-2" size={24} />
                  <h3 className="text-xl font-semibold">Professional Experience</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium">Frontend Developer</h4>
                    <p className="text-gray-600">Bridgeon solution</p>
                    <p className="text-gray-500">2024 - Present</p>
                    <ul className="list-disc list-inside text-gray-600 mt-2">
                      <li>Developed responsive web applications using React</li>
                      <li>Implemented state management using Redux and Zustand</li>
                      <li>Built performant applications with Next.js</li>
                    </ul>
                  </div>
                  {/* Add more experience items if needed */}
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    'HTML5',
                    'CSS3',
                    'JavaScript',
                    'React',
                    'Redux',
                    'TypeScript',
                    'Next.js',
                    'Zustand',
                    'Material-UI',
                    'Tailwind CSS',
                    'Bootstrap',
                    'React query'
                  ].map((skill) => (
                    <div
                      key={skill}
                      className="bg-white px-4 py-2 rounded-lg shadow-sm text-center"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4">About Me</h3>
                <p className="text-gray-600">
                  I'm a passionate frontend developer with expertise in building modern web applications.
                  I love creating intuitive user interfaces and solving complex problems through clean,
                  efficient code. When I'm not coding, you can find me exploring new technologies and
                  contributing to open-source projects.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;