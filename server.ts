import app from './app';
const port = Number(process.env.PORT) || 5678;
app.server.listen(port, (err) => {
    if (err) {
        return console.log(err);
    }
    return console.log(`server is listening on ${port}`);
  });
