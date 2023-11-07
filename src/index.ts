import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'

dotenv.config()

export const app: Express = express()
const port: string = process.env.PORT || '8080'

app.get('/', (req: Request, res: Response) => {
	res.json('Welcome to Trails!')
})

app.listen(port, () => {
	console.log(`trails-server up and running at port: ${port}`)
})
