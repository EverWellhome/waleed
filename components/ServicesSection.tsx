import React from 'react';
import { Icon } from './Icons';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    title: "Companionship",
    description: "Meaningful conversation, games, reading, and emotional support to combat loneliness.",
    iconName: "Smile"
  },
  {
    title: "Personal Care",
    description: "Dignified assistance with bathing, dressing, grooming, and personal hygiene.",
    iconName: "Heart"
  },
  {
    title: "Meal Preparation",
    description: "Planning and cooking nutritious, delicious meals tailored to specific dietary needs.",
    iconName: "Utensils"
  },
  {
    title: "Medication Reminders",
    description: "Reliable reminders to ensure medications are taken on time and safely.",
    iconName: "Clock"
  },
  {
    title: "Light Housekeeping",
    description: "Keeping the home safe and tidy with laundry, dusting, and general organization.",
    iconName: "Home"
  },
  {
    title: "Respite Care",
    description: "Temporary relief for family caregivers to recharge and rest.",
    iconName: "ShieldCheck"
  },
  {
    title: "24/7 Care",
    description: "Around-the-clock peace of mind for those needing constant supervision.",
    iconName: "User"
  }
];

const ServicesSection: React.FC = () => {
  return (
    <section className="py-20 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-everwell-500 font-bold tracking-wider uppercase text-sm">Our Services</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-everwell-900">
            Comprehensive Care Tailored to You
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-500 font-medium">
            We provide a wide range of non-medical services designed to help seniors live independently and safely at home.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group bg-everwell-50 rounded-2xl p-6 transition-all duration-300 hover:bg-white hover:shadow-xl border border-everwell-100 hover:border-everwell-200"
            >
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-everwell-600 mb-6 group-hover:bg-everwell-600 group-hover:text-white transition-colors duration-300">
                <Icon name={service.iconName} size={24} />
              </div>
              <h3 className="text-xl font-bold text-everwell-800 mb-3">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm font-medium">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;