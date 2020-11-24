const app = require('./app');
/**
 * Get port from environment and store in express or assigning default port number 8080
 */
const port = process.env.PORT || 8090;

app.listen(port, () => {
    console.log(`App is running on port:${port}`);
});
