import * as React from 'react';

interface VerifyEmailProps {
    fullName: string;
    verificationCode: string;
    verificationLink?: string;
}

export const VerifyEmail: React.FC<VerifyEmailProps> = ({ fullName, verificationCode, verificationLink }) => (
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
                Verify your email address, {fullName}
            </h2>

            <p style={{ fontSize: '16px', lineHeight: '24px', color: '#4b5563', marginBottom: '24px' }}>
                Thanks for starting your journey with BoldMind! Please click the button below to verify your email address and complete your registration:
            </p>

            {verificationLink && (
                <div style={{ textAlign: 'center', marginBottom: '32px' }}>
                    <a
                        href={verificationLink}
                        style={{
                            backgroundColor: '#00143C',
                            color: '#ffffff',
                            padding: '12px 32px',
                            borderRadius: '8px',
                            textDecoration: 'none',
                            fontWeight: '600',
                            display: 'inline-block',
                            boxShadow: '0 4px 6px -1px rgba(0, 20, 60, 0.2)'
                        }}
                    >
                        Verify Account
                    </a>
                </div>
            )}

            <p style={{ fontSize: '14px', lineHeight: '20px', color: '#6b7280', marginBottom: '16px', textAlign: 'center' }}>
                Or use the following code if the button doesn't work:
            </p>

            <div style={{
                backgroundColor: '#f3f4f6',
                borderRadius: '12px',
                padding: '16px',
                textAlign: 'center',
                marginBottom: '24px'
            }}>
                <span style={{
                    fontSize: '24px',
                    fontWeight: '800',
                    letterSpacing: '4px',
                    color: '#00143C'
                }}>
                    {verificationCode}
                </span>
            </div>

            <p style={{ fontSize: '14px', lineHeight: '20px', color: '#6b7280', marginBottom: '24px', textAlign: 'center' }}>
                This code will expire in 30 minutes. If you didn't request this code, you can safely ignore this email.
            </p>

            <div style={{ borderTop: '1px solid #e5e7eb', paddingTop: '24px' }}>
                <p style={{ fontSize: '14px', color: '#9ca3af', textAlign: 'center', margin: '0' }}>
                    Need help? Visit our <a href="https://boldmind.ng/support" style={{ color: '#00143C' }}>support center</a>.
                </p>
            </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '24px' }}>
            <p style={{ fontSize: '12px', color: '#9ca3af' }}>
                &copy; 2025 BoldMind Technology Solution Enterprise. All rights reserved.
            </p>
        </div>
    </div>
);
