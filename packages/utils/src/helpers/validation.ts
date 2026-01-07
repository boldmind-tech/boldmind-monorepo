import { isValidEmail } from './string';

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

export function validateEmail(email: string): boolean {
  return isValidEmail(email);
}

export function validatePassword(password: string): { isValid: boolean; message?: string } {
  if (password.length < 8) {
    return { isValid: false, message: 'Password must be at least 8 characters long' };
  }
  
  if (!/[A-Z]/.test(password)) {
    return { isValid: false, message: 'Password must contain at least one uppercase letter' };
  }
  
  if (!/[a-z]/.test(password)) {
    return { isValid: false, message: 'Password must contain at least one lowercase letter' };
  }
  
  if (!/\d/.test(password)) {
    return { isValid: false, message: 'Password must contain at least one number' };
  }
  
  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    return { isValid: false, message: 'Password must contain at least one special character' };
  }
  
  return { isValid: true };
}

export function validatePhone(phone: string): boolean {
  const nigerianRegex = /^(?:\+234|0)[789][01]\d{8}$/;
  const intlRegex = /^\+\d{10,15}$/;
  return nigerianRegex.test(phone) || intlRegex.test(phone);
}

export function validateRequired(value: any): boolean {
  if (value === null || value === undefined) return false;
  if (typeof value === 'string') return value.trim().length > 0;
  if (Array.isArray(value)) return value.length > 0;
  return true;
}

export function validateNumber(value: any, min?: number, max?: number): boolean {
  const num = Number(value);
  if (isNaN(num)) return false;
  if (min !== undefined && num < min) return false;
  if (max !== undefined && num > max) return false;
  return true;
}

export function validateForm<T extends Record<string, any>>(
  data: T,
  rules: Record<keyof T, (value: any) => string | null>
): ValidationResult {
  const errors: Record<string, string> = {};
  
  for (const [key, validator] of Object.entries(rules)) {
    const error = validator(data[key]);
    if (error) {
      errors[key] = error;
    }
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}