import * as React from 'react';

interface ResetPasswordEmailProps {
    fullName: string;
    resetLink: string;
}

export const ResetPasswordEmail: React.FC<ResetPasswordEmailProps> = ({ fullName, resetLink }) => (
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
                Reset your password
            </h2>

            <p style={{ fontSize: '16px', lineHeight: '24px', color: '#4b5563', marginBottom: '24px' }}>
                Hello {fullName}, we received a request to reset your BoldMind password. Click the button below to choose a new password:
            </p>

            <a href={resetLink} style={{
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
                Reset Password
            </a>

            <p style={{ fontSize: '14px', lineHeight: '20px', color: '#6b7280', marginBottom: '24px', textAlign: 'center' }}>
                If the button above doesn't work, copy and paste this link into your browser:
                <br />
                <a href={resetLink} style={{ color: '#00143C', wordBreak: 'break-all' }}>{resetLink}</a>
            </p>

            <p style={{ fontSize: '14px', color: '#6b7280', textAlign: 'center', margin: '0' }}>
                If you didn't request a password reset, you can safely ignore this email. Your password will remain unchanged.
            </p>
        </div>

        <div style={{ textAlign: 'center', marginTop: '24px' }}>
            <p style={{ fontSize: '12px', color: '#9ca3af' }}>
                &copy; 2025 BoldMind Technology Solution Enterprise. All rights reserved.
            </p>
        </div>
    </div>
);
