export default () => ({
  port: parseInt(process.env['PORT'] || '4002', 10),
  aloc: {
    baseUrl: 'https://questions.aloc.com.ng/api/v2',
    accessToken: process.env['ALOC_ACCESS_TOKEN'],
  },
});