<template>
	<section class="login">
    <div class="wrap">
      <span>LOGIN</span>
      <ul class="input-part">
        <li><input type="text" placeholder="학번"></li>
        <li><input type="password" placeholder="비밀번호"></li>
      </ul>
      <button class="login-btn">로그인하기</button>
      <div class="other-btns">
        <span class="register-btn">회원가입</span>
        <span class="find-btn">아이디/비밀번호 찾기</span>
      </div>
    </div>
		
  </section>
</template>

<style scoped>
  .login {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		background-color: var(--navbar-color);
	}

	.login .wrap {
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

	.login .wrap > span {
		font-size: 30px;
		font-weight: bold;
		margin-bottom: 20px;
	}

	.login .input-part {
		width: 100%;
		height: fit-content;
		margin-top: 20px;
	}

	.login .input-part li ,
	.login .input-part li input {
		width: 100%;
	}

	.login .input-part li input::placeholder {
		font-size: 15px;
		color: var(--input-border-color);
	}

	.login .input-part li input {
		font-size: 17px;
		padding: 5px 10px;
		box-sizing: border-box;
		border-bottom: 1px solid var(--input-border-color);
		margin-bottom: 15px;
	}

	.login .input-part li input:focus {
		border-bottom: 1px solid var(--gray-line-color);
	}

	.login .login-btn {
		width: 100%;
		padding: 10px 0px;
		margin-top: 20px;
		font-size: 15px;
		background-color: var(--navbar-color);
		cursor: pointer;
	}

	.login .login-btn:hover {
		background-color: var(--mint-color);
	}

	.login .other-btns {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		margin-top: 10px;
		color: var(--gray-line-color);
	}

	.login .other-btns span {
		cursor: pointer;
	}

	.login .other-btns span:hover {
		font-weight: bold;
	}
</style>