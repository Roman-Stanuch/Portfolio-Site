export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll","favicon.png","images/Background.jpg","images/GithubLogo.svg","images/PolygonalLogo.png"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg",".svg":"image/svg+xml"},
	_: {
		client: {start:"_app/immutable/entry/start.BMKQo66E.js",app:"_app/immutable/entry/app.D-dBLa3S.js",imports:["_app/immutable/entry/start.BMKQo66E.js","_app/immutable/chunks/DTh6Gd1U.js","_app/immutable/chunks/8nFABDwr.js","_app/immutable/chunks/DdOxhgnw.js","_app/immutable/chunks/B52u6qUZ.js","_app/immutable/entry/app.D-dBLa3S.js","_app/immutable/chunks/8nFABDwr.js","_app/immutable/chunks/BqSxKG0q.js","_app/immutable/chunks/DhK8ECX8.js","_app/immutable/chunks/B52u6qUZ.js","_app/immutable/chunks/DfYtItg7.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/projects",
				pattern: /^\/projects\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
