import SectionBadge from './SectionBadge';

const SectionTitle = ({ title, subtitle, className = '' }) => {
  return (
    <div className={`mb-12 ${className}`}>
      <SectionBadge>{subtitle}</SectionBadge>
      <h2 className='text-4xl md:text-5xl font-display font-bold mt-4 tracking-tight'>{title}</h2>
    </div>
  );
};

export default SectionTitle;
