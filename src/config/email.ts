// Email configuration for EmailJS
export const emailConfig = {
  // Menggunakan environment variables untuk keamanan
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID',
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID',
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY',
};

// Template parameters yang akan dikirim ke EmailJS
export interface EmailTemplateParams extends Record<string, unknown> {
  from_name: string;
  from_email: string;
  message: string;
  to_email: string;
}