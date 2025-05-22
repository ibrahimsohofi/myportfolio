import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { sectionAnimation, staggerContainer } from '../../utils/animation';

// Project data based on GitHub repository with actual live URLs and screenshots
const projects = [
  {
    id: 1,
    title: 'SM-Downloader',
    description: 'A social media downloader application that allows users to download videos and images from various social media platforms like Instagram, Facebook, and Twitter.',
    image: '/images/sm-downloader-screenshot.jpg',
    techStack: ['PHP', 'Laravel', 'MySQL', 'JavaScript', 'Tailwind CSS'],
    liveUrl: 'https://sm-downloader-peach.vercel.app/',
    githubUrl: 'https://github.com/ibrahimsohofi/sm-downloader',
  },
  {
    id: 2,
    title: 'PlayVault',
    description: 'A video game library application for cataloging and managing your game collection. Includes features for tracking gameplay time, ratings, and reviews.',
    image: '/images/playvault-screenshot.jpg',
    techStack: ['React', 'Node.js', 'MySQL', 'Tailwind CSS'],
    liveUrl: 'https://playvault-zeta.vercel.app',
    githubUrl: 'https://github.com/ibrahimsohofi/playvault',
  },
  {
    id: 3,
    title: 'Mod Nexus',
    description: 'A platform for game modifications and add-ons, allowing users to browse, download, and install mods for their favorite games.',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    techStack: ['TypeScript', 'React', 'Node.js', 'Express'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/ibrahimsohofi/ModNexus',
  },
  {
    id: 4,
    title: 'Books Website',
    description: 'A responsive website for browsing and discovering books, featuring a clean interface and intuitive navigation.',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/ibrahimsohofi/Bookswebsite',
  },
];

interface ProjectCardProps {
  project: typeof projects[0];
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  // Motion values for the tilt effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Transform mouse x and y values to rotation values
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  // Handle mouse move on card to update motion values
  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Calculate the center of the card
    const centerX = rect.left + width / 2;
    const centerY = rect.top + height / 2;

    // Calculate the mouse position relative to the center
    const mouseX = event.clientX - centerX;
    const mouseY = event.clientY - centerY;

    x.set(mouseX);
    y.set(mouseY);
  };

  // Reset card position when mouse leaves
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-lg perspective-1000"
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            delay: index * 0.2
          }
        }
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        transition: "transform 0.1s ease"
      }}
    >
      <div className="relative overflow-hidden h-56">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          style={{ transform: "translateZ(20px)" }}
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.5 }
          }}
        />
      </div>

      <div className="p-6" style={{ transform: "translateZ(30px)" }}>
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-slate-600 dark:text-slate-400 mb-4">
          {project.description}
        </p>

        <div className="mb-6">
          <h4 className="text-sm font-medium mb-2 text-slate-500 dark:text-slate-400">
            Technologies Used:
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-xs rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex justify-between">
          <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub className="mr-2" />
            <span>Code</span>
          </motion.a>

          <motion.a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaExternalLinkAlt className="mr-2" />
            <span>Live Demo</span>
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="py-20 bg-slate-100 dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={sectionAnimation}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8" />
          <p className="text-center text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-12">
            Here are some of my recent projects. Each project is a unique piece of development that
            showcases my skills and passion for building innovative solutions.
          </p>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </motion.div>

          <motion.div
            className="text-center mt-12"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { delay: 0.6 } }
            }}
          >
            <motion.a
              href="https://github.com/ibrahimsohofi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-medium shadow-lg hover:bg-blue-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub className="mr-2" />
              See More on GitHub
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
