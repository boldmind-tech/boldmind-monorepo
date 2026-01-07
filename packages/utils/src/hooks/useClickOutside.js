"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useClickOutside = useClickOutside;
var react_1 = require("react");
function useClickOutside(ref, handler) {
    (0, react_1.useEffect)(function () {
        var listener = function (event) {
            if (!ref.current || ref.current.contains(event.target)) {
                return;
            }
            handler(event);
        };
        document.addEventListener('mousedown', listener);
        document.addEventListener('touchstart', listener);
        return function () {
            document.removeEventListener('mousedown', listener);
            document.removeEventListener('touchstart', listener);
        };
    }, [ref, handler]);
}
