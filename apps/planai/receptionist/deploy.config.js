// Deployment configuration for different environments
const deployments = {
  development: {
    domain: 'localhost:3002',
    apiUrl: 'http://localhost:3001',
    basePath: '',
  },
  staging: {
    domain: 'receptionist-staging.planai.boldmind.ng',
    apiUrl: 'https://api-staging.boldmind.ng',
    basePath: '',
  },
  production: {
    domain: 'receptionist.boldmind.ng',
    apiUrl: 'https://api.boldmind.ng',
    basePath: '',
  },
  // Custom domains for specific deployments
  'client-a': {
    domain: 'receptionist.client-a.com',
    apiUrl: 'https://api.client-a.com',
    basePath: '',
    custom: true,
  },
};

module.exports = deployments;