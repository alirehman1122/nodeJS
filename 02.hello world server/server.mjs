import  express  from 'express';
import cors from 'cors';
const app = express()
app.use(cors())

app.get('/home', (req, res) => {
  res.send('Hello World!')
})
app.get('/weatherdata', (req, res) => {
  res.send({
    temperature:'30c',
    windspeed:'50kph',
    location:'karachi'
  })
})
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`hello world server on port ${port}`)
})