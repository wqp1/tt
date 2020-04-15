class Route {
	constructor(options) {
		this.position = options.position;
		this.route = options.route;
	}

	checkAuth() {
		return (req, res, next) => {
			if (!req.user) return res.cookie('redirect', req.url).redirect('/auth');

			next();
		};
	}
}

module.exports = Route;