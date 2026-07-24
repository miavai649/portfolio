import Container from './Container';

const SectionWrapper = ({
  id,
  children,
  className = '',
  containerClassName = '',
  hasBottomPadding = false,
  overflowHidden = false,
}) => {
  // Spacing system: scales from mobile (20) to tablet (28) to desktop (32)
  const paddingClass = hasBottomPadding
    ? 'py-20 md:py-28 lg:py-32'
    : 'pt-20 md:pt-28 lg:pt-32 pb-0';

  return (
    <section
      id={id}
      className={`relative ${paddingClass} bg-white dark:bg-dark-bg transition-colors duration-500 ${
        overflowHidden ? 'overflow-hidden' : ''
      } ${className}`}
    >
      <Container className={containerClassName}>
        {children}
      </Container>
    </section>
  );
};

export default SectionWrapper;
