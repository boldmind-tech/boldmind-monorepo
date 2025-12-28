"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDebounce = useDebounce;
var react_1 = require("react");
function useDebounce(value, delay) {
    if (delay === void 0) { delay = 500; }
    var _a = (0, react_1.useState)(value), debouncedValue = _a[0], setDebouncedValue = _a[1];
    (0, react_1.useEffect)(function () {
        var timer = setTimeout(function () {
            setDebouncedValue(value);
        }, delay);
        return function () {
            clearTimeout(timer);
        };
    }, [value, delay]);
    return debouncedValue;
}
