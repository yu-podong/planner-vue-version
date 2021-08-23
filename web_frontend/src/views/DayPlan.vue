<template>
	<section class="dayPlan">
			<ul class="days">
				<!-- 월요일 part -->
				<li class="day1">
					<DayPlanInput day="월 MONDAY"/>
				</li>
				<!-- 화요일 part -->
				<li class="day2">
					<DayPlanInput day="화 TUESDAY"/>
				</li>
				<!-- 수요일 part -->
				<li class="day3">
					<DayPlanInput day="수 WEDNESDAY"/>
				</li>
				<!-- 목요일 part -->
				<li class="day4">
					<DayPlanInput day="목 THURSDAY"/>
				</li>
			</ul>
			<ul class="days">
				<!-- 금요일 part -->
				<li class="day5">
					<DayPlanInput day="금 FRIDAY"/>
				</li>
				<!-- 토요일 part -->
				<li class="day6">
					<DayPlanInput day="토 SATURDAY"/>
				</li>
				<!-- 일요일 part -->
				<li class="day7">
					<DayPlanInput day="일 SUNDAY"/>
				</li>
				<!-- 한 주 Memo part -->
				<li class="week-memo">
					<div>
						
					</div>
				</li>
			</ul>
			<AlertWindow/>
		</section>
</template>

<script>
import DayPlanInput from '@/components/dayPlanInput.vue';
import AlertWindow from '@/components/alertWindow.vue';

export default {
	name: "DayPlan",
	components : {
		DayPlanInput,
		AlertWindow
	},
	computed : {
		dayPlan() {
			return this.$store.state.dayPlan;
		},
		dayPlanMemo() {
			return this.$store.state.dayPlanMemo;
		}
	},
	methods: {
		writeDayPlan() {
			
		}
	},
	created() {
		this.$store.dispatch('updateDayPlan');
	},

}
</script>

<style scoped>
	.dayPlan {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: row;
		justify-content: center;
		padding: 25px;
		box-sizing: border-box;
	}

	.dayPlan .days {
		width: 48%;
		height: 100%;
	}

	.dayPlan .days:nth-child(1) {
		border-right: 1px solid var(--gray-line-color)
	}

	.dayPlan .days li {
		height: 25%;
		display: flex;
		flex-direction: row;
		border-top: 1px solid var(--gray-line-color);
	}

	.dayPlan .days li:nth-child(4) {
		border-bottom: 1px solid var(--gray-line-color);
	}
</style>