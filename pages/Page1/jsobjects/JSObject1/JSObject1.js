export default {
	getIconFullURL(icon) {
		let currentDomain = appsmith.URL.protocol + "//" + appsmith.URL.hostname;

		if (appsmith.URL.port) {
			currentDomain += ":" +  appsmith.URL.port;
		}
		return currentDomain + "/bonita/portal-theme/" + icon;
	}
}