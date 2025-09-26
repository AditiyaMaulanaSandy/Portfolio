import emailjs from '@emailjs/browser';
import { emailConfig, EmailTemplateParams } from '../config/email';

export const sendEmail = async (formData: {
  name: string;
  email: string;
  message: string;
}): Promise<{ success: boolean; message: string }> => {
  try {
    // Validate form data
    if (!formData.name || !formData.email || !formData.message) {
      return {
        success: false,
        message: 'Mohon lengkapi semua field yang diperlukan.'
      };
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return {
        success: false,
        message: 'Format email tidak valid.'
      };
    }

    // Template parameters
    const templateParams: EmailTemplateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_email: 'aditiyamaulana04@gmail.com', // Your email address
    };

    // Send email using EmailJS
    const response = await emailjs.send(
      emailConfig.serviceId,
      emailConfig.templateId,
      templateParams,
      emailConfig.publicKey
    );

    if (response.status === 200) {
      return {
        success: true,
        message: 'Pesan berhasil dikirim! Saya akan membalas secepatnya.'
      };
    } else {
      throw new Error('Failed to send email');
    }
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      success: false,
      message: 'Terjadi kesalahan saat mengirim pesan. Silakan coba lagi atau hubungi langsung melalui email.'
    };
  }
};