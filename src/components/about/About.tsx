import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { sectionAnimation, fadeInLeft, fadeInRight } from '../../utils/animation';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={sectionAnimation}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="max-w-6xl mx-auto"
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-4"
            variants={fadeInLeft}
          >
            About Me
          </motion.h2>

          <motion.div
            className="w-20 h-1 bg-blue-600 mx-auto mb-12"
            variants={fadeInRight}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={fadeInLeft}
              className="space-y-6"
            >
              <p className="text-lg text-slate-700 dark:text-slate-300">
                I'm a passionate <span className="font-semibold text-blue-600">Full Stack Developer</span> with
                a deep interest in building scalable and efficient web applications. My journey in software development
                started with a curiosity about how websites work, which led me to dive deep into the world of coding.
              </p>

              <p className="text-lg text-slate-700 dark:text-slate-300">
                I specialize in modern JavaScript frameworks like React and Node.js, and I'm experienced in
                building responsive, user-friendly interfaces as well as robust back-end systems. I believe in writing
                clean, maintainable code that solves real-world problems.
              </p>

              <p className="text-lg text-slate-700 dark:text-slate-300">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source
                projects, or sharing my knowledge through blog posts and community engagement.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              className="bg-slate-100 dark:bg-slate-700 p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-4 text-blue-600">My Approach</h3>

              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm mr-3 mt-0.5">
                    1
                  </div>
                  <div>
                    <h4 className="font-medium">User-Centered Design</h4>
                    <p className="text-slate-600 dark:text-slate-400 mt-1">
                      I prioritize creating intuitive, accessible interfaces that delight users.
                    </p>
                  </div>
                </li>

                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm mr-3 mt-0.5">
                    2
                  </div>
                  <div>
                    <h4 className="font-medium">Performance Optimization</h4>
                    <p className="text-slate-600 dark:text-slate-400 mt-1">
                      I build applications with performance in mind from the ground up.
                    </p>
                  </div>
                </li>

                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm mr-3 mt-0.5">
                    3
                  </div>
                  <div>
                    <h4 className="font-medium">Clean Architecture</h4>
                    <p className="text-slate-600 dark:text-slate-400 mt-1">
                      I focus on scalable, maintainable code structures that stand the test of time.
                    </p>
                  </div>
                </li>

                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm mr-3 mt-0.5">
                    4
                  </div>
                  <div>
                    <h4 className="font-medium">Continuous Learning</h4>
                    <p className="text-slate-600 dark:text-slate-400 mt-1">
                      I'm always exploring new technologies and methodologies to improve my craft.
                    </p>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
