'use client';
import Image from 'next/image';
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
// eslint-disable-next-line no-unused-vars
import {
  FaPhoneAlt,
  FaLinkedin,
  FaSquareFacebook,
  FaGithubSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { IoLocationSharp } from 'react-icons/io5';
import { socials } from '../constants';
import './Footer.css';

import styles from '../styles';
import { footerVariants } from '../utils/motion';

function Footer() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://apply.devfolio.co/v2/sdk.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.paddings} py-8 relative`}
    >
      {/* <div className="footer-gradient" /> */}

      <div
        className={`${styles.innerWidth} mx-auto flex flex-col gap-8 footerMain`}
      >
        <div className="flex items-center justify-between flex-wrap gap-5">
          <h4 className="font-bold md:text-[64px] text-[44px] text-white">
            INNOVATE - HACK TO BUILD
          </h4>
          {/* <button type='button' className='flex items-center h-fit py-4 px-6 bg-[#25618b] rounded-[32px] gap-[12px]'>
          <img src='/headset.svg' alt='headset' className='w-[24px] h-[24px] object-contain' />
          <span className='font-normal text-[16px] text-white'>ENTER REALM</span>
        </button> */}
          <div
            className="apply-button"
            data-hackathon-slug="hackstreet24"
            data-button-theme="light"
            style={{ height: '44px', width: '312px' }}
          />
        </div>

        <div className="flex flex-col">
          <div className="mb-[50px] h-[2px] bg-white opacity-10" />
          <div className='flex gap-4'>
          <Image src="/Logo-jiit[1].png" alt="Logo" width={40} height={40} />
          <Image src="/JYC.png" alt="Logo" width={50} height={50} />
          </div>
          <div className="flex items-center justify-between flex-wrap gap-4 resp">
            <h4 className="font-extrabold text-[24px] text-white">
              INNOVATE 2.O 
            </h4>
            {/* <p className="font-bold text-[18px] text-white opacity-50">
              Contact Us:{' '}
              <a href="mailto:ieeesbjiit@gmail.com" id="gmail">
                ieeesbjiit@gmail.com
              </a>
            </p> */}
            <div className="font-bold text-[100%] text-white opacity-50 flex flex-row">
              <IoLocationSharp className="text-3xl" />
              <div>
                <p>INNOVATE 2.O</p>
                <p>Jaypee Institute Of Information Technology</p>
                <p>Sector-128, Noida </p>
                <p>India</p>
              </div>
            </div>

            <div className="font-bold text-[100%]  text-white opacity-50 contact">
              <div className="flex flex-row gap-3 items-center">
                <FaPhoneAlt />
                <p className='text-[15px]'>
                  Ayush Thakur:{' '}
                  <a href="tel:+918595939381">+91 85959 39381</a>
                </p>
              </div>
              <div className="flex flex-row gap-3 items-center">
                <FaPhoneAlt />
                <p className='text-[15px]'>
                  Ronak Khemka:{' '}
                  <a href="tel:+919660771231">+91 96607 71231</a>
                </p>
              </div>
              <div className="flex flex-row gap-3 items-center">
                <FaPhoneAlt />
                <p className='text-[15px]'>
                  Kavim Gupta:{' '}
                  <a href="tel:+919599584720">+91 95995 84720</a>
                </p>
              </div>
              <div className="flex flex-row gap-3 items-center">
                <MdEmail />
                <a href="mailto:jiityouthclub128@gmail.com" id="gmail">
                jiityouthclub128@gmail.com
                </a>
              </div>
            </div>

            <div className="flex flex-col font-bold text-[24px] text-white gap-4">
              <p>Find Us Here:</p>
              <div className="flex gap-4">
                {socials.map((social, index) => (
                  // eslint-disable-next-line react/button-has-type
                  <button className="social-btn" key={index}>
                    <a href={social.href} target="_main">
                      <img
                        key={social.name}
                        src={social.url}
                        alt={social.name}
                        className="w-[24px] h-[24px] object-contain cursor-pointer"
                      />
                    </a>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;
