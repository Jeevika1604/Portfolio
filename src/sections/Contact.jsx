import React from 'react';
import SectionWrapper from '../components/common/SectionWrapper';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const ContactInfo = ({ icon: Icon, title, value }) => (
  <div className="flex items-start gap-4 p-6 glass rounded-2xl hover:bg-primary-500/10 transition-colors">
    <div className="p-3 rounded-xl bg-primary-500/10 text-primary-600 dark:text-primary-400">
      <Icon size={24} />
    </div>
    <div>
      <h4 className="font-bold text-slate-800 dark:text-white mb-1">{title}</h4>
      <p className="text-slate-500 dark:text-slate-400 text-sm">{value}</p>
    </div>
  </div>
);

const Contact = () => {
  return (
    <SectionWrapper id="contact">
      <div className="text-center mb-16">
        <h2 className="heading-lg mb-4">Get In <span className="text-primary-600">Touch</span></h2>
        <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
          Have a project in mind or just want to say hi? Feel free to reach out.
        </p>
      </div>

      <div>
        <motion.form
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="glass p-8 md:p-10 rounded-3xl space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-600 dark:text-slate-400 ml-1">Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full px-5 py-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-transparent focus:border-primary-500 focus:bg-white dark:focus:bg-dark-lightest outline-none transition-all dark:text-white"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-600 dark:text-slate-400 ml-1">Email</label>
              <input
                type="email"
                placeholder="john@example.com"
                className="w-full px-5 py-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-transparent focus:border-primary-500 focus:bg-white dark:focus:bg-dark-lightest outline-none transition-all dark:text-white"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-600 dark:text-slate-400 ml-1">Subject</label>
            <input
              type="text"
              placeholder="Project Inquiry"
              className="w-full px-5 py-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-transparent focus:border-primary-500 focus:bg-white dark:focus:bg-dark-lightest outline-none transition-all dark:text-white"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-600 dark:text-slate-400 ml-1">Message</label>
            <textarea
              rows="5"
              placeholder="Tell me about your project..."
              className="w-full px-5 py-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-transparent focus:border-primary-500 focus:bg-white dark:focus:bg-dark-lightest outline-none transition-all dark:text-white resize-none"
            ></textarea>
          </div>

          <button type="button" className="btn-primary w-full flex items-center justify-center gap-2 group">
            Send Message
            <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </motion.form>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
