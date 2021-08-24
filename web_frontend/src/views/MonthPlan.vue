<template>
	<section class="monthPlan">
		<div class="year-control-bar">
			<i class="fas fa-chevron-left"></i>
			<span>{{currentYear}}년</span>
			<i class="fas fa-chevron-right"></i>
		</div>
		<ul class="month-list">
			<li class="month1">
				<MonthPlanInput month="1월  January"/>
			</li>
			<li class="month2">
				<MonthPlanInput month="2월  Fabruary"/>
			</li>
			<li class="month3">
				<MonthPlanInput month="3월  March"/>
			</li>
			<li class="month4">
				<MonthPlanInput month="4월  April"/>
			</li>
			<li class="month5">
				<MonthPlanInput month="5월  May"/>
			</li>
			<li class="month6">
				<MonthPlanInput month="6월  June"/>
			</li>
			<li class="month7">
				<MonthPlanInput month="7월  July"/>
			</li>
			<li class="month8">
				<MonthPlanInput month="8월  August"/>
			</li>
			<li class="month9">
				<MonthPlanInput month="9월  September"/>
			</li>
			<li class="month10">
				<MonthPlanInput month="10월  October"/>
			</li>
			<li class="month11">
				<MonthPlanInput month="11월  November"/>
			</li>
			<li class="month12">
				<MonthPlanInput month="12월  December"/>
			</li>
		</ul>
	</section>
</template>

<script>
import MonthPlanInput from '@/components/monthPlanInput.vue';

export default {
	name: "MonthPlan",
	components : {
		MonthPlanInput
	},
	data() {
		return {
			currentYear : new Date().getFullYear()
		}
	}
}
</script>

<style scoped>
	.monthPlan {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-content: center;
		padding: 25px 40px;	/* padding: 25px 170px은 어떨까... */
		box-sizing: border-box;
	}

	.monthPlan .year-control-bar {
		margin-bottom: 20px;
		text-align: center;
	}

	.monthPlan .year-control-bar * {
		font-size: 35px;
	}

	.monthPlan .year-control-bar span {
		margin: 0px 20px;
	}

	.monthPlan .month-list {
		width: 100%;
		height: 95%;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}

	.monthPlan .month-list li {
		width: 25%;
		height: 33%;
		box-sizing: border-box;
		border-top: 1px solid var(--gray-line-color);
	}
	
	.monthPlan .month-list li:not(.monthPlan .month-list li:nth-child(4n)) {
		border-right: 1px solid var(--gray-line-color);
	}

	@media screen and (max-width: 1240px){
		.monthPlan .month-list li {
			width: 33%;
			height: 33%;
			box-sizing: border-box;
		}
		.monthPlan .month-list li:not(.monthPlan .month-list li:nth-child(4n)) {
			border-right: none;
		}
		
		.monthPlan .month-list li:not(.monthPlan .month-list li:nth-child(3n)) {
			border-right: 1px solid var(--gray-line-color);
		}

		.monthPlan .month-list {
			overflow-y: scroll;
		}
		.monthPlan .month-list::-webkit-scrollbar {
			display: none;
		}
	}

	@media screen and (max-width: 1000px){
		.monthPlan .month-list li {
			width: 49%;
			height: 33%;
			box-sizing: border-box;
		}
		.monthPlan .month-list li:not(.monthPlan .month-list li:nth-child(4n)),
		.monthPlan .month-list li:not(.monthPlan .month-list li:nth-child(3n)) {
			border-right: none;
		}
		
		.monthPlan .month-list li:not(.monthPlan .month-list li:nth-child(2n)) {
			border-right: 1px solid var(--gray-line-color);
		}
	}
	@media screen and (max-width: 790px){
		.monthPlan .month-list li {
			width: 100%;
			height: 33%;
			box-sizing: border-box;
		}
		
		.monthPlan .month-list li:not(.monthPlan .month-list li:nth-child(4n)),
		.monthPlan .month-list li:not(.monthPlan .month-list li:nth-child(3n)),
		.monthPlan .month-list li:not(.monthPlan .month-list li:nth-child(2n)) {
			border-right: none;
		}
	}
</style>