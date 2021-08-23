import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    dayPlan : [],
    dayPlanMemo : [],
    monthPlan : [],
    thisWeek() {
			// 오늘 날짜 & 요일 구하기
			let nowDate = new Date();
			let nowDay = nowDate.getDay();
			let calDay = 0;
			let temp = [], thisWeek = [];

      // 현재 날짜에서 그 주 월요일 찾기 위한 과정
			if(0 < nowDay && nowDay < 6) {
				calDay = 1 - nowDay;
			}
			else if( nowDay == 7) {
				calDay = -6
			}

      // 이번주에 해당하는 Date객체 저장
			for(let i = 0; i < 7; i++) {
				temp.push(new Date(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate()+calDay+i));
        thisWeek.push(`${temp[i].getMonth+1} / ${temp[i].getDate}`);
			}

			return thisWeek;
		}
  },
  mutations: {
    updateDayPlan(state, payload) {
      state.dayPlan = payload;
    },
    updateDayPlanMemo(state, payload) {
      state.dayPlanMemo = payload;
    },
    updateMonthPlan(state, payload) {
      state.monthPlan = payload;
    }
  },
  actions: {
    // MonthPlan에 대한 함수만 구현
    // actions에 함수를 정의할 땐, `context`를 first param으로 설정하기 (error 발생한 이유)
    /* 새로운 일정 or 메모 작성 */
    async writeDayPlan(context, payload) {
      let _res = await axios({
        method: 'POST',
        url : 'http://localhost:8080/planner-vue-version/insert/day-plan',
        data: JSON.stringify(payload),
        headers : {
          'Content-Type' : 'application/json'
        }
      });

      context.dispatch('updateMonthPlan');
    },
    async writeDayPlanMemo(context, payload) {
      let _res = await axios({
        method: 'POST',
        url : 'http://localhost:8080/planner-vue-version/insert/day-plan-memo',
        data: JSON.stringify(payload),
        headers : {
          'Content-Type' : 'application/json'
        }
      });

      context.dispatch('updateMonthPlan');
    },
    async writeMonthPlan(context, payload) {
      let _res = await axios({
        method: 'POST',
        url : 'http://localhost:8080/planner-vue-version/insert/month-plan',
        data: JSON.stringify(payload),
        headers : {
          'Content-Type' : 'application/json'
        }
      });

      context.dispatch('updateMonthPlan');
    },
    /* db에 저장된 일정 or 메모를 가져옴 */
    async updateDayPlan(context) {
      try {
        let {data} = await axios.get('http://localhost:8080/planner-vue-version/bring/day-plan');

        console.log(data);
        context.commit('updateDayPlan', data.d);
      }
      catch(err) {
        console.log(err);
      }
    },
    async updateDayPlanMemo(context) {
      try {
        let {data} = await axios.get('http://localhost:8080/planner-vue-version/bring/day-plan-memo');

        console.log(data);
        context.commit('updateDayPlanMemo', data.d);
      }
      catch(err) {
        console.log(err);
      }
    },
    async updateMonthPlan(context) {
      try {
        let {data} = await axios.get('http://localhost:8080/planner-vue-version/bring/month-plan');

        console.log(data);
        context.commit('updateMonthPlan', data.d);
      }
      catch(err) {
        console.log(err);
      }
    },
    /* db에 저장된 일정 or 메모 수정하기 */
    async modifyDayPlan(payload) {
      let _res = await axios({
        method: 'POST',
        url : `http://localhost:8080/planner-vue-version/modify/day-plan/id/${payload.id}/changeTitle/${payload.changeTitle}`,
        data: JSON.stringify(payload),
        headers : {
          'Content-Type' : 'application/json'
        }
      });

      context.dispatch('updateMonthPlan');
    },
    async modifyDayPlanMemo(payload) {
      let _res = await axios({
        method: 'POST',
        url : `http://localhost:8080/planner-vue-version/modify/day-plan-memo/id/${payload.id}/changeTitle/${payload.changeTitle}`,
        data: JSON.stringify(payload),
        headers : {
          'Content-Type' : 'application/json'
        }
      });

      context.dispatch('updateMonthPlan');
    },
    async modifyMonthPlan(context, payload) {
      // month의 값이 계속 undefined로 넘어오는 문제 발생
      let _res = await axios({
        method: 'POST',
        url : `http://localhost:8080/planner-vue-version/modify/month-plan`,
        data: JSON.stringify(payload),
        headers : {
          'Content-Type' : 'application/json'
        }
      });

      context.dispatch('updateMonthPlan');
    },
    async deleteMonthPlan(context, payload) {
      try {
        // 여기서 payload의 값이 원하는 대로 안넘어왔던 이유 - `context` param이 없어서
        let {data} = await axios.get(`http://localhost:8080/planner-vue-version/delete/month-plan/month/${payload}`);

        console.log(data);
        context.commit('updateMonthPlan', data.d);
      }
      catch(err) {
        console.log(err);
      }
    }
  },
  modules: {
  }
})
