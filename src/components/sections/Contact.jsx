import { motion } from 'framer-motion';
import { Globe, Mail, MapPin, Phone, Send, ShieldCheck } from 'lucide-react';
import { contactContent } from '../../data/contact';
import Button from '../ui/Button';
import SectionWrapper from '../ui/SectionWrapper';
import SectionTitle from '../ui/SectionTitle';

// Mapping Lucide icons
const iconMap = { Mail, Phone, MapPin };

const Contact = () => {
  return (
    <SectionWrapper id='contact' hasBottomPadding={true} overflowHidden={true}>
        <div className='grid lg:grid-cols-2 gap-20 items-center'>
          {/* --- LEFT SIDE: INFO (Unchanged Layout) --- */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}>
            <SectionTitle subtitle={contactContent.subtitle} title={contactContent.title} icon={Mail} className='mb-8' />

            <p className='text-lg text-gray-500 dark:text-zinc-400 mb-12 max-w-md leading-relaxed'>{contactContent.description}</p>

            <div className='space-y-8 mb-16'>
              {contactContent.details.map((item, idx) => {
                const Icon = iconMap[item.icon];
                return (
                  <div key={idx} className='flex items-center gap-6 group'>
                    <div className='w-12 h-12 rounded-2xl bg-gray-50 dark:bg-zinc-900 border border-black/[0.03] dark:border-white/[0.05] flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500 ease-out'>
                      <Icon size={20} />
                    </div>
                    <div>
                      <p className='text-[10px] font-black uppercase tracking-[0.25em] text-gray-400 mb-1'>{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className='text-lg font-bold text-gray-900 dark:text-gray-100 hover:text-primary transition-colors'>
                          {item.value}
                        </a>
                      ) : (
                        <p className='text-lg font-bold text-gray-900 dark:text-gray-100'>{item.value}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Social Icons */}
            <div className='flex gap-4'>
              {contactContent.socials.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target='_blank'
                  rel='noreferrer'
                  className='w-12 h-12 rounded-2xl bg-gray-50 dark:bg-zinc-900 border border-black/[0.03] dark:border-white/[0.05] flex items-center justify-center text-gray-500 hover:text-primary transition-all duration-300'>
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* --- RIGHT SIDE: ELEVATED CONTACT FORM --- */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className='relative'>
            {/* Status Badge - Refined Integration */}
            <div className='absolute -top-3 right-10 z-20 flex items-center gap-2.5 px-4 py-1.5 bg-white dark:bg-zinc-900 border border-black/[0.08] dark:border-white/10 rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.05)]'>
              <span className='relative flex h-2 w-2'>
                <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75'></span>
                <span className='relative inline-flex rounded-full h-2 w-2 bg-green-500'></span>
              </span>
              <span className='text-[9px] font-black uppercase tracking-[0.15em] text-gray-500 dark:text-zinc-400'>Available for Work</span>
            </div>

            {/* Main Form Container */}
            <div className='relative p-1 rounded-[2.5rem] bg-gradient-to-b from-gray-200/50 to-transparent dark:from-white/10 dark:to-transparent shadow-2xl shadow-black/[0.02]'>
              <form className='p-8 md:p-12 rounded-[2.4rem] bg-white dark:bg-[#0c0c0c] space-y-10 overflow-hidden relative'>
                {/* Visual Header Inside Form */}
                <div className='flex items-center justify-between pb-6 border-b border-black/[0.03] dark:border-white/[0.05]'>
                  <div className='flex items-center gap-2.5 text-gray-400'>
                    <ShieldCheck size={14} className='text-primary/60' />
                    <span className='text-[10px] font-bold uppercase tracking-[0.2em]'>Secure Inquiry</span>
                  </div>
                  <Globe size={14} className='text-gray-300 dark:text-zinc-700' />
                </div>

                <div className='grid md:grid-cols-2 gap-10'>
                  <FormInput label='Full Name' type='text' placeholder='John Doe' />
                  <FormInput label='Email Address' type='email' placeholder='john@example.com' />
                </div>

                <div className='space-y-4'>
                  <label className='text-[10px] font-black uppercase tracking-[0.25em] text-gray-400 ml-1'>Message Brief</label>
                  <textarea
                    rows='5'
                    className='w-full p-6 rounded-[2rem] bg-gray-50/50 dark:bg-zinc-900/30 border border-black/[0.05] dark:border-white/[0.05] hover:border-black/10 dark:hover:border-white/10 outline-none focus:bg-white dark:focus:bg-zinc-900 focus:border-primary/40 focus:ring-4 focus:ring-primary/5 transition-all duration-300 resize-none text-sm leading-relaxed shadow-inner placeholder:text-gray-300 dark:placeholder:text-zinc-700'
                    placeholder='Tell me about your project...'></textarea>
                </div>

                <div className='pt-2 flex flex-col items-center gap-6'>
                  <Button
                    className='w-full py-5 rounded-[1.5rem] group shadow-[0_20px_40px_-10px_rgba(217,119,6,0.25)] hover:shadow-[0_24px_48px_-12px_rgba(217,119,6,0.35)] transition-all duration-500'
                    onClick={(e) => e.preventDefault()}>
                    Send Message
                    <Send
                      size={18}
                      className='ml-2 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1'
                    />
                  </Button>

                  <div className='flex items-center gap-3 opacity-40'>
                    <div className='w-1 h-1 rounded-full bg-gray-400' />
                    <p className='text-[9px] text-gray-700 dark:text-gray-400 font-bold uppercase tracking-[0.3em]'>End-to-End Encrypted</p>
                    <div className='w-1 h-1 rounded-full bg-gray-400' />
                  </div>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
    </SectionWrapper>
  );
};

/* --- REFINED PREMIUM INPUT COMPONENT --- */
const FormInput = ({ label, type, placeholder }) => (
  <div className='space-y-4'>
    <label className='text-[10px] font-black uppercase tracking-[0.25em] text-gray-400 ml-1'>{label}</label>
    <div className='relative group/input'>
      <input
        type={type}
        placeholder={placeholder}
        className='w-full p-5 rounded-2xl bg-gray-50/50 dark:bg-zinc-900/30 border border-black/[0.05] dark:border-white/[0.05] hover:border-black/10 dark:hover:border-white/10 outline-none focus:bg-white dark:focus:bg-zinc-900 focus:border-primary/40 focus:ring-4 focus:ring-primary/5 transition-all duration-300 text-sm font-medium shadow-inner placeholder:text-gray-300 dark:placeholder:text-zinc-700'
      />
    </div>
  </div>
);

export default Contact;
