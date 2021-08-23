<template>
	<!-- 일정 part -->
	<div class="plan-part">
		<!-- 날짜 part -->
		<div class="date-part">
			<span class="date">8/23</span>
			<span class="day">{{day}}</span>
		</div>
		<!-- 5개의 일정 작성 list -->
		<ul class="input-part">
				<li>
					<label for="plan1"></label>
					<input id="plan1" type="text">
				</li>
				<li>
					<label for="plan2"></label>
					<input id="plan2" type="text">
				</li>
				<li>
					<label for="plan3"></label>
					<input id="plan3" type="text">
				</li>
				<li>
					<label for="plan4"></label>
					<input id="plan4" type="text">
				</li>
				<li>
					<label for="plan5"></label>
					<input id="plan5" type="text">
				</li>
			</ul>
	</div>
	<!-- 각 요일 Memo part -->
	<div class="memo-part">
		dd
		<!-- 추후 Markdown으로 작성할 수 있도록 삽입 예정-->
	</div>
</template>

<script>
export default {
	name: 'DayPlanInput',
	props: {
		day: ''
	},
	computed : {
		dayPlan() {
			//return this.$store.state.dayPlan.filters(plan => plan.date ==)
		},
		thisDate() {
			let thisDate = ''
		}
	}
}
</script>

<style scoped>
	.plan-part {
		width: 45%;
		height: 100%;
		border-right: 1px solid var(--mint-color);
	}

	.memo-part {
		width: 55%;
		height: 100%;
	}

	.plan-part .date-part {
		width: 100%;
		height: 35px;
		display: flex;
		flex-direction: row;
		border-bottom: 1px solid var(--mint-color);
	}

	.plan-part .date-part span {
		width: 50%;
		height: 100%;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		box-sizing: border-box;
		text-align: center;
		font-weight: 400;		
	}

	.plan-part .date-part span:nth-child(1) {
		border-right: 1px solid var(--gray-line-color);
	}

	.dayPlan .days .day7 .day{
		color: var(--mint-color);
	}

	.plan-part .input-part {
		width: 100%;
		height: 185px;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		padding: 5px 25px;
		box-sizing: border-box;
	}

	.plan-part .input-part li {
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.plan-part .input-part label {
		width: 15px;
		height: 15px;
		margin-right: 15px;
		background-color: var(--input-border-color);
	}

	.plan-part .input-part input {
		width: 100%;
		font-size: 17px;
		font-weight: 300;
		font-family: 'Noto Sans KR', sans-serif;
		border-bottom: 1px solid var(--input-border-color);
	}
</style>
