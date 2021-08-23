<template>
	<span class="month-part">{{month}}</span>
	<div class="input-part">
		<!-- Monthly 일정은 markdown으로 작성할 수 있도록 vue 공식문서 editor 사용 -->
		<textarea @blur="checkWriting" @input="update" ref="editor" v-model="this.content" v-show="this.isShowTextArea"></textarea>
  	<div class="markdown-result" @click="changeShowArea" v-html="compiledMarkdown" v-show="this.isShowResultArea"></div>
	</div>
</template>

<script>
export default {
	name: 'MonthPlanInput',
	props: {
		// 이유는 모르겠지만, props를 다른 곳에서 사용하려면, `this`를 꼭 사용해야함
		month: ''
	},
	computed : {
		/* 월 별 일정을 가져옴 - 해당 달의 일정이 작성된 Object가 있는지 확인하는 작업 필요 (error 발생 부분)*/
		monthPlan() {	
			// 전역변수인 monthPlan의 planContent를 저장할 변수 (아직 해당 달의 메모가 없을 때를 대비해 ''로 초기화)
			let eachMonthPlan = '';
			
			// monthPlan의 각 Obhect를 검사하여, 컴포넌트의 month와 동일하면 저장
			for(let eachMonth of this.$store.state.monthPlan) {
				if((this.month).includes(eachMonth.month)) {
					eachMonthPlan = eachMonth.planContent;
					break;
				}
			}
			// 올바른 값이 들어왔는지 확인
			console.log(`eachMonthPlan : ${eachMonthPlan}`);
			// content에 monthPlan의 return을 삽입하는 방법 모색중... -> 이렇게 하면 되네..ㅎ
			this.content = eachMonthPlan;
			console.log(`this.content : ${this.content}`);
			return eachMonthPlan;
		},
		/* markdown editor에 필요한 것 */
		compiledMarkdown: function () {
      return marked(this.content)
    }
	},
	data() {
		return {
			monthStringArr : this.month.split('월  '),
			content : '',
			isShowTextArea : false,
			isShowResultArea : true
		}
	},
	methods: {
		// viewer에서 editor로 전화시켜줌
		changeShowArea() {
			this.isShowTextArea = true;
			this.isShowResultArea = false;
			this.$refs.editor.focus();
		},
		// Monthly 일정 작성하기
		writeMonthPlan() {
			console.log(`write monthly plan : ${this.monthStringArr[1]}`);

			this.$store.dispatch('writeMonthPlan', {
				'year': new Date().getFullYear(),
				'month': this.monthStringArr[1],
				'planContent': this.content
			});
		},
		// Monthly 일정 수정하기
		modifyMonthPlan() {
			console.log(`modify monthly plan : ${this.monthStringArr[1]}, ${this.content}`);

			this.$store.dispatch('modifyMonthPlan', {
				'month': this.monthStringArr[1],
				'changeContent': this.content
			});
		},
		// Monthly 일정 삭제하기 (blur 상태에서 content가 '' 일 때)
		deleteMonthPlan() {
			console.log(`delete monthly plan : ${this.monthStringArr[1]}`);
			this.$store.dispatch('deleteMonthPlan', this.monthStringArr[1]);
		},
		// 작성한 달의 일정이 기존에 있었는지 판단하여 적절한 function 호출
		checkWriting() {
			this.isShowTextArea = false;
			this.isShowResultArea = true;

			if(this.monthPlan == this.content) {	// No modifying
				// Nothing to do...
			}
			else if(this.monthPlan == '' && this.content != '') {		// 새로운 일정 작성
				this.writeMonthPlan();
			}
			else if(this.monthPlan != '' && this.content == '') {		// 기존에 작성한 일정을 지움
				this.deleteMonthPlan();
			}
			else {	// 기존에 작성한 일정의 일부를 수정했을 때 
				this.modifyMonthPlan();
			}
		},
		// Morkdown editor에 필요한 함수
		update() {
			_.debounce(function (e) {
				this.content = e.target.value
    	}, 300);
		}
	},
	created() {
		console.log(`create '${this.month}' component`);
		this.$store.dispatch('updateMonthPlan');
	},
	// 이 친구까지 작성해야 computed에서 `content`에 planContent를 저장한 게 적용
	mounted() {
		this.content = this.monthPlan;
	}
}
</script>

<style scoped>
	.month-part {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 10px 0px;
		border-bottom: 1px solid var(--mint-color);
	}

	.input-part {
		width: 100%;
		height: 84%;
	}

	textarea, .input-part div {
		display: inline-block;
		width: 100%;
		height: 100%;
		vertical-align: top;
		box-sizing: border-box;
		padding: 0 20px;
	}

	.input-part div {
		overflow-y: scroll;
	}

	/* 스크롤바 설정*/
	.input-part div::-webkit-scrollbar,
	textarea::-webkit-scrollbar {
			width: 6px;
	}

	/* 스크롤바 막대 설정*/
	.input-part div::-webkit-scrollbar-thumb,
	textarea::-webkit-scrollbar-thumb {
			height: 17%;
			background-color: rgba(194, 194, 194, 0.596);
			/* 스크롤바 둥글게 설정    */
			border-radius: 10px;    
	}

	/* 스크롤바 뒷 배경 설정*/
	.input-part div::-webkit-scrollbar-track,
	textarea::-webkit-scrollbar-track {
			background-color: rgba(0,0,0,0);
	}

	textarea {
		border: none;
		resize: none;
		outline: none;
		background-color: #f6f6f6;
		font-size: 14px;
		font-family: 'Noto Sans KR', sans-serif;
		padding: 20px;
	}

	code {
		color: #f66;
	}
</style>