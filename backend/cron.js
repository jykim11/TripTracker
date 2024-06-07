const cron = require("cron");
const https = require("https");

const backendUrl = "https://triptracker-8nzz.onrender.com";
const job = new cron.CronJob("*/14 * * * *", () => {
	console.log("Cron job running");

	https
		.get(backendUrl, (res) => {
			if (res.statusCode === 200) {
				console.log("Backend is running");
			} else {
				console.log("Backend is not running");
			}
		})
		.on("error", (err) => {
			console.log("Error: ", err);
		});
});

module.exports = job;
