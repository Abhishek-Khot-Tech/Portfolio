// SMTP Email Service Configuration
// Note: This is the frontend configuration. For security, implement the actual SMTP logic on the backend.

export const emailConfig = {
  // Replace with your SMTP credentials
  smtpHost: 'smtp.gmail.com', // or your SMTP provider
  smtpPort: 587,
  smtpUser: '___________', // Your email address
  smtpPassword: '___________', // Your app password (not regular password)
  
  // Email template configuration
  fromName: 'Portfolio Contact Form',
  subject: 'New Contact Form Submission',
};

// Frontend email sending function
export const sendEmail = async (formData) => {
  try {
    // This should call your backend API endpoint
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to: emailConfig.smtpUser,
        from: formData.email,
        subject: `${emailConfig.subject} - ${formData.fullname}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #00ff88; border-bottom: 2px solid #ffff00; padding-bottom: 10px;">
              New Contact Form Submission
            </h2>
            <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong>Name:</strong> ${formData.fullname}</p>
              <p><strong>Email:</strong> ${formData.email}</p>
              <p><strong>Message:</strong></p>
              <div style="background: white; padding: 15px; border-radius: 4px; margin-top: 10px;">
                ${formData.message.replace(/\n/g, '<br>')}
              </div>
            </div>
            <p style="color: #666; font-size: 12px;">
              This email was sent from your portfolio contact form.
            </p>
          </div>
        `,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to send email');
    }

    return await response.json();
  } catch (error) {
    console.error('Email sending error:', error);
    throw error;
  }
};

// Alternative: Direct SMTP using EmailJS (client-side solution)
export const sendEmailWithEmailJS = async (formData) => {
  // Configure EmailJS with your service ID, template ID, and user ID
  const emailJSConfig = {
    serviceId: 'your_service_id',
    templateId: 'your_template_id',
    userId: 'your_user_id',
  };

  try {
    const response = await emailjs.send(
      emailJSConfig.serviceId,
      emailJSConfig.templateId,
      {
        from_name: formData.fullname,
        from_email: formData.email,
        message: formData.message,
        to_email: emailConfig.smtpUser,
      },
      emailJSConfig.userId
    );

    return response;
  } catch (error) {
    console.error('EmailJS error:', error);
    throw error;
  }
};