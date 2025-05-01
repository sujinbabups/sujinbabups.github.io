import React, { useState } from 'react';
import { 
  PaperAirplaneIcon, 
  PhoneIcon 
} from '@heroicons/react/24/outline';
import { 
  FaInstagram, 
  FaLinkedin, 
  FaGithub,
  FaTwitter
} from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setStatus("Sending...");

      const response = await fetch(`${import.meta.env.VITE_API}/send-message`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      

      if (response.ok) {
        setStatus("Message sent successfully!");
        alert("Message sent successfully!")
        setFormData({ name: "", email: "", message: "" }); // Reset form
      } else {
        setStatus("Failed to send the message. Please try again.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus("Error sending the message. Please check the console for more details.");
    }
  };

  return (
    <div id="contact" className="min-h-screen bg-zinc-900 flex items-center justify-center text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Left Section */}
          <div className="contact-left space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Contact Me
            </h1>
            
            <div className="space-y-4">
              <p className="flex items-center gap-4">
                <PaperAirplaneIcon className="w-6 h-6 text-pink-500" />
                <span className="text-pink-300">sujinbabups@gmail.com</span>
              </p>
              <p className="flex items-center gap-4">
                <PhoneIcon className="w-6 h-6 text-pink-500" />
                <span className="text-pink-300">6238301853</span>
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-4 mt-6">
              <a 
                href="https://www.instagram.com/p.s_sujin/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block"
              >
                <div className="bg-pink-500 text-zinc-900 p-3 rounded-full shadow-lg hover:bg-pink-400 transition-colors">
                  <FaInstagram className="w-6 h-6" />
                </div>
              </a>
              <a 
                href="https://www.linkedin.com/in/sujin-babu-p-s-341457205/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block"
              >
                <div className="bg-pink-500 text-zinc-900 p-3 rounded-full shadow-lg hover:bg-pink-400 transition-colors">
                  <FaLinkedin className="w-6 h-6" />
                </div>
              </a>
              <a 
                href="https://github.com/sujinbabups" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block"
              >
                <div className="bg-pink-500 text-zinc-900 p-3 rounded-full shadow-lg hover:bg-pink-400 transition-colors">
                  <FaGithub className="w-6 h-6" />
                </div>
              </a>
              <a 
                href="https://twitter.com/p_s_Sujin" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block"
              >
                <div className="bg-pink-500 text-zinc-900 p-3 rounded-full shadow-lg hover:bg-pink-400 transition-colors">
                  <FaTwitter className="w-6 h-6" />
                </div>
              </a>
            </div>

            {/* Download CV Button */}
            <a 
              href="documents/sujin_resume1.pdf" 
              download 
              className="inline-block mt-6 bg-pink-500 text-zinc-900 px-6 py-3 rounded-lg font-semibold hover:bg-pink-400 transition-colors"
            >
              Download CV
            </a>
          </div>

          {/* Contact Right Section (Form) */}
          <div className="contact-right">
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full bg-pink-500/10 text-white px-4 py-3 rounded-lg border-2 border-pink-500/20 focus:outline-none focus:border-pink-500 transition-colors"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full bg-pink-500/10 text-white px-4 py-3 rounded-lg border-2 border-pink-500/20 focus:outline-none focus:border-pink-500 transition-colors"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="6"
                placeholder="Message"
                required
                className="w-full bg-pink-500/10 text-white px-4 py-3 rounded-lg border-2 border-pink-500/20 focus:outline-none focus:border-pink-500 transition-colors"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-pink-500 text-zinc-900 px-6 py-3 rounded-lg font-semibold hover:bg-pink-400 transition-colors"
              >
                Submit
              </button>
            </form>

            {/* Display status message */}
            {status && <p className="mt-4 text-pink-300">{status}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;