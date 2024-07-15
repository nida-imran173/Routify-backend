// loggerMiddleware.js
const logger = (req, res, next) => {
  const startTime = Date.now();
  const formattedTime = new Date(startTime).toLocaleString();
  var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
  // Log incoming request details with request ID
  console.log(`\x1b[32m${req.method}\x1b[0m`, `\x1b[36m${fullUrl}\x1b[0m`, `[${formattedTime}]`);

  // Capture response finish event to log response details with request ID
  res.on('finish', () => {
    const endTime = Date.now();
    const responseTime = endTime - startTime;
    console.log(`\x1b[32m${req.method}\x1b[0m`, `\x1b[36m${fullUrl}\x1b[0m`, 
                `[${formattedTime}]`, `\x1b[33m${res.statusCode}\x1b[0m`, `${responseTime}ms`);
  });

  next();
};

module.exports = logger;
