import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', hover = true }) => {
  return (
    <div className={`
      bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl
      ${hover ? 'hover:bg-white/15 hover:border-white/30 hover:shadow-2xl hover:shadow-emerald-500/10 hover:-translate-y-2' : ''}
      transition-all duration-300 ${className}
    `}>
      {children}
    </div>
  );
};

export default GlassCard;