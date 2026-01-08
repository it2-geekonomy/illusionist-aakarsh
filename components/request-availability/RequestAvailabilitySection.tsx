"use client";
import { useState } from "react";
import { H2, P } from "../typography/typography";

export default function RequestAvailabilitySection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    eventType: "",
    eventLocation: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // You can add API call here
  };

  return (
    <section className="relative bg-black text-white pt-6 sm:pt-12 md:pt-16 lg:pt-20 pb-10 sm:pb-16 md:pb-20 lg:pb-24 overflow-hidden">
      {/* Background Image - Magician with Cards */}
      <div className="absolute inset-0">
        <div 
          className="absolute left-0 top-0 bottom-0 w-full lg:w-1/2 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url("/request-availability background image/request-availability background image1.webp")`,
            filter: 'brightness(0.4)',
          }}
        >
          {/* Gradient overlay to fade image on the right */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/45 to-transparent"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:pl-24 xl:pl-32 lg:pr-12">
        {/* Title */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16 px-4 sm:px-6 md:px-8">
          <H2 className="text-[clamp(18px,4vw,24px)] sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl font-bold uppercase tracking-tight sm:tracking-wider text-white leading-tight sm:leading-snug md:leading-normal whitespace-normal break-words">
            Request Availability &<br className="sm:hidden" /> Corporate Proposal
          </H2>
        </div>

        {/* Form */}
        <div className="max-w-5xl mx-auto lg:ml-auto lg:mr-0">
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            {/* Two Column Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
              {/* Left Column */}
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    required
                    style={{ color: 'white' }}
                    className="w-full bg-black border border-white text-white placeholder:text-[#f5c518] px-4 py-3 rounded-none focus:outline-none focus:border-[#f5c518] transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                    style={{ color: 'white' }}
                    className="w-full bg-black border border-white text-white placeholder:text-[#f5c518] px-4 py-3 rounded-none focus:outline-none focus:border-[#f5c518] transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    id="eventType"
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    placeholder="Event Type"
                    style={{ color: 'white' }}
                    className="w-full bg-black border border-white text-white placeholder:text-[#f5c518] px-4 py-3 rounded-none focus:outline-none focus:border-[#f5c518] transition-colors"
                  />
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company"
                    style={{ color: 'white' }}
                    className="w-full bg-black border border-white text-white placeholder:text-[#f5c518] px-4 py-3 rounded-none focus:outline-none focus:border-[#f5c518] transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone"
                    style={{ color: 'white' }}
                    className="w-full bg-black border border-white text-white placeholder:text-[#f5c518] px-4 py-3 rounded-none focus:outline-none focus:border-[#f5c518] transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    id="eventLocation"
                    name="eventLocation"
                    value={formData.eventLocation}
                    onChange={handleChange}
                    placeholder="Event Location"
                    style={{ color: 'white' }}
                    className="w-full bg-black border border-white text-white placeholder:text-[#f5c518] px-4 py-3 rounded-none focus:outline-none focus:border-[#f5c518] transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* Message - Full Width */}
            <div>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                rows={6}
                style={{ color: 'white' }}
                className="w-full bg-black border border-white text-white placeholder:text-[#f5c518] px-4 py-3 rounded-none focus:outline-none focus:border-[#f5c518] transition-colors resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="flex flex-col items-center gap-4">
              <button
                type="submit"
                className="bg-[#f5c518] text-black font-bold py-3 sm:py-4 px-8 sm:px-12 rounded-lg text-lg sm:text-xl md:text-2xl hover:bg-[#e5b508] transition-colors"
              >
                Submit Request
              </button>
              <P className="text-white font-bold text-lg sm:text-xl md:text-2xl">
                Response Within 12 Business Hours
              </P>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

