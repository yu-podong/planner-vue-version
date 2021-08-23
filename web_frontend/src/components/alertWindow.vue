<template>
	<div class="alert-component">
		<div class="window">
			<p>아직 기능을 구현하는 중입니다.</p>
			<p>추후 해당 페이지를 정상적으로<br>
			 	이용할 수 있도록 노력하겠습니다.
			</p>
			<p>감사합니다.</p>
			<button class="home-btn" @click="moveHome"> Home으로 돌아가기 </button>
		</div>
	</div>
</template>

<script>
export default {
	name : 'AlertWindow',
	components : {},
	methods : {
		moveHome() {
			location.href = '..';
		}
	}
}
</script>

<style scoped>
	.alert-component {
		width: 100%;
		height: 100%;
		display: flex;
		position: absolute;
		justify-content: center;
		align-items: center;
		top: 0px;
		left: 122px;
		background-color: #757575af;
	}

	.alert-component .window {
		width: fit-content;
		height: fit-content;
		display: flex;
		flex-direction: column;
		background-color: white;
		padding: 30px;
		border-radius: 10px;
	}

	.alert-component p {
		margin: 10px 0px;
		text-align: center;
	}

	.alert-component .home-btn {
		width: 100%;
		height: fit-content;
		padding: 5px 0px;
		margin-top: 15px;
	}

	.alert-component .home-btn:hover {
		cursor: pointer;
		background-color: var(--navbar-color);
	}
</style>