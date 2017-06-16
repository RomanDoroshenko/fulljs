import http from 'http';
import config from './config'
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

import serverRender from './serverRender';


app.get(['/','/contest/:contestId'],(req,res) => {


  serverRender(req.params.contestId)
    .then((resp) => {
      res.render('index', {
        initialMarkup: resp.initialMarkup,
        initialData: resp.initialData
      });
    })
    .catch(console.error);

});

reload(server,app);

server.listen(config.port,config.host, () => {
  console.info('Express is listening on port', config.port);
});
