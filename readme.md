========
Notes:
========

1. To run for instance, babel-node from terminal, add packages location to system PATH. It's handy, because, in
this example we're using relative path, so it'll be available in all projects.

export PATH=$PATH:./node_modules/.bin

2. How modules work
  export default {...} => import something from './module'
  export particular = 5; => import {particular} from './module';

3. Serving static files
app.use(express.static('public'));

4. Routing with
import apiRouter from './api';
server.use('/hey', apiRouter);

first argument is root route from which all apirouter routes will dirive.
if apirouter has '/you' route, end route would be 'hey/you'
