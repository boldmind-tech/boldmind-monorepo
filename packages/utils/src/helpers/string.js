"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.truncate = truncate;
exports.capitalize = capitalize;
exports.generateSlug = generateSlug;
exports.formatPhoneNumber = formatPhoneNumber;
exports.isValidEmail = isValidEmail;
exports.generateRandomString = generateRandomString;
function truncate(str, length) {
    if (str.length <= length)
        return str;
    return str.slice(0, length) + '...';
}
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
function generateSlug(str) {
    return str
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/[\s_-]+/g, '-')
        .replace(/^-+|-+$/g, '');
}
function formatPhoneNumber(phone) {
    var cleaned = phone.replace(/\D/g, '');
    if (cleaned.startsWith('234') && cleaned.length === 13) {
        return "+".concat(cleaned);
    }
    else if (cleaned.startsWith('0') && cleaned.length === 11) {
        return "+234".concat(cleaned.slice(1));
    }
    return phone;
}
function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
function generateRandomString(length) {
    if (length === void 0) { length = 8; }
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var result = '';
    for (var i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}
