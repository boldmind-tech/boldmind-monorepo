//#region src/constants/database-config.ts
const DATABASE_CONFIG = {
	postgres: {
		"boldmind-os-service": "boldmind_os",
		"user-service": "user_service",
		"payment-service": "payment_service",
		"analytics-service": "analytics_service",
		"educenter-service": "educenter_service",
		"fither-service": "fither_service",
		"planai-service": "planai_service",
		"hub-service": "hub_service",
		"receptionist-service": "receptionist_service",
		"credibility-service": "credibility_service",
		"business-planning-service": "business_planning_service",
		"financial-service": "financial_service",
		"investor-service": "investor_service",
		"storefronts-service": "storefronts_service",
		"digital-storefronts": "digital_storefronts_service",
		"marketing-service": "marketing_service",
		"analytics-dashboard-service": "analytics_dashboard_service",
		"safeai-service": "safeai_service",
		"koloai-service": "koloai_service",
		"receipt-service": "receipt_service"
	},
	mongodb: {
		"amebogist-service": "amebogist",
		"social-factory-service": "social_factory",
		"emailscraper-pro-service": "emailscraper_pro",
		"safeai-service": "safeai",
		"afrohustle-service": "afrohustle",
		"naijagig-matcher-service": "naijagig_matcher",
		"borderless-remit-service": "borderless_remit",
		"power-alert-service": "power_alert",
		"farmgate-direct-service": "farmgate_direct",
		"afrocopy-ai-service": "afrocopy_ai",
		"skill2cash-service": "skill2cash",
		"anontruth-mic-service": "anontruth_mic"
	},
	products: {
		"boldmind-hub": "hub-service",
		"educenter": "educenter-service",
		"receptionist": "receptionist-service",
		"boldmind-os": "boldmind-os-service",
		"naija-fither": "fither-service",
		"credibility-hubs": "credibility-service",
		"business-planning": "business-planning-service",
		"financial-forecasting": "financial-service",
		"investor-readiness": "investor-service",
		"digital-storefronts": "digital-storefronts",
		"marketing-automation": "marketing-service",
		"analytics-dashboard": "analytics-dashboard-service",
		"receipt-genius": "receipt-service",
		"safe-ai": "safeai-service",
		"kolo-ai": "koloai-service",
		"planai": "planai-service",
		"amebogist": "amebogist-service",
		"social-factory": "social-factory-service",
		"emailscraper-pro": "emailscraper-pro-service",
		"branding-design": "safeai-service",
		"afrohustle-os": "afrohustle-service",
		"naijagig-matcher": "naijagig-matcher-service",
		"borderless-remit": "borderless-remit-service",
		"power-alert": "power-alert-service",
		"farmgate-direct": "farmgate-direct-service",
		"afrocopy-ai": "afrocopy-ai-service",
		"skill2cash": "skill2cash-service",
		"anontruth-mic": "anontruth-mic-service"
	}
};
/**
* Get which database a service uses
*/
function getServiceDatabase(serviceName) {
	if (serviceName in DATABASE_CONFIG.postgres) return "postgres";
	if (serviceName in DATABASE_CONFIG.mongodb) return "mongodb";
	throw new Error(`Unknown service: ${serviceName}`);
}
/**
* Get which backend service handles a product
*/
function getServiceForProduct(productSlug) {
	return DATABASE_CONFIG.products[productSlug] || null;
}
/**
* Get database name for a service
*/
function getDatabaseName(serviceName) {
	if (serviceName in DATABASE_CONFIG.postgres) return DATABASE_CONFIG.postgres[serviceName];
	if (serviceName in DATABASE_CONFIG.mongodb) return DATABASE_CONFIG.mongodb[serviceName];
	throw new Error(`Unknown service: ${serviceName}`);
}
/**
* Check if service uses PostgreSQL
*/
function usesPostgres(serviceName) {
	return serviceName in DATABASE_CONFIG.postgres;
}
/**
* Check if service uses MongoDB
*/
function usesMongoDB(serviceName) {
	return serviceName in DATABASE_CONFIG.mongodb;
}
/**
* Get all services using a specific database
*/
function getServicesByDatabase(db) {
	return Object.keys(db === "postgres" ? DATABASE_CONFIG.postgres : DATABASE_CONFIG.mongodb);
}
/**
* Get all products for a service
*/
function getProductsForService(serviceName) {
	return Object.entries(DATABASE_CONFIG.products).filter(([_, service]) => service === serviceName).map(([product]) => product);
}
/**
* Get environment variable name for a service's database URL
*/
function getDatabaseEnvVar(serviceName) {
	if (getServiceDatabase(serviceName) === "postgres") return `${serviceName.toUpperCase().replace(/-/g, "_")}_DATABASE_URL`;
	else return `${serviceName.toUpperCase().replace(/-/g, "_")}_MONGODB_URL`;
}
/**
* Get HTTP service URL environment variable name
* (For API Gateway to communicate with services)
*/
function getServiceUrlEnvVar(serviceName) {
	return `${serviceName.toUpperCase().replace(/-/g, "_")}_URL`;
}
/**
* Get connection string from environment variables
* Throws error if environment variable is not set
*/
function getConnectionString(serviceName) {
	const envVar = getDatabaseEnvVar(serviceName);
	const connectionString = process.env[envVar];
	if (!connectionString) throw new Error(`Database connection string not found for ${serviceName}. Please set ${envVar} environment variable.`);
	return connectionString;
}
/**
* Get service URL from environment variables
* (For HTTP communication between services)
*/
function getServiceUrl(serviceName) {
	const envVar = getServiceUrlEnvVar(serviceName);
	const url = process.env[envVar];
	if (!url) return `http://localhost:${serviceName === "hub-service" ? "4001" : serviceName === "user-service" ? "4002" : serviceName === "payment-service" ? "4003" : "4000"}`;
	return url;
}
/**
* Validate all required database environment variables are set
*/
function validateDatabaseEnvVars() {
	const missing = [];
	Object.keys(DATABASE_CONFIG.postgres).forEach((serviceName) => {
		const envVar = getDatabaseEnvVar(serviceName);
		if (!process.env[envVar]) missing.push(envVar);
	});
	Object.keys(DATABASE_CONFIG.mongodb).forEach((serviceName) => {
		const envVar = getDatabaseEnvVar(serviceName);
		if (!process.env[envVar]) missing.push(envVar);
	});
	return missing;
}
/**
* Database configuration for each service
*/
const SERVICE_DB_CONFIG = Object.fromEntries([...Object.keys(DATABASE_CONFIG.postgres), ...Object.keys(DATABASE_CONFIG.mongodb)].map((serviceName) => [serviceName, {
	database: getDatabaseName(serviceName),
	type: getServiceDatabase(serviceName),
	envVar: getDatabaseEnvVar(serviceName),
	serviceUrl: getServiceUrl(serviceName),
	products: getProductsForService(serviceName)
}]));

//#endregion
export { DATABASE_CONFIG, SERVICE_DB_CONFIG, getConnectionString, getDatabaseEnvVar, getDatabaseName, getProductsForService, getServiceDatabase, getServiceForProduct, getServiceUrl, getServiceUrlEnvVar, getServicesByDatabase, usesMongoDB, usesPostgres, validateDatabaseEnvVars };
//# sourceMappingURL=database-config.js.map