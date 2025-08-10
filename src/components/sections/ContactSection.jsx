"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiSend, FiGithub, FiLinkedin } from "react-icons/fi";
import { toast } from "react-hot-toast";
import emailjs from "@emailjs/browser";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  // Read from env (adjust names for your build tool)
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const handleChange = (e) => {
    setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const validate = () => {
    if (!formData.name.trim()) return "Please enter your name.";
    if (!formData.email.trim()) return "Please enter your email.";
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) return "Please enter a valid email.";
    if (!formData.message.trim()) return "Please enter a message.";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const err = validate();
    if (err) return toast.error(err);

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      console.error("EmailJS env vars missing");
      return toast.error("Email service not configured. Contact owner.");
    }

    setSending(true);

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      // add any other template variables the template expects
    };

    try {
      const result = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
      // EmailJS returns a result object — you can inspect status/text if you want
      console.log("EmailJS result:", result);
      toast.success("Message sent successfully 🚀");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      toast.error("Failed to send message. Try again later.");
    } finally {
      setSending(false);
    }
  };

  return (
    <motion.section
      id="contact"
      className="w-full px-8 md:px-[10%] py-20 bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
      initial="initial"
      whileInView="animate"
      viewport={{ once: false, amount: 0.3 }}
    >
      <motion.div className="max-w-3xl mx-auto text-center" variants={fadeInUp} transition={{ duration: 0.6 }}>
        <h2 className="text-4xl font-bold mb-4">
          Let's <span className="text-indigo-600 dark:text-indigo-400">Connect</span>
        </h2>
      </motion.div>

      <motion.p className="text-slate-600 dark:text-slate-300 mb-10 max-w-2xl mx-auto text-center" variants={fadeInUp} transition={{ duration: 0.6, delay: 0.2 }}>
        Feel free to reach out! Whether it's a project, collaboration, or just a hello.
      </motion.p>
      

      <motion.form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left w-full max-w-2xl mx-auto" variants={fadeInUp} transition={{ duration: 0.6, delay: 0.3 }}>
        <input
          name="name"
          placeholder="Your Name"
          required
          value={formData.name}
          onChange={handleChange}
          className="px-4 py-3 rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <input
          name="email"
          type="email"
          placeholder="Your Email"
          required
          value={formData.email}
          onChange={handleChange}
          className="px-4 py-3 rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          required
          rows="5"
          value={formData.message}
          onChange={handleChange}
          className="px-4 py-3 rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <button
          type="submit"
          disabled={sending}
          className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-md transition duration-300 disabled:opacity-60 !cursor-pointer"

        >
          <FiSend className="text-lg" />
          {sending ? "Sending..." : "Send Message"}
        </button>
      </motion.form>

      <motion.div className="flex justify-center mt-10 gap-6" variants={fadeInUp} transition={{ duration: 0.6, delay: 0.7 }}>
        <a href="https://github.com/HawaleShailesh004" target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 hover:scale-110 transition-transform duration-300 text-2xl">
          <FiGithub />
        </a>
        <a href="https://linkedin.com/in/shailesh-hawale" target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 hover:scale-110 transition-transform duration-300 text-2xl">
          <FiLinkedin />
        </a>
      </motion.div>
    </motion.section>
  );
};

export default ContactSection;
