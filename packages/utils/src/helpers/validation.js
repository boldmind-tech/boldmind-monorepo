"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateEmail = validateEmail;
exports.validatePassword = validatePassword;
exports.validatePhone = validatePhone;
exports.validateRequired = validateRequired;
exports.validateNumber = validateNumber;
exports.validateForm = validateForm;
var string_1 = require("./string");
function validateEmail(email) {
    return (0, string_1.isValidEmail)(email);
}
function validatePassword(password) {
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
function validatePhone(phone) {
    var nigerianRegex = /^(?:\+234|0)[789][01]\d{8}$/;
    var intlRegex = /^\+\d{10,15}$/;
    return nigerianRegex.test(phone) || intlRegex.test(phone);
}
function validateRequired(value) {
    if (value === null || value === undefined)
        return false;
    if (typeof value === 'string')
        return value.trim().length > 0;
    if (Array.isArray(value))
        return value.length > 0;
    return true;
}
function validateNumber(value, min, max) {
    var num = Number(value);
    if (isNaN(num))
        return false;
    if (min !== undefined && num < min)
        return false;
    if (max !== undefined && num > max)
        return false;
    return true;
}
function validateForm(data, rules) {
    var errors = {};
    for (var _i = 0, _a = Object.entries(rules); _i < _a.length; _i++) {
        var _b = _a[_i], key = _b[0], validator = _b[1];
        var error = validator(data[key]);
        if (error) {
            errors[key] = error;
        }
    }
    return {
        isValid: Object.keys(errors).length === 0,
        errors: errors
    };
}
