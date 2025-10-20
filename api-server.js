const jsonServer = require('json-server');
const path = require('path');

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'data', 'db.json'));
const middlewares = jsonServer.defaults();

server.use(middlewares);

// Add custom routes before JSON Server router
server.get('/api/post', (req, res) => {
  res.jsonp(router.db.get('post').value());
});

server.use('/api', router);

server.listen(3000, () => {
  console.log('JSON Server is running on port 3000');
});