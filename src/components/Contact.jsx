import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="w-full py-12 bg-gray-200">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-semibold text-center mb-12 text-[#00FF00]">
          Contact Us
        </h2>
        <div className="flex flex-col md:flex-row gap-12">
          <div className="flex-1">
            <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
            <p className="text-gray-600 mb-8">
              We'd love to hear from you! Whether you have a question about our
              products, pricing, or anything else, our team is ready to answer
              all your questions.
            </p>
            <form className="space-y-6">
              <div className="flex flex-col">
                <label htmlFor="name" className="text-gray-600 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="py-3 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-[#00FF00]"
                  placeholder="Your Name"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="text-gray-600 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="py-3 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-[#00FF00]"
                  placeholder="Your Email"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="message" className="text-gray-600 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  className="py-3 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-[#00FF00]"
                  placeholder="Your Message"
                  rows="5"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 px-4 bg-[#00FF00] text-white font-semibold rounded-md hover:bg-green-600 transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
            <p className="text-gray-600 mb-8">
              You can also reach us at our office or through the following
              contact information:
            </p>
            <ul className="space-y-4">
              <li className="flex items-center">
                <FaPhoneAlt className="text-[#00FF00] mr-3" />
                <span className="text-gray-600">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-[#00FF00] mr-3" />
                <span className="text-gray-600">info@gdiet.com</span>
              </li>
              <li className="flex items-center">
                <FaMapMarkerAlt className="text-[#00FF00] mr-3" />
                <span className="text-gray-600">
                  123 Healthy Way, Fitness City, USA
                </span>
              </li>
            </ul>
            <div className="mt-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238130.15441195582!2d78.90769511638383!3d21.161006047091657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c0a5a31faf13%3A0x19b37d06d0bb3e2b!2sNagpur%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sus!4v1719743838104!5m2!1sen!2sus"
                width="100%"
                height="350"
                allowFullScreen=""
                loading="lazy"
                className="border-0 rounded-md shadow-md"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
