const SectionBadge = ({ children, icon: Icon }) => {
  return (
    <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6'>
      {Icon && <Icon size={14} />}
      {children}
    </div>
  );
};

export default SectionBadge;
