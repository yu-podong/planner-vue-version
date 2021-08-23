<template>
	<section class="register">
    <div class="wrap">
      <span>Register</span>
      <ul class="input-part">
				<li class="title">재학 상황</li>
        <li>
					<select name="attendance">
						<option value="cbnu" selected>충북대학교 재학</option>
						<option value="graduated">충북대학교 졸업</option>
						<option value="graduated">직장인</option>
					</select>
				</li>
      </ul>
			<ul class="input-part">
				<li class="title">개인정보</li>
				<li><input type="text" placeholder="이름"></li>
				<li><input type="text" placeholder="학번"></li>
				<li><input type="password" placeholder="비밀번호"></li>
			</ul>
      <button class="register-btn">가입하기</button>
    </div>
  </section>
</template>

<style scoped>
	.register {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		background-color: var(--navbar-color);
	}

	.register .wrap {
		width: 400px;
		height: fit-content;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 35px;
		box-sizing: border-box;
		border-radius: 5px;
		background-color: white;
		box-shadow: 2px 2px 5px var(--input-border-color);
	}

	.register .wrap > span {
		font-size: 30px;
		font-weight: bold;
		margin-bottom: 20px;
	}

	.register .input-part {
		width: 100%;
		height: fit-content;
		margin-top: 30px;
	}


	.register .input-part li:nth-child(1) {
		margin-bottom: 10px;
		font-size: 20px;
	}

	.register .input-part select {
		padding: 5px;
		outline: none;
		border: 1px solid var(--input-border-color);
	}

	.register .input-part li ,
	.register .input-part li input {
		width: 100%;
	}

	.register .input-part li input {
		font-size: 15px;
		padding: 5px 10px;
		box-sizing: border-box;
		border-bottom: 1px solid var(--input-border-color);
		margin-bottom: 15px;
	}

	.register .input-part li input:focus {
		border-bottom: 1px solid var(--gray-line-color);
	}
	.register .input-part li input::placeholder {
		font-size: 15px;
		color: var(--input-border-color);
	}

	.register .register-btn {
		width: 100%;
		padding: 7px 0px;
		margin-top: 20px;
		font-size: 15px;
		background-color: var(--navbar-color);
		cursor: pointer;
	}

	.register .register-btn:hover {
		background-color: var(--mint-color);; 
	}
</style>