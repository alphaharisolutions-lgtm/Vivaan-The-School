import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, MessageSquare, Navigation, Sparkles } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';
import confetti from 'canvas-confetti';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#0E4C92', '#F6C343'],
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white relative overflow-hidden border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-[#0E4C92] uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5 text-[#F6C343]" /> Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0A192F] tracking-tight">
            Visit Campus or Contact Admissions Desk
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
            Located in Srinivasa Nagar, Khammam. We welcome parents and prospective students for campus tours Monday through Saturday.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Info & Location Box */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#FCFAF7] border border-[#0E4C92]/15 rounded-3xl p-6 sm:p-8 space-y-6 shadow-md">
              <div className="space-y-1">
                <span className="text-[10px] font-extrabold text-[#E53935] uppercase tracking-widest bg-red-50 px-2.5 py-0.5 rounded-full border border-red-200">
                  {SCHOOL_INFO.group}
                </span>
                <h3 className="text-xl font-bold text-[#0E4C92]">{SCHOOL_INFO.name}</h3>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-700 font-medium">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#0E4C92] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-bold">Campus Address:</strong>
                    <span>{SCHOOL_INFO.fullAddress}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-bold">Admissions Helpline Numbers:</strong>
                    <div className="flex flex-col gap-1 pt-0.5">
                      <a href={`tel:${SCHOOL_INFO.phones[0]}`} className="text-[#0E4C92] font-bold hover:underline">
                        📱 +91 {SCHOOL_INFO.phones[0]}
                      </a>
                      <a href={`tel:${SCHOOL_INFO.phones[1]}`} className="text-[#0E4C92] font-bold hover:underline">
                        📱 +91 {SCHOOL_INFO.phones[1]}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-bold">Office Working Hours:</strong>
                    <span>{SCHOOL_INFO.workingHours}</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  href={`https://wa.me/${SCHOOL_INFO.whatsapp}?text=Hello%20Vivaan%20Admissions%20Team%2C%20I%20would%20like%20to%20enquire%20about%20admissions%20for%202026-27.`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition-colors flex items-center gap-2 shadow-sm"
                >
                  <MessageSquare className="w-4 h-4" /> WhatsApp Admissions
                </a>
                <a
                  href={`tel:${SCHOOL_INFO.phones[0]}`}
                  className="px-5 py-2.5 bg-[#0E4C92] hover:bg-[#0A386D] text-white rounded-xl text-xs font-bold transition-colors flex items-center gap-2 shadow-sm"
                >
                  <Phone className="w-4 h-4 text-[#F6C343]" /> Call Helpline
                </a>
              </div>
            </div>

            {/* Interactive Location Route Guide */}
            <div className="bg-white border border-slate-200 rounded-2xl p-5 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-[#0E4C92]">
                <Navigation className="w-4 h-4 text-[#F6C343]" />
                Khammam Landmark Route Guide
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Located near Srinivasa Nagar central junction. School bus pick-up points cover Wyra Road, Church Compound, Rotary Nagar, Khanapuram, and all major Khammam residential hubs.
              </p>
            </div>
          </div>

          {/* Right Form Box */}
          <div className="lg:col-span-7 bg-[#FCFAF7] border border-[#0E4C92]/15 rounded-3xl p-6 sm:p-8 shadow-xl">
            <h3 className="text-xl font-bold text-[#0E4C92] mb-1">Send Instant Enquiry Message</h3>
            <p className="text-xs text-slate-600 mb-6 font-medium">
              Have a question regarding fee structure, bus transport, or Grade VI–X IIT Foundation? Write to us below.
            </p>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. K. Srinivas Rao"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-[#0E4C92]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Mobile Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 93813 61354"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-[#0E4C92]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    placeholder="e.g. srinivas@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-[#0E4C92]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Message / Question</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Please mention class seeking admission for and any specific question..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full p-3.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-[#0E4C92] resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#0E4C92] hover:bg-[#0A386D] text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4 text-[#F6C343]" /> Send Message to Vivaan Admissions Desk
                </button>
              </form>
            ) : (
              <div className="text-center py-8 space-y-4">
                <CheckCircle2 className="w-14 h-14 text-emerald-500 mx-auto" />
                <h4 className="text-2xl font-bold text-[#0E4C92]">Message Sent Successfully!</h4>
                <p className="text-xs text-slate-600 max-w-md mx-auto">
                  Thank you, <strong className="text-slate-900">{formData.name}</strong>. Our admissions counselor will call you back shortly on <strong>{formData.phone}</strong>.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2 bg-[#0E4C92] text-white text-xs font-bold rounded-xl"
                >
                  Send Another Message
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
