"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useIsDarkMode = exports.useIsDesktop = exports.useIsTablet = exports.useIsMobile = void 0;
exports.useMediaQuery = useMediaQuery;
var react_1 = require("react");
function useMediaQuery(query) {
    var _a = (0, react_1.useState)(false), matches = _a[0], setMatches = _a[1];
    (0, react_1.useEffect)(function () {
        var media = window.matchMedia(query);
        if (media.matches !== matches) {
            setMatches(media.matches);
        }
        var listener = function (event) {
            setMatches(event.matches);
        };
        media.addEventListener('change', listener);
        return function () {
            media.removeEventListener('change', listener);
        };
    }, [matches, query]);
    return matches;
}
// Common breakpoints
var useIsMobile = function () { return useMediaQuery('(max-width: 768px)'); };
exports.useIsMobile = useIsMobile;
var useIsTablet = function () { return useMediaQuery('(min-width: 769px) and (max-width: 1024px)'); };
exports.useIsTablet = useIsTablet;
var useIsDesktop = function () { return useMediaQuery('(min-width: 1025px)'); };
exports.useIsDesktop = useIsDesktop;
var useIsDarkMode = function () { return useMediaQuery('(prefers-color-scheme: dark)'); };
exports.useIsDarkMode = useIsDarkMode;
