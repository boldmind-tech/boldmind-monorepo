"use strict";
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
exports.roleMiddleware = exports.authMiddleware = exports.useSession = exports.useUser = exports.useAuth = exports.AuthService = void 0;
exports.createAuthClient = createAuthClient;
// packages/auth/src/index.ts
var supabase_js_1 = require("@supabase/supabase-js");
// Supabase Client Factory
function createAuthClient(supabaseUrl, supabaseAnonKey) {
    var url = supabaseUrl || process.env.NEXT_PUBLIC_SUPABASE_URL;
    var key = supabaseAnonKey || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    return (0, supabase_js_1.createClient)(url, key, {
        auth: {
            autoRefreshToken: true,
            persistSession: true,
            detectSessionInUrl: true,
            storageKey: 'boldmind-auth-token',
        },
    });
}
// Auth Service Class
var AuthService = /** @class */ (function () {
    function AuthService(supabaseUrl, supabaseAnonKey) {
        this.client = createAuthClient(supabaseUrl, supabaseAnonKey);
    }
    // Sign Up
    AuthService.prototype.signUp = function (email, password, metadata) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, data, error;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.client.auth.signUp({
                            email: email,
                            password: password,
                            options: {
                                data: metadata,
                                emailRedirectTo: "".concat(window.location.origin, "/auth/callback"),
                            },
                        })];
                    case 1:
                        _a = _b.sent(), data = _a.data, error = _a.error;
                        if (error)
                            throw error;
                        return [2 /*return*/, data];
                }
            });
        });
    };
    // Sign In
    AuthService.prototype.signIn = function (email, password) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, data, error;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.client.auth.signInWithPassword({
                            email: email,
                            password: password,
                        })];
                    case 1:
                        _a = _b.sent(), data = _a.data, error = _a.error;
                        if (error)
                            throw error;
                        return [2 /*return*/, data];
                }
            });
        });
    };
    // Sign In with OAuth
    AuthService.prototype.signInWithOAuth = function (provider) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, data, error;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.client.auth.signInWithOAuth({
                            provider: provider,
                            options: {
                                redirectTo: "".concat(window.location.origin, "/auth/callback"),
                            },
                        })];
                    case 1:
                        _a = _b.sent(), data = _a.data, error = _a.error;
                        if (error)
                            throw error;
                        return [2 /*return*/, data];
                }
            });
        });
    };
    // Sign Out
    AuthService.prototype.signOut = function () {
        return __awaiter(this, void 0, void 0, function () {
            var error;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.auth.signOut()];
                    case 1:
                        error = (_a.sent()).error;
                        if (error)
                            throw error;
                        return [2 /*return*/];
                }
            });
        });
    };
    // Get Session
    AuthService.prototype.getSession = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, data, error;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.client.auth.getSession()];
                    case 1:
                        _a = _b.sent(), data = _a.data, error = _a.error;
                        if (error)
                            throw error;
                        return [2 /*return*/, data.session];
                }
            });
        });
    };
    // Get User
    AuthService.prototype.getUser = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, data, error;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.client.auth.getUser()];
                    case 1:
                        _a = _b.sent(), data = _a.data, error = _a.error;
                        if (error)
                            throw error;
                        return [2 /*return*/, data.user];
                }
            });
        });
    };
    // Update User
    AuthService.prototype.updateUser = function (updates) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, data, error;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.client.auth.updateUser(updates)];
                    case 1:
                        _a = _b.sent(), data = _a.data, error = _a.error;
                        if (error)
                            throw error;
                        return [2 /*return*/, data];
                }
            });
        });
    };
    // Reset Password
    AuthService.prototype.resetPassword = function (email) {
        return __awaiter(this, void 0, void 0, function () {
            var error;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.auth.resetPasswordForEmail(email, {
                            redirectTo: "".concat(window.location.origin, "/auth/reset-password"),
                        })];
                    case 1:
                        error = (_a.sent()).error;
                        if (error)
                            throw error;
                        return [2 /*return*/];
                }
            });
        });
    };
    // Listen to Auth Changes
    AuthService.prototype.onAuthStateChange = function (callback) {
        return this.client.auth.onAuthStateChange(function (_event, session) {
            callback(session);
        });
    };
    // Check if user has access to product
    AuthService.prototype.hasProductAccess = function (productId) {
        return __awaiter(this, void 0, void 0, function () {
            var user, _a, data, error;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.getUser()];
                    case 1:
                        user = _b.sent();
                        if (!user)
                            return [2 /*return*/, false];
                        return [4 /*yield*/, this.client
                                .from('subscriptions')
                                .select('status, product_id')
                                .eq('user_id', user.id)
                                .eq('product_id', productId)
                                .single()];
                    case 2:
                        _a = _b.sent(), data = _a.data, error = _a.error;
                        if (error || !data)
                            return [2 /*return*/, false];
                        return [2 /*return*/, data.status === 'active'];
                }
            });
        });
    };
    return AuthService;
}());
exports.AuthService = AuthService;
// React Hooks
var useAuth_1 = require("./hooks/useAuth");
Object.defineProperty(exports, "useAuth", { enumerable: true, get: function () { return useAuth_1.useAuth; } });
var useUser_1 = require("./hooks/useUser");
Object.defineProperty(exports, "useUser", { enumerable: true, get: function () { return useUser_1.useUser; } });
var useSession_1 = require("./hooks/useSession");
Object.defineProperty(exports, "useSession", { enumerable: true, get: function () { return useSession_1.useSession; } });
// Middleware
var auth_middleware_1 = require("./middleware/auth-middleware");
Object.defineProperty(exports, "authMiddleware", { enumerable: true, get: function () { return auth_middleware_1.authMiddleware; } });
var role_middleware_1 = require("./middleware/role-middleware");
Object.defineProperty(exports, "roleMiddleware", { enumerable: true, get: function () { return role_middleware_1.roleMiddleware; } });
