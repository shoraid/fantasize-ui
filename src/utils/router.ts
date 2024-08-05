export const routesList = {
	// Auth
	"auth.login": "/examples/template/login",
	"auth.register": "/examples/template/register",
	"auth.forgotPassword": "/examples/template/forgot-password",

	// Analytics
	"analytics.dashboard": "/panel/dashboard",

	// Users
	"users.index": "/panel/users",
	"users.create": "/panel/users/create",
	"users.edit": "/panel/users/:id/edit",
	"users.detail": "/panel/users/:id",

	"users.products.index": "/panel/users/:id/products",
	"users.products.detail": "/panel/users/:id/products/:productId",
};

export type RouteName = keyof typeof routesList;

const route = (routeName: RouteName, values: Record<string, any> = {}) => {
	const path = routesList[routeName];

	if (!path) {
		return ""
	};

	return path.replace(/:[a-zA-Z0-9_]+/g, (match) => {
		const key = match.substring(1);
		return values[key] !== undefined ? values[key] : match;
	});
};

export default route;