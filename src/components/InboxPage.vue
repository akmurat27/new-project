<template>
  <div class="inbox-container">
    <h1>Входящие</h1>
    <ul v-if="emails.length > 0">
      <li v-for="email in emails" :key="email.id">
        <router-link :to="'/inbox/' + email.id">
          <div class="email-item">
            <div class="email-subject">{{ email.subject }}</div>
            <div class="email-sender">{{ email.sender }}</div>
            <div class="email-date">{{ email.date }}</div>
          </div>
        </router-link>
      </li>
    </ul>
    <p v-else>Загрузка...</p>
    <p v-if="errorMessage">{{ errorMessage }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'InboxPage',
  data() {
    return {
      emails: [], // Массив для хранения писем
      errorMessage: '', // Сообщение об ошибке
    };
  },
  created() {
    this.fetchEmails(); // Загружаем письма при создании компонента
  },
  methods: {
    async fetchEmails() {
      try {
        const response = await axios.get('https://api.example.com/emails'); // Замените на свой API
        this.emails = response.data; // Сохраняем список писем в массив
      } catch (error) {
        this.errorMessage = 'Не удалось загрузить письма. Попробуйте позже.'; // Обрабатываем ошибку
      }
    },
  },
};
</script>

<style scoped>
.inbox-container {
  padding: 20px;
}

.email-item {
  border-bottom: 1px solid #ccc;
  padding: 10px 0;
}

.email-subject {
  font-weight: bold;
}

.email-sender,
.email-date {
  font-size: 0.9em;
  color: gray;
}

p {
  color: red;
}
</style>
