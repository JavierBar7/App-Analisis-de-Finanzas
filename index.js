const app = require('./src/app')

const connection = require('./src/config/database')

app.listen(3000, () => {
    console.log('server on port 3000')
})

