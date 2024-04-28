<template>
    <div class="plant-catalog">
      <h2>Каталог растений</h2>
      <ul>
        <li v-for="plant in plants" :key="plant.id">
          {{ plant.name }} - Полив: {{ plant.watering }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'PlantCatalog',
    data() {
      return {
        plants: [
          { id: 1, name: 'Яблоня', watering: '1 раз в неделю' },
          { id: 2, name: 'Вишня', watering: '2 раза в неделю' },
          // Добавьте другие растения здесь
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .plant-catalog {
    margin: 20px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  .plant-catalog h2 {
    color: #2ecc71;
  }
  
  .plant-catalog ul {
    list-style-type: none;
    padding: 0;
  }
  
  .plant-catalog li {
    margin: 10px 0;
    padding: 10px;
    background-color: #ecf0f1;
    border-radius: 4px;
  }
  </style>
  