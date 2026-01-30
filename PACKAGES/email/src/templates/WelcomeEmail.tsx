import * as React from 'react';

interface WelcomeEmailProps {
    fullName: string;
}

export const WelcomeEmail: React.FC<WelcomeEmailProps> = ({ fullName }) => (
    <div style={{
        fontFamily: 'system-ui, -apple-system, sans-serif',
        backgroundColor: '#f9fafb',
        padding: '40px 20px',
        color: '#111827'
    }}>
        <div style={{
            maxWidth: '600px',
            margin: '0 auto',
            backgroundColor: '#ffffff',
            borderRadius: '16px',
            padding: '40px',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
        }}>
            <div style={{ marginBottom: '32px', textAlign: 'center' }}>
                <h1 style={{
                    fontSize: '24px',
                    fontWeight: '800',
                    color: '#00143C',
                    margin: '0'
                }}>BoldMind</h1>
            </div>

            <h2 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '16px' }}>
                Welcome to the ecosystem, {fullName}! 🚀
            </h2>

            <p style={{ fontSize: '16px', lineHeight: '24px', color: '#4b5563', marginBottom: '24px' }}>
                We're thrilled to have you join our mission of empowering 1 million Nigerian entrepreneurs. You've just taken the first step toward building something great.
            </p>

            <div style={{
                backgroundColor: '#eff6ff',
                borderRadius: '12px',
                padding: '24px',
                marginBottom: '24px'
            }}>
                <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#1e40af', marginTop: '0' }}>
                    What's next?
                </h3>
                <ul style={{ paddingLeft: '20px', color: '#1e40af', margin: '0' }}>
                    <li style={{ marginBottom: '8px' }}>Explore 31+ innovative products</li>
                    <li style={{ marginBottom: '8px' }}>Access AI-powered business tools</li>
                    <li>Join our growing founder community</li>
                </ul>
            </div>

            <a href="https://boldmind.ng/dashboard" style={{
                display: 'block',
                backgroundColor: '#00143C',
                color: '#ffffff',
                textAlign: 'center',
                padding: '16px',
                borderRadius: '12px',
                fontWeight: '700',
                textDecoration: 'none',
                marginBottom: '24px'
            }}>
                Go to Dashboard
            </a>

            <p style={{ fontSize: '14px', color: '#9ca3af', textAlign: 'center', margin: '0' }}>
                Need help? Reply to this email or visit our <a href="https://boldmind.ng/support" style={{ color: '#00143C' }}>support center</a>.
            </p>
        </div>

        <div style={{ textAlign: 'center', marginTop: '24px' }}>
            <p style={{ fontSize: '12px', color: '#9ca3af' }}>
                &copy; 2025 BoldMind Technology Solution Enterprise. All rights reserved.
            </p>
        </div>
    </div>
);
