import { assets, serviceData } from "@/assets/assets";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

function Services({ isDarkMode }: { isDarkMode: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="services"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center mb-2 text-lg font-ovo"
      >
        What I offer
      </motion.h4>

      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-center text-5xl font-ovo"
      >
        My services
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-2 font-ovo"
      >
        I design and develop responsive websites and custom systems, manage
        databases, use Git for version control, and implement design
        specifications from Figma. I have extensive experience developing and
        maintaining WordPress websites, including custom themes and plugins, SEO
        optimization, performance tuning, and security best practices.
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-2 font-ovo"
      >
        In addition, have experience working with PHP frameworks such as
        CodeIgniter and have contributed to the development and maintenance of
        important government websites, as well as custom PHP-based content and
        management systems. Known for my strong work ethic and analytical
        problem-solving skills, I collaborate effectively within
        multidisciplinary teams to deliver scalable, secure, and user-friendly
        solutions across dynamic, fast-paced projects.
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo"
      >
        I also have conceptual understanding of modern frontend technologies
        including Angular, React, Next.js, and TypeScript. I am highly motivated
        to work with these technologies in a professional environment and am
        eager to continuously learn, grow, and expand my skill set.
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        className="grid grid-cols-auto gap-6 my-10"
      >
        {serviceData.map(({ icon, title, description, link }, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            key={index}
            className={`border border-gray-400 rounded-lg px-8 py-12 hover: -translate-y-1 duration-500 shadow-black ${isDarkMode ? "hover:bg-(--dark-hover)" : "hover:bg-(--light-hover)"}`}
          >
            <Image src={icon} alt="title" className="w-10" />
            <h3
              className={`text-lg my-4  ${isDarkMode ? "text-white/80" : "text-gray-700"}`}
            >
              {title}
            </h3>
            <p
              className={`text-sm leading-5 ${isDarkMode ? "text-white/80" : "text-gray-600"}`}
            >
              {description}
            </p>
            <a href={link} className="flex items-center gap-2 text-sm mt-5">
              Read more{" "}
              <Image src={assets.right_arrow} alt="read more" className="w-4" />
            </a>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Services;
