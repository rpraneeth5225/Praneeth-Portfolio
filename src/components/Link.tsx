import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';

interface LinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export function Link({ href, children, onClick }: LinkProps) {
  const isExternal = href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('www.');
  const isAnchor = href.startsWith('#');
  
  const linkClasses = "relative text-white/70 hover:text-white transition-colors text-sm tracking-wider group";

  if (isExternal || isAnchor) {
    return (
      <motion.a 
        href={href}
        onClick={onClick}
        className={linkClasses}
        whileHover="hover"
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
      >
        {children}
        <motion.span
          className="absolute -bottom-1 left-0 w-full h-[1px] bg-white origin-left"
          initial={{ scaleX: 0 }}
          variants={{
            hover: {
              scaleX: 1,
              transition: { duration: 0.3 }
            }
          }}
        />
      </motion.a>
    );
  }

  return (
    <motion.div whileHover="hover">
      <RouterLink 
        to={href}
        onClick={onClick}
        className={linkClasses}
      >
        {children}
        <motion.span
          className="absolute -bottom-1 left-0 w-full h-[1px] bg-white origin-left"
          initial={{ scaleX: 0 }}
          variants={{
            hover: {
              scaleX: 1,
              transition: { duration: 0.3 }
            }
          }}
        />
      </RouterLink>
    </motion.div>
  );
}