<template>
  <section class="home">
    <span class="title">PLANNER-VUE-VERSION</span>
    <div class="p-wrap">
      <p>기존의 펜으로 작성하던 플래너를 web에서도 사용할 수 있는 서비스</p>
      <p>더이상 번거롭게 플래너를 가방에 넣고 다니지 마세요😊</p>
      <p><b>학번</b>과 <b>비밀번호</b>를 입력하며 등록만 한다면,<br>
        펜과 플래너 없이 휴대폰 / PC만으로도 플래너 기능을 사용할 수 있습니다.
      </p>
      <p class="alert-msg">🔎 이 플래너는 <b>'Markdown editor'</b>를 사용합니다. 🔎</p>
    </div>
    <a class="start-btn" href="/userEnter"> Planner 시작하기 </a>
  </section>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',
  components: {}
}
</script>

<style scoped>
  .home {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
  }

  .home .title {
    font-size: 80px;
    font-weight: bold;
    color: var(--mint-color);
  }

  .home .p-wrap {
    margin-top: 40px;
  }

  .home p {
    font-size: 25px;
    text-align: center;
  }

  .home .alert-msg {
    font-size: 20px;
    color: #dfafad;
  }

  .home .start-btn {
    width: fit-content;
    height: fit-content;
    padding: 10px 50px;
    margin-top: 30px;
    border-radius: 5px;
    box-shadow: 2px 2px 2px var(--input-border-color);
    background-color: var(--navbar-color);

    animation-name: moveUpDown;
    animation-duration: 3s;
    animation-iteration-count: infinite;
  }

  .home .start-btn:hover {
    background-color: #86fff1;
  }

  @keyframes moveUpDown {
    from {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(10px);
    }
    to {
      transform: translateY(0px);
    }
  }
</style>