<template>
  <div class="weather-service">
    <h2>Сервис погоды</h2>
    <!-- Здесь будет код для отображения погоды -->
    <p>Текущая температура: {{ temperature }}°C</p>
  </div>
</template>

<script>
export default {
  name: 'WeatherService',
  data() {
    return {
      temperature: 20, // Заглушка для температуры
    };
  },
  // Здесь будут методы для получения погоды
};
</script>

<style scoped>
.weather-service {
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.weather-service h2 {
  color: #3498db;
}
</style>
