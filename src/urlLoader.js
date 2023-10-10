const localURL = "http://localhost:5000";
const liveURL = "http://16.171.175.191:6500";

module.exports = {
    url:process.env.NODE_ENV ===  'production' ? liveURL : localURL
}