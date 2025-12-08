import React from 'react';
import { Icon } from './Icons';

const ContactSection: React.FC = () => {
  return (
    <section className="py-20 bg-everwell-100" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Contact Info */}
          <div>
            <span className="text-everwell-500 font-bold tracking-wider uppercase text-sm">Get in Touch</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-everwell-700">
              Start Your Care Journey Today
            </h2>
            <p className="mt-4 text-lg text-slate-600 mb-8 font-medium">
              We offer a free, no-obligation consultation to discuss your loved one's needs and how we can help.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-white p-3 rounded-lg shadow-sm text-everwell-500">
                  <Icon name="Phone" size={24} />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-bold text-slate-500 uppercase">Call Us</p>
                  <p className="text-xl font-bold text-everwell-900">(910) 317-3721</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-white p-3 rounded-lg shadow-sm text-everwell-500">
                  <Icon name="Mail" size={24} />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-bold text-slate-500 uppercase">Email Us</p>
                  <p className="text-xl font-bold text-everwell-900">Info@everwellhome.care</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-white p-3 rounded-lg shadow-sm text-everwell-500">
                  <Icon name="MapPin" size={24} />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-bold text-slate-500 uppercase">Visit Our Office</p>
                  <p className="text-xl font-bold text-everwell-900">35 Village Road<br/>Middleton, MA 01949</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10 p-6 bg-white rounded-2xl border border-everwell-200 shadow-sm">
               <div className="flex items-center gap-3 mb-2">
                   <Icon name="Bot" className="text-everwell-500" />
                   <h4 className="font-bold text-everwell-700">Need immediate answers?</h4>
               </div>
               <p className="text-slate-600 text-sm">
                   Try chatting with "Eve", our virtual assistant in the bottom right corner. She can answer general questions about our services instantly.
               </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-10 border border-everwell-100">
            <h3 className="text-2xl font-bold text-everwell-700 mb-6">Send Us a Message</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-bold text-slate-700 mb-1">First Name</label>
                  <input type="text" id="firstName" className="w-full rounded-lg border-slate-200 shadow-sm focus:border-everwell-500 focus:ring-everwell-500 py-3 px-4 border bg-everwell-50/50" placeholder="John" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-bold text-slate-700 mb-1">Last Name</label>
                  <input type="text" id="lastName" className="w-full rounded-lg border-slate-200 shadow-sm focus:border-everwell-500 focus:ring-everwell-500 py-3 px-4 border bg-everwell-50/50" placeholder="Doe" />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-1">Email Address</label>
                <input type="email" id="email" className="w-full rounded-lg border-slate-200 shadow-sm focus:border-everwell-500 focus:ring-everwell-500 py-3 px-4 border bg-everwell-50/50" placeholder="john@example.com" />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-bold text-slate-700 mb-1">Phone Number</label>
                <input type="tel" id="phone" className="w-full rounded-lg border-slate-200 shadow-sm focus:border-everwell-500 focus:ring-everwell-500 py-3 px-4 border bg-everwell-50/50" placeholder="(910) 317-3721" />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-bold text-slate-700 mb-1">Service Needed</label>
                <select id="service" className="w-full rounded-lg border-slate-200 shadow-sm focus:border-everwell-500 focus:ring-everwell-500 py-3 px-4 border bg-everwell-50/50">
                  <option>Companionship</option>
                  <option>Personal Care</option>
                  <option>Meal Preparation</option>
                  <option>Respite Care</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-1">How can we help?</label>
                <textarea id="message" rows={4} className="w-full rounded-lg border-slate-200 shadow-sm focus:border-everwell-500 focus:ring-everwell-500 py-3 px-4 border bg-everwell-50/50" placeholder="Tell us about your loved one's needs..."></textarea>
              </div>

              <button type="submit" className="w-full bg-everwell-700 text-white font-bold py-4 rounded-lg hover:bg-everwell-800 transition-colors shadow-lg uppercase tracking-wide">
                Request Consultation
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;