# Gmail Email Setup Guide

This guide will help you configure Gmail to send emails from your contact form.

## Prerequisites
- Gmail account (fahicartmv@gmail.com)
- Access to Google Account settings

## Step-by-Step Setup

### 1. Enable 2-Step Verification

1. Go to your Google Account: https://myaccount.google.com/security
2. Under "How you sign in to Google", click on **2-Step Verification**
3. Follow the prompts to set it up (you'll need your phone)
4. Complete the setup process

### 2. Generate App Password

1. After enabling 2-Step Verification, go to: https://myaccount.google.com/apppasswords
   - Or: Google Account → Security → 2-Step Verification → App passwords (at the bottom)
2. You might need to sign in again
3. Under "Select app", choose **Mail**
4. Under "Select device", choose **Other (Custom name)**
5. Type: `Fahicart Website` or any name you prefer
6. Click **Generate**
7. Google will display a 16-character password (example: `abcd efgh ijkl mnop`)
8. **Copy this password immediately** - you won't be able to see it again!

### 3. Configure Environment Variables

1. Open `.env.local` in your project root
2. Replace `your_app_password_here` with the 16-character password (remove spaces)
3. Set `GMAIL_TO` to the email address where you want to receive inquiries

```env
GMAIL_USER=fahicartmv@gmail.com
GMAIL_APP_PASSWORD=abcdefghijklmnop
GMAIL_TO=fahicartmv@gmail.com
```

**Important:** 
- `GMAIL_USER`: The Gmail account used to SEND emails
- `GMAIL_APP_PASSWORD`: The 16-character App Password (remove all spaces)
- `GMAIL_TO`: Where customer inquiries will be sent (can be different from GMAIL_USER)
- DO NOT use your regular Gmail password
- DO NOT commit `.env.local` to git (it's already in .gitignore)

### 4. Test the Setup

1. Start your development server:
   ```bash
   pnpm dev
   ```

2. Navigate to http://localhost:3000

3. Fill out and submit the contact form

4. Check:
   - Your terminal for any errors
   - The GMAIL_TO inbox for the inquiry notification email
   - Verify customer's name, email, phone, and message are all included

## What Happens When Form is Submitted?

1. **Rate Limiting**: Maximum 5 emails per IP address per hour
2. **Validation**: Name, email, phone, and message are validated
3. **One Email Sent**:
   - **To GMAIL_TO**: Contains customer's name, email, phone, and message
   - No confirmation email is sent to the customer

## Email Templates

### Email to Your Team (GMAIL_TO)
- Subject: "New Contact Form Submission from [Name]"
- Contains: Name, Email, Phone, Message
- Professionally formatted HTML email with clickable email and phone links

## Troubleshooting

### "Email service not configured" Error
- Make sure `.env.local` exists with correct values (GMAIL_USER, GMAIL_APP_PASSWORD, GMAIL_TO)
- Restart your dev server after adding environment variables
- Check that variable names match exactly: `GMAIL_USER`, `GMAIL_APP_PASSWORD`, and `GMAIL_TO`

### "Authentication failed" Error
- Verify 2-Step Verification is enabled
- Generate a new App Password
- Make sure you're using the App Password, not your regular password
- Remove any spaces from the password in `.env.local`

### "Too many requests" Error
- Rate limit exceeded (5 per hour per IP)
- Wait an hour or restart your dev server to clear the in-memory limit
- For production, consider using Redis for rate limiting

### Emails Not Arriving
- Check the GMAIL_TO inbox and spam folder
- Verify `GMAIL_USER` and `GMAIL_TO` emails are correct
- Test sending to a different email address
- Check your terminal for error messages
- Ensure the phone number field was filled out (it's required)

## Security Best Practices

✅ **DO:**
- Use App Passwords (never your main password)
- Keep `.env.local` in `.gitignore`
- Enable 2-Step Verification
- Use environment variables for all secrets

❌ **DON'T:**
- Commit `.env.local` to git
- Share your App Password
- Use your main Gmail password in the app
- Hard-code credentials in your code

## Production Deployment

When deploying to production (Vercel, Netlify, etc.):

1. Add environment variables in your hosting platform's dashboard:
   - `GMAIL_USER=fahicartmv@gmail.com`
   - `GMAIL_APP_PASSWORD=your_app_password`
   - `GMAIL_TO=fahicartmv@gmail.com` (or your support email)

2. **For Vercel:**
   - Project Settings → Environment Variables
   - Add all three variables (GMAIL_USER, GMAIL_APP_PASSWORD, GMAIL_TO)
   - Redeploy your application

3. **For Netlify:**
   - Site Settings → Environment Variables
   - Add all three variables (GMAIL_USER, GMAIL_APP_PASSWORD, GMAIL_TO)
   - Trigger new deployment

## Alternative: Using a Different Email Provider

If you prefer not to use Gmail, you can modify `app/api/contact/route.ts`:

```typescript
const transporter = nodemailer.createTransport({
  host: "smtp.example.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
})
```

Popular alternatives:
- **SendGrid**: Better deliverability, free tier available
- **AWS SES**: Highly scalable, pay-as-you-go
- **Resend**: Developer-friendly, modern API
- **Mailgun**: Reliable, good for transactional emails

## Need Help?

If you encounter any issues:
1. Check the terminal for error messages
2. Review the troubleshooting section above
3. Verify all environment variables are set correctly
4. Make sure your development server was restarted after adding env vars

## Files Modified

- `app/api/contact/route.ts` - API endpoint for sending emails
- `components/contact.tsx` - Contact form with API integration
- `app/layout.tsx` - Added Toaster component for notifications
- `.env.local` - Environment variables (not committed to git)
- `.gitignore` - Already configured to exclude .env files

---

**Last Updated:** November 23, 2025
