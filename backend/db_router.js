import express from 'express';
import { ObjectId } from 'mongodb';

const router = express.Router();

export default (db_client) => {
	// Middle ware 등록
	router.use('/', (req, res, next) => {
		console.log(`allowed cors : ${req.originalUrl}`);

		// '서비스 허용 도메인' - 크로스 도메인 이슈(CORS) 해결 방법
		res.set('Access-Control-Allow-Origin','*'); //cors 전체 허용
		res.set('Access-Control-Allow-Method','*'); 
		res.set('Access-Control-Allow-Headers','*'); 
		next();
	});

	// 새로운 일정 삽입
	router.post('/insert/day-plan', async (req, res) => {
		try {
			const database = db_client.db('node_study');
			const dayPlan = database.collection('dayPlan');

			let _res = await dayPlan.insertOne(req.body);

			res.json({r: 'ok', d: _res});
		}
		catch(err) {
			res.json({r: 'ok', error: err});
		}
	});

	// 새로운 일 별 메모 삽입
	router.post('/insert/day-plan-memo', async (req, res) => {
		try {
			const database = db_client.db('node_study');
			const dayPlanMemo = database.collection('dayPlanMemo');

			let _res = await dayPlanMemo.insertOne(req.body);

			res.json({r: 'ok', d: _res});
		}
		catch(err) {
			res.json({r: 'ok', error: err});
		}
	});

	// 새로운 월 별 메모 삽입
	router.post('/insert/month-plan', async (req, res) => {
		try {
			const database = db_client.db('node_study');
			const monthPlan = database.collection('monthPlan');

			let _res = await monthPlan.insertOne(req.body);

			res.json({r: 'ok', d: _res});
		}
		catch(err) {
			res.json({r: 'ok', error: err});
		}
	});

	// 사용자가 작성한 주간 일정 가져오기
	router.get('/bring/day-plan', async (req, res) => {
		try {
			const database = db_client.db('node_study');
			const dayPlan = database.collection('dayPlan');
			
			let planList = await dayPlan.find().toArray();

			res.json({r: 'ok', d: planList});
		}
		catch(e) {
			res.json({r: 'ok', err: e});
		}
	});
	// 사용자가 작성한 일 별 메모 가져오기
	router.get('/bring/day-plan-memo', async (req, res) => {
		try {
			const database = db_client.db('node_study');
			const dayPlanMemo = database.collection('dayPlanMemo');
			
			let memoList = await dayPlanMemo.find().toArray();

			res.json({r: 'ok', d: memoList});
		}
		catch(e) {
			res.json({r: 'ok', err: e});
		}
	});
	// 사용자가 작성한 월 별 일정 가져오기
	router.get('/bring/month-plan', async (req, res) => {
		try {
			const database = db_client.db('node_study');
			const monthPlan = database.collection('monthPlan');
			
			let planList = await monthPlan.find().toArray();

			res.json({r: 'ok', d: planList});
		}
		catch(e) {
			res.json({r: 'ok', err: e});
		}
	});

	// 사용자가 작성한 주간 일정 수정하기
	router.post('/modify/day-plan/id/:id', (req, res) => {
		try {
			const database = db_client.db('node-study');
			const dayPlan = database.collection('dayPlan');
			const changeTitle = req.body.changeTitle;

			let _res = await dayPlan.update(
				{'_id': req.params.id}, 
				{ changeTitle: req.body.changeContent}
			);
	
			res.json({r:'ok', d: _res});
		}
		catch(err) {
			res.json({r:'ok', error: err});
		}
	});

	// 사용자가 작성한 일 별 메모 수정하기
	router.post('/modify/day-plan-memo/id/:id', (req, res) => {
		try {
			const database = db_client.db('node-study');
			const dayPlanMemo = database.collection('dayPlanMemo');
			const changeTitle = req.body.changeTitle;

			let _res = await dayPlanMemo.update(
				{'_id': req.params.id}, 
				{ changeTitle: req.body.changeContent}
			);
	
			res.json({r:'ok', d: _res});
		}
		catch(err) {
			res.json({r:'ok', error: err});
		}
	});

	// 사용자가 작성한 월 별 일정 수정하기
	router.post('/modify/month-plan/id/:id/changeTitle/:changeTitle', (req, res) => {
		try {
			const database = db_client.db('node-study');
			const monthPlan = database.collection('monthPlan');
			const changeTitle = req.body.changeTitle;
			
			let _res = await monthPlan.update(
				{'_id': req.params.id}, 
				{ changeTitle: req.body.changeContent}
			);
	
			res.json({r:'ok', d: _res});
		}
		catch(err) {
			res.json({r:'ok', error: err});
		}
	});

	return router;
}