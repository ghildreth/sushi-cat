const express = require('express')
const app = express()
app.set('view engine', 'html');
// app.use(express.static(path.join(__dirname, 'public')));
app.engine('html', require('ejs').renderFile);

app.get('/', (req, res) => res.render('index'))

app.listen(3000, () => console.log('Example appl listening on port 3000!'))