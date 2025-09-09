import React, { useContext, useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { NARRATORS } from '../constants';
import { AppContext } from '../App';
import { NarratorRole } from '../types';

// This informs TypeScript that the 'emailjs' object is available globally
// because it's loaded from a script tag in index.html.
declare const emailjs: any;

const MAX_NAME_LENGTH = 100;
const MAX_EMAIL_LENGTH = 254;
const MAX_MESSAGE_LENGTH = 2000;

const ContactInfoCard: React.FC<{ title: string; email: string; children: React.ReactNode }> = ({ title, email, children }) => (
    <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
        <h3 className="font-display text-xl font-semibold text-primary">{title}</h3>
        <p className="mt-2 text-muted-foreground">{children}</p>
        <a href={`mailto:${email}`} className="mt-4 inline-block font-semibold text-accent hover:underline">{email}</a>
    </div>
);

const ContactPage: React.FC = () => {
    const { language } = useContext(AppContext);
    const narratorData = NARRATORS[NarratorRole.Jobseeker]; // Use a default narrator for this page
    
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [showSuccessPopup, setShowSuccessPopup] = useState(false);
    const [isSending, setIsSending] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setShowSuccessPopup(false);
            }
        };
        if (showSuccessPopup) {
            document.addEventListener('keydown', handleKeyDown);
        }
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [showSuccessPopup]);


    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.message) return;

        setIsSending(true);
        setError('');

        const serviceID = 'service_82b993q';
        const templateID = 'template_6hz721d';
        const publicKey = 'u2Pl_xJ206WLmldI2';

        const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            to_name: 'NeuroPilot Team',
            message: formData.message,
        };

        emailjs.send(serviceID, templateID, templateParams, publicKey)
            .then((response: any) => {
                console.log('SUCCESS!', response.status, response.text);
                setFormData({ name: '', email: '', message: '' });
                setShowSuccessPopup(true);
            })
            .catch((err: { status: number, text: string }) => {
                console.error('EmailJS FAILED...', err);
                const errorMessage = err.text || 'An unknown error occurred. Please check your EmailJS dashboard configuration.';
                setError(`Sorry, something went wrong. ${errorMessage}`);
            })
            .finally(() => {
                setIsSending(false);
            });
    };

    return (
        <Layout>
            <div className="bg-card p-8 md:p-12 rounded-2xl shadow-lg">
                <h1 className="font-display text-4xl md:text-5xl font-extrabold text-foreground text-center mb-12">
                    Get In Touch
                </h1>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="relative">
                        <div className="absolute -top-16 -right-8 flex items-end">
                             <div className="relative mr-2">
                                <div className="bg-primary/10 text-primary text-sm font-semibold px-4 py-2 rounded-lg shadow-md">
                                    Need help? Just drop us a message here.
                                    <div className="absolute right-0 bottom-0 w-0 h-0 border-l-8 border-l-transparent border-t-8 border-t-primary/10 transform translate-y-full -translate-x-4"></div>
                                </div>
                            </div>
                            <img src={narratorData.avatars.idle} alt="Friendly Buddy" className="w-20 h-20 rounded-full border-4 border-card shadow-lg transform -scale-x-100 object-cover bg-muted" />
                        </div>

                        <h2 className="font-display text-3xl font-bold mb-6">Send Us a Message</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-muted-foreground">Name</label>
                                <input type="text" id="name" required placeholder="Your Name" value={formData.name} onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 bg-background border border-border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring text-foreground placeholder:text-muted-foreground" maxLength={MAX_NAME_LENGTH} />
                                <p className="text-right text-xs text-muted-foreground mt-1">{formData.name.length} / {MAX_NAME_LENGTH}</p>
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-muted-foreground">Email</label>
                                <input type="email" id="email" required placeholder="your.email@example.com" value={formData.email} onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 bg-background border border-border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring text-foreground placeholder:text-muted-foreground" maxLength={MAX_EMAIL_LENGTH} />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-muted-foreground">Message</label>
                                <textarea id="message" rows={5} required placeholder="How can we help you?" value={formData.message} onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 bg-background border border-border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring text-foreground placeholder:text-muted-foreground" maxLength={MAX_MESSAGE_LENGTH}></textarea>
                                <div aria-live="polite">
                                  <p className={`text-right text-xs mt-1 ${formData.message.length > MAX_MESSAGE_LENGTH - 100 ? 'text-red-600 font-bold' : 'text-muted-foreground'}`}>
                                      {formData.message.length} / {MAX_MESSAGE_LENGTH}
                                  </p>
                                </div>
                            </div>
                            <div>
                                {error && <p className="text-red-600 text-sm mb-4">{error}</p>}
                                <button type="submit" disabled={isSending} className="w-full px-6 py-3 bg-primary text-primary-foreground font-bold rounded-md hover:bg-primary/90 transition-colors shadow-md disabled:bg-muted disabled:cursor-not-allowed">
                                    {isSending ? 'Sending...' : 'Submit'}
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="space-y-6">
                        <h2 className="font-display text-3xl font-bold mb-6">Contact Information</h2>
                        <ContactInfoCard title="General Inquiries" email="neuropilotaicc@gmail.com">
                            For technical support, partnerships, research collaborations, or any other questions, please reach out to us. We'd love to hear from you!
                        </ContactInfoCard>
                        <div className="mt-6 p-4 bg-primary/10 rounded-lg text-primary">
                            <strong>Accessibility Note:</strong> We respond within 48 hours. All inquiries are confidential and respectful.
                        </div>
                    </div>
                </div>
            </div>

            {/* Success Popup Modal */}
            {showSuccessPopup && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-[101] p-4 animate-fadeIn"
                    onClick={() => setShowSuccessPopup(false)}
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="success-popup-title"
                >
                    <div 
                        className="bg-card p-8 rounded-xl shadow-2xl text-center max-w-sm w-full transform transition-all animate-fadeInUp"
                        onClick={e => e.stopPropagation()}
                    >
                        <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
                          <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                        </div>
                        <h2 id="success-popup-title" className="text-2xl font-display font-bold text-card-foreground mb-2">Message Sent!</h2>
                        <p className="text-muted-foreground mb-6">
                           Thank you for reaching out. We've received your message and will get back to you shortly.
                        </p>
                        <button
                            onClick={() => setShowSuccessPopup(false)}
                            className="w-full px-6 py-2 bg-primary text-primary-foreground font-bold rounded-md hover:bg-primary/90 transition-colors"
                        >
                            Got it
                        </button>
                    </div>
                </div>
            )}
        </Layout>
    );
};

export default ContactPage;