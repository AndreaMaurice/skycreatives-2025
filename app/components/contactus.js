'use client';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaLocationDot } from "react-icons/fa6";
import { MdMail } from "react-icons/md";

export default function ContactUs({ contact, contactdesc, contactform }) {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm(
        'service_47dvk6i',     
        'template_att2szo',   
        form.current,
        'I1wwAil3Kq5khDqmu'
      )
      .then((result) => {
          alert('Message sent successfully!');
      }, (error) => {
          console.log('Error sending email:', error.text);
          alert('Failed to send message. Please try again.');
      });
  
      e.target.reset();
    };

    return (
        <div className='container py-[100px]'>
        <div className="grid grid-cols-2 gap-6" id="contact">
        <div>
        <h2 className="text-4xl font-open-sans font-bold">{contact}</h2>
        <h6 className="font-normal font-pt-sans" style={{ whiteSpace: 'pre-line' }}>{contactdesc}</h6>
        <div className='flex items-center gap-2 pt-4'>
            <MdMail />
            <p>info@skycreatives.com</p>
        </div>
        <div className='flex items-center gap-2 pt-0.5'>
            <FaLocationDot />
            <p>Green Bay, Wisconsin</p>
        </div>
        </div>
        <div className="flex flex-col mx-auto pt-[10px]">
        <h3 className="text-2xl font-open-sans font-bold">{contactform}</h3>
        <form ref={form} onSubmit={sendEmail} className="space-y-4 max-w-md mx-auto mt-1">
        <input type="text" name="name" placeholder="Your Name" required className="w-full border-2 p-2 rounded border-slate-200 bg-white focus:outline-none focus:border-sky-500" />
        <input type="email" name="email" placeholder="Your Email" required className="w-full border-2 p-2 rounded bg-white border-slate-200 focus:outline-none focus:border-sky-500" />
        <textarea name="message" placeholder="Your Message" required className="w-full border-2 p-2 rounded bg-white border-slate-200 focus:outline-none focus:border-sky-500" />
        <div className="flex justify-end">
            <button type="submit" className="bg-white hover:bg-sky-500 hover:text-white group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md border border-neutral-200 px-6 font-medium text-neutral-600 transition-all duration-100 [box-shadow:5px_5px_rgb(82_82_82)] hover:[box-shadow:5px_5px_#0069a8] active:translate-x-[3px] active:translate-y-[3px] active:[box-shadow:0px_0px_rgb(82_82_82)]">
            Send
            </button>
        </div>
        </form>
        </div>
        </div>
        </div>
    );
}