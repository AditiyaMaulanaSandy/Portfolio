// Email configuration for EmailJS
export const emailConfig = {
  // Menggunakan environment variables untuk keamanan
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_35ekctp',
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_8vi7lh9',
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'OS3uQw4ej1A-92Ypt',
};

// Template parameters yang akan dikirim ke EmailJS
export interface EmailTemplateParams extends Record<string, unknown> {
  from_name: string;
  from_email: string;
  message: string;
  to_email: string;
  sent_time: string;
  sent_date: string;
  sender_location: string;
  sender_country: string;
}