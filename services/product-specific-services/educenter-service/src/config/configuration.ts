export default () => ({
  port: parseInt(process.env.PORT || '4002', 10),
  mongodb: {
    uri: process.env.MONGODB_URI || 'mongodb://localhost:27017/educenter',
  },
  aloc: {
    baseUrl: 'https://questions.aloc.com.ng/api/v2',
    accessToken: process.env.ALOC_ACCESS_TOKEN,
  },
});