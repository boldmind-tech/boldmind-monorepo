"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useLocalStorage = useLocalStorage;
var react_1 = require("react");
function useLocalStorage(key, initialValue) {
    var _a = (0, react_1.useState)(function () {
        if (typeof window === 'undefined')
            return initialValue;
        try {
            var item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        }
        catch (error) {
            console.error("Error reading localStorage key \"".concat(key, "\":"), error);
            return initialValue;
        }
    }), storedValue = _a[0], setStoredValue = _a[1];
    var setValue = function (value) {
        try {
            var valueToStore = value instanceof Function ? value(storedValue) : value;
            setStoredValue(valueToStore);
            if (typeof window !== 'undefined') {
                window.localStorage.setItem(key, JSON.stringify(valueToStore));
            }
        }
        catch (error) {
            console.error("Error setting localStorage key \"".concat(key, "\":"), error);
        }
    };
    (0, react_1.useEffect)(function () {
        var handleStorageChange = function (e) {
            if (e.key === key && e.newValue) {
                try {
                    setStoredValue(JSON.parse(e.newValue));
                }
                catch (error) {
                    console.error("Error parsing localStorage value for key \"".concat(key, "\":"), error);
                }
            }
        };
        window.addEventListener('storage', handleStorageChange);
        return function () { return window.removeEventListener('storage', handleStorageChange); };
    }, [key]);
    return [storedValue, setValue];
}
