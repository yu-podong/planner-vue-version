<template>
  <aside id="nav">
    <router-link to="/">
      <span>HOME</span>
    </router-link>
    <router-link to="/userEnter">
      <i class="fas fa-sign-in-alt"></i>
      <span>LOGIN</span>
    </router-link>
    <div class="menu-list">
      <router-link to="/dayPlan">
        <i class="far fa-list-alt"></i>
        <span>Weekly Plan</span>
      </router-link>
      <router-link to="/monthPlan">
        <i class="far fa-calendar-alt"></i>
        <span>Monthly Plan</span>
      </router-link>
    </div>
  </aside>
  <router-view/>
</template>

<style>
  :root {
    --gray-line-color: #666666;
    --input-border-color: #C4C4C4;
    --navbar-color: #9BF0E6;
    --mint-color: #61E4C5;
  }

  html, body {
    margin: 0px;
    padding: 0px;
    width: 100%;
    height: 100%;
    overflow: hidden;
    font-family: 'Noto Sans KR', sans-serif;
  }

  ul {
    list-style: none;
    margin: 0px;
    padding: 0px;
  }

  a {
    text-decoration: none;
    color: black;
  }

  input {
    border: none;
    outline: none;
  }

  button {
    border: none;
  }

  #app {
    width: 100%;
    height: 100%;
    display: flex;
    position: relative;
    flex-direction: row;
  }

  #nav {
    width: 125px;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 10px;
    box-sizing: border-box;
    background-color: var(--navbar-color);
  }

  #nav a {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  #nav > a:nth-child(1) {
    padding: 20px;
    border-bottom: 1px solid var(--gray-line-color);
  }

  #nav a:nth-child(2) { 
    margin: 20px 0px;
  }

  #nav > a:nth-child(2) span {
    margin-left: 5px;
  }

  #nav .menu-list {
    width: 100%;
    display: flex;
    flex-direction: column;
    border-top: 1px solid var(--gray-line-color);
    padding-top: 20px;
  }

  #nav .menu-list a {
    margin-bottom: 20px;
  }

  #nav .menu-list a i {
    font-size: 35px;
    margin-right: 10px;
  }

  #nav .menu-list span {
    text-align: center;
  }

  #nav a:hover {
    font-weight: bold;
  }
  /* monthPlanInput component에서는 안먹어서 여기서 뺐음 */
  .markdown-result ul {
    list-style: disc;
    list-style-position: inherit;
    margin-left: 20px;
    padding-left: 10px;
  }

  
	input[type="checkbox" i]:disabled  {
		background-color: blueviolet;
	}
</style>
