"use client";
import React, { useState } from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import { motion } from 'motion/react'

function Contact({ isDarkMode }: { isDarkMode: boolean }) {
    const [result, setResult] = useState("");

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setResult("Sending....");
        const form = event.currentTarget;

        const formData = new FormData(form);

        formData.append("access_key", "75be8612-6fc5-4ffb-8247-f05a47772b0c");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            form.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            id='contact' className={`w-full px-[12%] py-10 scroll-mt-20  ${isDarkMode ? 'bg-none' : 'bg-[url("/footer-bg-color.png")] bg-center bg-size-[90%_auto]'}`}>

            <motion.h4
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className='text-center mb-2 text-lg font-ovo'>Connect with me</motion.h4>

            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className='text-center text-5xl font-ovo'>Get in touch</motion.h2>

            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className='text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo'>I'd love to hear from you! If you have any questions, comments, or feedback, please use the form below.</motion.p>

            <motion.form
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                onSubmit={onSubmit} className='max-w-2xl mx-auto'>
                <div className='grid grid-cols-auto gap-6 mt-10 mb-8'>

                    <motion.input
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        type="text" placeholder='Enter your name' required className={`flex-1 p-3 outline-none border-[0.5] border-gray-400 rounded-md  ${isDarkMode ? 'text-white/50 bg-(--dark-hover) border-white/90' : 'bg-white'}`} name='name' />

                    <motion.input
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        type="email" placeholder='Enter your email' required className={`flex-1 p-3 outline-none border-[0.5] border-gray-400 rounded-md  ${isDarkMode ? 'text-white/50 bg-(--dark-hover) border-white/90' : 'bg-white'}`} name='email' />

                </div>
                <motion.textarea
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    rows={6} id="" placeholder='Enter your message' required className={`w-full p-4 outline-none border-[0.5px] ${isDarkMode ? 'bg-(--dark-hover) border-white/90' : 'border-gray-400 bg-white'}`} name='message'></motion.textarea>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 , delay: 1.5}}
                    type='submit' className={`py-3 px-8 w-max flex items-center justify-between gap-2  text-white rounded-full mx-auto  duration-500 border ${isDarkMode ? 'text-white bg-transparent border-white/90 hover:bg-(--dark-hover)' : 'bg-black/80 hover:bg-black'}`}>Submit now <Image src={assets.right_arrow_white} alt='' className='w-4' /></motion.button>

                <p className='mt'>{result}</p>
            </motion.form>
        </motion.div>
    )
}

export default Contact
