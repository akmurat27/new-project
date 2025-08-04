<template>
  <div class="email-details" v-if="email">
    <h1>{{ email.subject }}</h1>
    <div class="email-sender">От: {{ email.sender }}</div>
    <div class="email-date">{{ email.date }}</div>
    <div class="email-content">
      <p>{{ email.content }}</p>
    </div>
  </div>
  <p v-else>Загрузка...</p>
  <p v-if="errorMessage">{{ errorMessage }}</p>
</template>

<script>
import axios from 'axios';

export default {
  name: 'EmailDetails',
  props: ['id'], // Получаем ID письма из параметров маршрута
  data() {
    return {
      email: null, // Данные письма
      errorMessage: '', // Сообщение об ошибке
    };
  },
  created() {
    this.fetchEmailDetails(); // Загружаем данные письма при создании компонента
  },
  methods: {
    async fetchEmailDetails() {
      try {
        const response = await axios.get(`https://api.example.com/emails/${this.id}`); // Замените на свой API
        this.email = response.data; // Сохраняем данные письма
      } catch (error) {
        this.errorMessage = 'Не удалось загрузить письмо. Попробуйте позже.'; // Обрабатываем ошибку
      }
    },
  },
};
</script>

<style scoped>
.email-details {
  padding: 20px;
}

.email-sender {
  font-size: 1.1em;
  margin: 10px 0;
}

.email-content {
  margin-top: 20px;
  padding: 10px;
  background-color: #f9f9f9;
}

p {
  color: red;
}
</style>
