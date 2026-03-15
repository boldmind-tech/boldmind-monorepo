import { WelcomeEmail } from '../src/templates/WelcomeEmail';
import * as React from 'react';
import * as dotenv from 'dotenv';
import path from 'path';

// Load .env from root
dotenv.config({ path: path.resolve(__dirname, '../../../.env') });

async function test() {
    console.log('🧪 Starting email verification test...');
    console.log('🔑 RESEND_API_KEY present:', !!process.env['RESEND_API_KEY']);

    const { emailService } = await import('../src/service');

    try {
        const result = await emailService.sendEmail({
            to: 'charleschijuka@gmail.com', // Sending to the support email
            subject: 'BoldMind Email System Test 🚀',
            template: React.createElement(WelcomeEmail, { fullName: 'Charles (Founder)' }),
            text: 'Welcome to BoldMind! This is a test of our new custom email system.'
        });

        console.log('✅ Email sent successfully!');
        console.log('📝 Result:', result);
    } catch (error) {
        console.error('❌ Failed to send email:', error);
    }
}

test();
