import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { sectionAnimation, staggerContainer } from '../../utils/animation';
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt, FaDatabase, FaPhp, FaLaravel } from 'react-icons/fa';
import {
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiNextdotjs,
  SiDocker,
  SiAmazon,
  SiMysql
} from 'react-icons/si';

// Define skills with icons and categories
const skills = [
  { name: 'HTML5', icon: FaHtml5, color: 'text-orange-600', category: 'Frontend' },
  { name: 'CSS3', icon: FaCss3Alt, color: 'text-blue-500', category: 'Frontend' },
  { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-500', category: 'Frontend' },
  { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-700', category: 'Frontend' },
  { name: 'React', icon: FaReact, color: 'text-sky-500', category: 'Frontend' },
  { name: 'Next.js', icon: SiNextdotjs, color: 'text-black dark:text-white', category: 'Frontend' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-teal-500', category: 'Frontend' },
  { name: 'Node.js', icon: FaNodeJs, color: 'text-green-600', category: 'Backend' },
  { name: 'Express', icon: SiExpress, color: 'text-gray-600', category: 'Backend' },
  { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500', category: 'Backend' },
  { name: 'PHP', icon: FaPhp, color: 'text-purple-600', category: 'Backend' },
  { name: 'Laravel', icon: FaLaravel, color: 'text-red-600', category: 'Backend' },
  { name: 'MySQL', icon: SiMysql, color: 'text-blue-600', category: 'Backend' },
  { name: 'Git', icon: FaGitAlt, color: 'text-orange-600', category: 'Tools' },
  { name: 'Docker', icon: SiDocker, color: 'text-blue-600', category: 'Tools' },
  { name: 'AWS', icon: SiAmazon, color: 'text-yellow-700', category: 'Tools' },
  { name: 'Database Design', icon: FaDatabase, color: 'text-blue-400', category: 'Others' },
];

interface SkillCardProps {
  skill: typeof skills[0];
  index: number;
}

const SkillCard = ({ skill, index }: SkillCardProps) => {
  const Icon = skill.icon;

  return (
    <motion.div
      className="bg-white dark:bg-slate-700 rounded-lg shadow-md p-5 flex flex-col items-center hover:shadow-lg transition-shadow"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            delay: index * 0.1
          }
        }
      }}
      whileHover={{
        y: -5,
        transition: { duration: 0.2 }
      }}
    >
      <div className={`text-4xl mb-3 ${skill.color}`}>
        <Icon />
      </div>
      <h3 className="font-medium text-lg">{skill.name}</h3>
      <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{skill.category}</p>
    </motion.div>
  );
};

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={sectionAnimation}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-12" />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-6"
          >
            {skills.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
