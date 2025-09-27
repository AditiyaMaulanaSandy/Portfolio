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

    // Check if EmailJS is configured
    if (!emailConfig.serviceId || !emailConfig.templateId || !emailConfig.publicKey) {
      return {
        success: false,
        message: 'EmailJS belum dikonfigurasi. Silakan setup credentials di file .env.local terlebih dahulu.'
      };
    }

    // Generate timestamp for email
    const now = new Date();
    const dateOptions: Intl.DateTimeFormatOptions = {
      timeZone: 'Asia/Jakarta',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    const timeOptions: Intl.DateTimeFormatOptions = {
      timeZone: 'Asia/Jakarta',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    };

    // Get sender location information
    let locationInfo = {
      location: 'Tidak diketahui',
      country: 'Tidak diketahui'
    };

    try {
      // Get location info from ipapi.co (free service)
      const response = await fetch('https://ipapi.co/json/');
      if (response.ok) {
        const data = await response.json();
        locationInfo = {
          location: `${data.city || 'Tidak diketahui'}, ${data.region || ''}`.trim().replace(/,$/, ''),
          country: data.country_name || 'Tidak diketahui'
        };
      }
    } catch (error) {
      console.warn('Could not get location info:', error);
      // Keep default values
    }

    // Template parameters
    const templateParams: EmailTemplateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_email: 'aditiyamaulana04@gmail.com', // Your email address
      sent_time: now.toLocaleTimeString('id-ID', timeOptions),
      sent_date: now.toLocaleDateString('id-ID', dateOptions),
      sender_location: locationInfo.location,
      sender_country: locationInfo.country,
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