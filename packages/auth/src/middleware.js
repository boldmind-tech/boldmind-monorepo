"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = authMiddleware;
exports.requireRole = requireRole;
exports.requireAdmin = requireAdmin;
exports.apiKeyMiddleware = apiKeyMiddleware;
exports.rateLimitMiddleware = rateLimitMiddleware;
var server_1 = require("next/server");
var jwt_1 = require("next-auth/jwt");
var database_1 = require("@boldmind/database");
// Default options
var defaultOptions = {
    requireAuth: true,
    requireRole: 'user',
    publicRoutes: ['/', '/login', '/register', '/forgot-password', '/reset-password'],
    apiPrefix: '/api'
};
// Auth middleware for Next.js
function authMiddleware(request_1) {
    return __awaiter(this, arguments, void 0, function (request, options) {
        var mergedOptions, pathname, isApiRoute, token, loginUrl, userRole, requiredRoles, requestHeaders, error_1;
        var _a;
        if (options === void 0) { options = {}; }
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    mergedOptions = __assign(__assign({}, defaultOptions), options);
                    pathname = request.nextUrl.pathname;
                    // Check if route is public
                    if ((_a = mergedOptions.publicRoutes) === null || _a === void 0 ? void 0 : _a.some(function (route) { return pathname.startsWith(route); })) {
                        return [2 /*return*/, server_1.NextResponse.next()];
                    }
                    isApiRoute = pathname.startsWith(mergedOptions.apiPrefix || '/api');
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, (0, jwt_1.getToken)({
                            req: request,
                            secret: process.env.NEXTAUTH_SECRET
                        })];
                case 2:
                    token = _b.sent();
                    // If no token and auth is required
                    if (!token && mergedOptions.requireAuth) {
                        if (isApiRoute) {
                            return [2 /*return*/, server_1.NextResponse.json({ error: 'Unauthorized' }, { status: 401 })];
                        }
                        loginUrl = new URL('/login', request.url);
                        loginUrl.searchParams.set('callbackUrl', pathname);
                        return [2 /*return*/, server_1.NextResponse.redirect(loginUrl)];
                    }
                    // Check role if required
                    if (token && mergedOptions.requireRole) {
                        userRole = token.role || 'user';
                        requiredRoles = Array.isArray(mergedOptions.requireRole)
                            ? mergedOptions.requireRole
                            : [mergedOptions.requireRole];
                        if (!requiredRoles.includes(userRole)) {
                            if (isApiRoute) {
                                return [2 /*return*/, server_1.NextResponse.json({ error: 'Forbidden' }, { status: 403 })];
                            }
                            // Redirect to unauthorized page
                            return [2 /*return*/, server_1.NextResponse.redirect(new URL('/unauthorized', request.url))];
                        }
                    }
                    // Add user info to request headers for API routes
                    if (isApiRoute && token) {
                        requestHeaders = new Headers(request.headers);
                        requestHeaders.set('x-user-id', token.sub || '');
                        requestHeaders.set('x-user-email', token.email || '');
                        requestHeaders.set('x-user-role', token.role || 'user');
                        return [2 /*return*/, server_1.NextResponse.next({
                                request: {
                                    headers: requestHeaders
                                }
                            })];
                    }
                    return [2 /*return*/, server_1.NextResponse.next()];
                case 3:
                    error_1 = _b.sent();
                    console.error('Auth middleware error:', error_1);
                    if (isApiRoute) {
                        return [2 /*return*/, server_1.NextResponse.json({ error: 'Internal server error' }, { status: 500 })];
                    }
                    // Redirect to error page for non-API routes
                    return [2 /*return*/, server_1.NextResponse.redirect(new URL('/error', request.url))];
                case 4: return [2 /*return*/];
            }
        });
    });
}
// Role-based middleware
function requireRole(roles) {
    var _this = this;
    return function (request) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, authMiddleware(request, { requireRole: roles })];
        });
    }); };
}
// Admin middleware
function requireAdmin(request) {
    return requireRole(['admin', 'super_admin'])(request);
}
// API key middleware for external services
function apiKeyMiddleware(request) {
    return __awaiter(this, void 0, void 0, function () {
        var apiKey, validKey, requestHeaders, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    apiKey = request.headers.get('x-api-key') ||
                        request.nextUrl.searchParams.get('api_key');
                    if (!apiKey) {
                        return [2 /*return*/, server_1.NextResponse.json({ error: 'API key required' }, { status: 401 })];
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, database_1.prisma.apiKey.findFirst({
                            where: {
                                key: apiKey,
                                active: true,
                                expiresAt: {
                                    gt: new Date()
                                }
                            }
                        })];
                case 2:
                    validKey = _a.sent();
                    if (!validKey) {
                        return [2 /*return*/, server_1.NextResponse.json({ error: 'Invalid or expired API key' }, { status: 401 })];
                    }
                    // Update last used timestamp
                    return [4 /*yield*/, database_1.prisma.apiKey.update({
                            where: { id: validKey.id },
                            data: { lastUsedAt: new Date() }
                        })];
                case 3:
                    // Update last used timestamp
                    _a.sent();
                    requestHeaders = new Headers(request.headers);
                    requestHeaders.set('x-api-key-id', validKey.id);
                    requestHeaders.set('x-api-key-user', validKey.userId);
                    return [2 /*return*/, server_1.NextResponse.next({
                            request: {
                                headers: requestHeaders
                            }
                        })];
                case 4:
                    error_2 = _a.sent();
                    console.error('API key middleware error:', error_2);
                    return [2 /*return*/, server_1.NextResponse.json({ error: 'Internal server error' }, { status: 500 })];
                case 5: return [2 /*return*/];
            }
        });
    });
}
// Rate limiting middleware
function rateLimitMiddleware(maxRequests, windowMs) {
    var _this = this;
    if (maxRequests === void 0) { maxRequests = 100; }
    if (windowMs === void 0) { windowMs = 60000; }
    var requests = new Map();
    return function (request) { return __awaiter(_this, void 0, void 0, function () {
        var ip, now, _i, _a, _b, key, value, entry, response;
        return __generator(this, function (_c) {
            ip = request.ip || request.headers.get('x-forwarded-for') || 'unknown';
            now = Date.now();
            // Clean up old entries
            for (_i = 0, _a = requests.entries(); _i < _a.length; _i++) {
                _b = _a[_i], key = _b[0], value = _b[1];
                if (now > value.resetTime) {
                    requests.delete(key);
                }
            }
            entry = requests.get(ip) || { count: 0, resetTime: now + windowMs };
            // Check rate limit
            if (entry.count >= maxRequests) {
                return [2 /*return*/, server_1.NextResponse.json({
                        error: 'Too many requests',
                        retryAfter: Math.ceil((entry.resetTime - now) / 1000)
                    }, {
                        status: 429,
                        headers: {
                            'Retry-After': String(Math.ceil((entry.resetTime - now) / 1000))
                        }
                    })];
            }
            // Increment count
            entry.count++;
            requests.set(ip, entry);
            response = server_1.NextResponse.next();
            response.headers.set('X-RateLimit-Limit', String(maxRequests));
            response.headers.set('X-RateLimit-Remaining', String(maxRequests - entry.count));
            response.headers.set('X-RateLimit-Reset', String(Math.ceil(entry.resetTime / 1000)));
            return [2 /*return*/, response];
        });
    }); };
}
