<template>
    <div class="notification-system">
      <h2>Система уведомлений</h2>
      <ul>
        <li v-for="notification in notifications" :key="notification.id">
          {{ notification.message }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'NotificationSystem',
    data() {
      return {
        notifications: [
          { id: 1, message: 'Время полить яблоню!' },
          { id: 2, message: 'Пора удобрить виноград!' },
          // Добавьте другие уведомления здесь
        ],
      };
    },
    // Здесь будут методы для работы с уведомлениями
  };
  </script>
  
  <style scoped>
  .notification-system {
    margin: 20px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  .notification-system h2 {
    color: #e74c3c;
  }
  
  .notification-system ul {
    list-style-type: none;
    padding: 0;
  }
  
  .notification-system li {
    margin: 10px 0;
    padding: 10px;
    background-color: #f6b93b;
    border-radius: 4px;
  }
  </style>
  