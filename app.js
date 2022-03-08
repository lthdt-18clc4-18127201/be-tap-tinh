const express = require('express');
const app = express();
const port = 3000; // default
const { engine } = require('express-handlebars')

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/calc', (req, res) => {
    const x = req.query.x
    const y = req.query.y
    const operator = req.query.operator
    var result = 0
    var notification = null

    if (isNaN(x) && isNaN(y))
        notification = "hãy nhập vào 2 số"
    else if (isNaN(x)) 
        notification = "số thứ nhất ko phải số"
    else if(isNaN(y))
        notification = "số thứ hai ko phải số"
    else if (isNaN(x) || isNaN(y))
        notification = "hãy nhập vào 2 số"
    
    if (operator === "Cong")
        result = parseFloat(x) + parseFloat(y)
    else if (operator === "Tru")
        result = parseFloat(x) - parseFloat(y)
    else if (operator === "Nhan")
        result = parseFloat(x) * parseFloat(y)
    else if (operator === "Chia")
        result = parseFloat(x) / parseFloat(y)

    res.render('index', {notification, result, x, y})
})

app.listen(port, () => {
    console.log(`Server is running in port ${port}`);
})