/**
 * TWA (Trusted Web Activity) configuration for all BoldMind apps
 */
export const TWA_CONFIG = {
    'boldmind-hub': {
        packageName: 'ng.boldmind.hub',
        hostName: 'boldmind.ng',
    },
    'planai-suite': {
        packageName: 'ng.boldmind.planai',
        hostName: 'planai.boldmind.ng',
    },
    'boldmind-os': {
        packageName: 'ng.boldmind.os',
        hostName: 'os.boldmind.ng',
    },
    'boldmind-tools': {
        packageName: 'ng.boldmind.tools',
        hostName: 'tools.boldmind.ng',
    },
    'naija-fit': {
        packageName: 'ng.boldmind.fit',
        hostName: 'fit.boldmind.ng',
    },
    'boldmind-concepts': {
        packageName: 'ng.boldmind.concept',
        hostName: 'concept.boldmind.ng',
    },
    'amebogist': {
        packageName: 'ng.amebogist.app',
        hostName: 'amebogist.ng',
    },
    'educenter': {
        packageName: 'ng.educenter.app',
        hostName: 'educenter.com.ng',
    },
    'skillgig': {
        packageName: 'ng.educenter.skills',
        hostName: 'skills.educenter.com.ng',
    },
} as const;
