import http from 'http';
import express from 'express';
import reload from 'reload';
import apiRouter from './api/index';


const app = express();
const server = http.createServer(app);

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
