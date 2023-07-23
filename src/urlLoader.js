const localURL = "http://localhost:5000/api/v1";
const liveURL = "";

module.exports = {
    url:process.env.NODE_ENV ===  'production' ? liveURL : localURL
}