import { assets, serviceData } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'
import { motion } from 'motion/react'

function Services({ isDarkMode }: { isDarkMode: boolean }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            id='services' className='w-full px-[12%] py-10 scroll-mt-20'>

            <motion.h4
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className='text-center mb-2 text-lg font-ovo'>What I offer</motion.h4>

            <motion.h2
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className='text-center text-5xl font-ovo'>My services</motion.h2>

            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className='text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo'>I develop responsive websites, e-commerce solutions and custom systems, handle databases, Git version control and design implementation via Figma. I am known for my strong work ethic, analytical problem-solving skills and the ability to contribute positively in dynamic, multidisciplinary teams.</motion.p>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                className='grid grid-cols-auto gap-6 my-10'>
                {
                    serviceData.map(({ icon, title, description, link }, index) => (
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            key={index} className={`border border-gray-400 rounded-lg px-8 py-12 hover: -translate-y-1 duration-500 shadow-black ${isDarkMode ? 'hover:bg-(--dark-hover)' : 'hover:bg-(--light-hover)'}`}>
                            <Image src={icon} alt='title' className='w-10' />
                            <h3 className={`text-lg my-4  ${isDarkMode ? 'text-white/80' : 'text-gray-700'}`}>{title}</h3>
                            <p className={`text-sm leading-5 ${isDarkMode ? 'text-white/80' : 'text-gray-600'}`}>
                                {description}
                            </p>
                            <a href={link} className='flex items-center gap-2 text-sm mt-5'>
                                Read more <Image src={assets.right_arrow} alt='read more' className='w-4' />
                            </a>
                        </motion.div>
                    ))
                }

            </motion.div>

        </motion.div>
    )
}

export default Services
