import React from 'react'
import Image from 'next/image'
import { assets, infoList, toolsData } from '@/assets/assets'
import { motion } from 'motion/react'

function About({ isDarkMode }: { isDarkMode: boolean }) {
    return (
        <div id="about" className='w-full px-[12%] py-10 scroll-mt-20'>
            <motion.h4 className='text-center mb-2 text-lg font-ovo'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >Introduction</motion.h4>

            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='text-center text-5xl font-ovo'>About me</motion.h2>

            <motion.div className='flex w-full flex-col lg:flex-row gap-20 my-20'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className='w-64 sm:w-80 rounded-3xl max-w-none'>
                    <Image src={assets.manoshri_profile_img} alt='user' className='w-full rounded-3xl' />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className='flex-1'>
                    <p className='mb-4 max-w-2xl font-ovo'> I am originally from India and have been living in Norway with my family for the past four years. I hold a Master's degree in Computer Applications and have over five years of professional experience as a web developer in India, followed by freelance work on a variety of web projects.</p>
                    <p className='mb-4 max-w-2xl font-ovo'>From February to December 2025, I worked as a developer at Stem Agency AS in Oslo, where I had the opportunity to collaborate with a skilled and supportive team. In this role, I developed and maintained multiple WordPress websites, contributing to both new builds and ongoing improvements. This experience strengthened my technical skills as well as my ability to work effectively in a professional Norwegian work environment.</p>
                    <p className='mb-4 max-w-2xl font-ovo'>After relocating to Norway, I made a strong commitment to learning the Norwegian language and have achieved B1 proficiency in speaking, reading, writing, and listening. I am currently working toward B2 level, as I value clear communication and close collaboration with colleagues and believe language proficiency is key to successful integration in the workplace.</p>
                    <p className='mb-10 max-w-2xl font-ovo'>I am a motivated and adaptable professional with a strong interest in continuous learning and personal development. Outside of work, I enjoy baking—one of my personal passions—as well as listening to Indian music and traveling. These interests help me maintain creativity, balance, and a positive mindset, which I bring into my professional life.</p>

                    <motion.ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1 }}
                    >
                        {infoList.map(({ icon, iconDark, title, description }, index) => (
                            <motion.li
                                whileInView={{ scale: 1.05 }}
                                key={index} className={`border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer ${isDarkMode ? 'border-white bg-darkHover/50 hover:bg-(--dark-hover) -translate-y-1 hover:duration-500 hover:shadow hover:shadow-black ' : 'hover:bg-(--light-hover) hover:-translate-y-1 duration-500 shadow shadow-black '}`}>

                                <Image src={isDarkMode ? iconDark : icon} alt={title} className='w-7 mt-3' />
                                <h3 className={`my-4 font-semibold text-gray-700 ${isDarkMode ? 'text-white' : ''}`}>{title}</h3>
                                <p className={`text-gray-600 text-sm ${isDarkMode ? 'text-white/80' : ''}`}>{description}</p>
                            </motion.li>
                        ))}
                    </motion.ul>

                    <motion.h4 className={`my-6  font-ovo ${isDarkMode ? 'text-white/80' : 'text-gray-700'}`}
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 1.3 }}
                    >Tools I use</motion.h4>
                    <motion.ul className='flex items-center gap-3 sm:gap-5'
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 1.5 }}
                    >
                        {
                            toolsData.map((tool, index) => (
                                <motion.li
                                    whileHover={{ scale: 1.1 }}
                                    key={index} className={`flex item-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg curson-pointer hover:-translate-y-1 duration-500 ${isDarkMode ? 'border-white bg-darkHover/50' : ''}`}>
                                    <Image src={tool} alt='tool' className='w-10 sm:w-7 m-3' />
                                </motion.li>
                            ))
                        }

                    </motion.ul>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default About
