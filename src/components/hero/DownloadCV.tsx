import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';

// Sample resume data - you can replace with your actual file
const resumeUrl = '/resume.pdf';

const DownloadCV = () => {
  return (
    <motion.a
      href={resumeUrl}
      download="Ibrahim_Sohofi_Resume.pdf"
      className="inline-flex items-center gap-2 px-6 py-3 bg-gray-700 text-white rounded-lg font-medium shadow-lg hover:bg-gray-800 transition-colors"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <FiDownload className="text-lg" />
      Download CV
    </motion.a>
  );
};

export default DownloadCV;
