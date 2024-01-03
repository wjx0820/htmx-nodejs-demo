import express from 'express';
import user from './routes/users.js';
import temperature from './routes/temperature.js';
import poll from './routes/poll.js';
import getTem from './routes/getTem.js';
import search from './routes/search.js';
import searchapi from './routes/searchapi.js';
import validation from './routes/validation.js'

const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(user);
app.use(temperature);
app.use(poll);
app.use(getTem);
app.use(search);
app.use(searchapi)
app.use(validation)

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});