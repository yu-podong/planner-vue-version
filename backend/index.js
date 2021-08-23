import express from 'express';
import dotenv from  'dotenv';
import pkg from 'mongodb';
import mongoRouter from './db_router.js';
dotenv.config();

(async () => {
	try {
		/* MongoDB 접속 */
		const { MongoClient } = pkg;

		const db_client = new MongoClient(process.env.MONGODB_URL);
		let _result = await db_client.connect();
		console.log('db connect ok');

		/* express 실행 */
		const app = express();

		//json 미들웨어 등록
		app.use(express.json());
		app.use('/planner-vue-version', mongoRouter(db_client));

		if(process.env.NODE_ENV === 'dev') {
			app.get('', (req, res) => {
				res.json({r: 'ok'});
			});
		}

		app.listen(process.env.PORT, () => {
			if(process.env.NODE_ENV === 'dev') {
				console.log(`server start at : ${process.env.PORT}`);
			}
		})
	}
	catch(err) {
		console.log(err);
	}
})();
