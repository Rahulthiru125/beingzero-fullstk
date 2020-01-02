const express = require('express')
const app = express() ('path')
const port = app.use(express.static (_dirname + '/distngproject'));

app.get('/', (req, res) => res.sendFile(path.join(_dirname + '/dist/ngproject/index.html')));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))