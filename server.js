import express from 'express'
import 'dotenv/config'

let app = express()

const PORT = process.env.PORT || 3000

console.log(PORT)

console.log(process.env)

app.listen(PORT, () => console.log(`Server working on http://localhost:${PORT}`))