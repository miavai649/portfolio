const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  // Define variants
  const variants = {
    primary: 'bg-primary text-white hover:shadow-lg hover:shadow-primary/20',
    outline: 'border-2 border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5',
    ghost: 'hover:bg-black/5 dark:hover:bg-white/5'
  };

  return (
    <button
      className={`px-8 py-4 rounded-full font-bold transition-all active:scale-95 flex items-center justify-center gap-2 cursor-pointer ${variants[variant]} ${className} `}
      {...props}>
      {children}
    </button>
  );
};

export default Button;
