"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateSlug = generateSlug;
function generateSlug(text) {
    return text
        .toString()
        .toLowerCase()
        .trim()
        .replace(/[àáâãäå]/g, 'a')
        .replace(/[èéêë]/g, 'e')
        .replace(/[ìíîï]/g, 'i')
        .replace(/[òóôõöø]/g, 'o')
        .replace(/[ùúûü]/g, 'u')
        .replace(/[ç]/g, 'c')
        .replace(/[ñ]/g, 'n')
        .replace(/[ẹọ]/g, (c) => c === 'ẹ' ? 'e' : 'o')
        .replace(/\s+/g, '-')
        .replace(/[^a-z0-9-]/g, '')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '')
        .slice(0, 100);
}
//# sourceMappingURL=slug.util.js.map