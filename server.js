import http from 'http';
import express from 'express';
import reload from 'reload';
import apiRouter from './api/index';
import sassMiddleware from 'node-sass-middleware';
import path from 'path';


const app = express();
const server = http.createServer(app);

app.use(sassMiddleware({
  src: path.join(__dirname,'sass'),
  dest: path.join(__dirname,'public')
}));

app.set('view engine','jade');
app.set('port', process.env.PORT || 3000);
app.use('/api', apiRouter);
app.use(express.static('public'));


app.get('/',(req,res) => {
  res.render('index');

});

reload(server,app);

server.listen(app.get('port'), () => {
  console.log(`listening on port ${app.get('port')}`);
});
