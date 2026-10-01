'use client';
import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-hero-gradient py-20 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <p className="section-tag justify-center text-green-300">
            <span className="w-8 h-0.5 bg-green-400" />
            Contact Us
            <span className="w-8 h-0.5 bg-green-400" />
          </p>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-4">
            Get in Touch
          </h1>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto">
            Have questions about our products or want to place an order? Our team is here to help.
          </p>
        </div>
        <div className="wave">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 60L48 50C96 40 192 20 288 15C384 10 480 20 576 25C672 30 768 30 864 25C960 20 1056 10 1152 10C1248 10 1344 20 1392 25L1440 30V60H0Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact info */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="font-display text-2xl font-bold text-dark-900 mb-2">
                  Contact Information
                </h2>
                <p className="text-gray-600 text-sm">
                  Reach out to us through any of the following channels.
                </p>
              </div>

              {[
                {
                  icon: Phone,
                  label: 'Phone',
                  value: '+91-0000000000',
                  href: 'tel:+91-0000000000',
                  color: 'bg-green-50 text-primary-500',
                },
                {
                  icon: Mail,
                  label: 'Email',
                  value: 'info@dieusterimed.com',
                  href: 'mailto:info@dieusterimed.com',
                  color: 'bg-blue-50 text-blue-500',
                },
                {
                  icon: MapPin,
                  label: 'Address',
                  value: 'Dieu SteriMed Pvt. Ltd., India',
                  href: '#',
                  color: 'bg-red-50 text-red-500',
                },
                {
                  icon: Clock,
                  label: 'Business Hours',
                  value: 'Mon–Sat: 9:00 AM – 6:00 PM IST',
                  href: '#',
                  color: 'bg-amber-50 text-amber-500',
                },
              ].map(({ icon: Icon, label, value, href, color }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-start gap-4 p-5 rounded-2xl border border-gray-100 hover:border-primary-200 hover:shadow-lg transition-all group"
                >
                  <div
                    className={`w-11 h-11 ${color} rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}
                  >
                    <Icon size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-0.5">
                      {label}
                    </p>
                    <p className="font-semibold text-dark-900 text-sm">{value}</p>
                  </div>
                </a>
              ))}

              <div className="p-6 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl text-white">
                <h3 className="font-display font-bold text-lg mb-2">Partner with Us</h3>
                <p className="text-green-100 text-sm leading-relaxed">
                  Looking to become a distributor or authorized partner? We welcome partnerships
                  across India and internationally.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="h-full flex items-center justify-center min-h-[400px]">
                  <div className="text-center p-12">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle size={40} className="text-primary-500" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-dark-900 mb-3">
                      Message Sent!
                    </h3>
                    <p className="text-gray-600">
                      Thank you for reaching out. Our team will get back to you within 24 business
                      hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-6 text-primary-600 font-semibold hover:underline text-sm"
                    >
                      Send another message
                    </button>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-gray-50 rounded-3xl p-8 border border-gray-100"
                >
                  <h2 className="font-display text-2xl font-bold text-dark-900 mb-6">
                    Send Us a Message
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-5">
                    {[
                      {
                        name: 'name',
                        label: 'Full Name *',
                        type: 'text',
                        placeholder: 'Dr. Rajesh Kumar',
                      },
                      {
                        name: 'email',
                        label: 'Email Address *',
                        type: 'email',
                        placeholder: 'you@hospital.com',
                      },
                      {
                        name: 'phone',
                        label: 'Phone Number',
                        type: 'tel',
                        placeholder: '+91 98765 43210',
                      },
                      {
                        name: 'organization',
                        label: 'Organization / Hospital',
                        type: 'text',
                        placeholder: 'Apollo Hospital',
                      },
                    ].map((field) => (
                      <div key={field.name}>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                          {field.label}
                        </label>
                        <input
                          type={field.type}
                          placeholder={field.placeholder}
                          required={field.label.includes('*')}
                          value={formData[field.name as keyof typeof formData]}
                          onChange={(e) =>
                            setFormData((prev) => ({ ...prev, [field.name]: e.target.value }))
                          }
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-all text-sm"
                        />
                      </div>
                    ))}

                    <div className="sm:col-span-2">
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                        Subject *
                      </label>
                      <select
                        required
                        value={formData.subject}
                        onChange={(e) =>
                          setFormData((prev) => ({ ...prev, subject: e.target.value }))
                        }
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-all text-sm"
                      >
                        <option value="">Select a subject</option>
                        <option>Product Inquiry</option>
                        <option>Request for Quotation</option>
                        <option>Sample Request</option>
                        <option>Technical Support</option>
                        <option>Distributorship Inquiry</option>
                        <option>General Query</option>
                      </select>
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                        Message *
                      </label>
                      <textarea
                        required
                        rows={5}
                        placeholder="Please describe your requirements in detail..."
                        value={formData.message}
                        onChange={(e) =>
                          setFormData((prev) => ({ ...prev, message: e.target.value }))
                        }
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-all text-sm resize-none"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="mt-6 w-full flex items-center justify-center gap-2 bg-primary-500 hover:bg-primary-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-primary-500/20 transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <Send size={18} />
                    Send Message
                  </button>

                  <p className="text-xs text-gray-400 text-center mt-4">
                    We respect your privacy. Your information will never be shared with third
                    parties.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
