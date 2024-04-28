<template>
    <div class="home-page">
      <h1>Добро пожаловать в Садовый Помощник</h1>
      <p>Ваш интеллектуальный ассистент для ухода за садом.</p>
      <router-link to="/catalog">Перейти к каталогу растений</router-link>
      <router-link to="/profile">Профиль</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HomePage',
    // Здесь могут быть скрипты, если они понадобятся
  };
  </script>
  
  <style scoped>
  .home-page {
    text-align: center;
    margin-top: 50px;
  }
  
  .home-page h1 {
    font-size: 2em;
    color: #34495e;
  }
  
  .home-page p {
    font-size: 1em;
    color: #7f8c8d;
  }
  
  .router-link {
    display: inline-block;
    margin: 10px;
    padding: 10px 15px;
    color: white;
    background-color: #3498db;
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.3s;
  }
  
  .router-link:hover {
    background-color: #2980b9;
  }
  </style>
  