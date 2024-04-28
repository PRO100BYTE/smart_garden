<template>
    <div class="user-profile">
      <h2>Профиль пользователя</h2>
      <form @submit.prevent="updateProfile">
        <label for="username">Имя пользователя:</label>
        <input type="text" id="username" v-model="profile.username" />
  
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="profile.email" />
  
        <button type="submit">Обновить профиль</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'UserProfile',
    data() {
      return {
        profile: {
          username: 'Садовод123',
          email: 'gardener@example.com',
        },
      };
    },
    methods: {
      updateProfile() {
        // Здесь будет код для обновления профиля пользователя
        alert('Профиль обновлен!');
      },
    },
  };
  </script>
  
  <style scoped>
  .profile {
    margin: 20px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  .profile label {
    display: block;
    margin-top: 10px;
  }
  
  .profile input {
    width: 100%;
    padding: 10px;
    margin-top: 5px;
  }
  
  .profile button {
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #2ecc71;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  </style>
  