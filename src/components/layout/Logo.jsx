const Logo = ({ className }) => {
  return (
    <a href='#' className={`font-display font-bold tracking-tighter ${className}`}>
      <span className='text-primary'>&lt;</span>Noor<span className='text-primary'>/&gt;</span>
    </a>
  );
};

export default Logo;
