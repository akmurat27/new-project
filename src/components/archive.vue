<template>
  <div class="archive-section">
    <h2>Архивированные письма</h2>
    <table class="email-table">
      <thead>
        <tr>
          <th>№</th>
          <th>Отправитель</th>
          <th>Дата</th>
          <th>Тема</th>
          <th>Прочитано</th>
          <th>Удалить</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(email, index) in archivedEmails" :key="email.id">
          <td>{{ index + 1 }}</td>
          <td>{{ email.sender }}</td>
          <td>{{ email.date }}</td>
          <td>{{ email.subject }}</td>
          <td>
            <button @click="toggleReadStatus(email)" :class="{'btn-read': email.read, 'btn-unread': !email.read}">
              {{ email.read ? 'Да' : 'Нет' }}
            </button>
          </td>
          <td>
            <button @click="deleteEmail(email.id)" class="btn btn-delete">
              Удалить
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    archivedEmails: Array, // Принимаем архивированные письма как props
  },
  methods: {
    toggleReadStatus(email) {
      email.read = !email.read;
    },
    deleteEmail(emailId) {
      this.$emit('delete-email', emailId); // Эмитируем событие для удаления письма
    }
  }
};
</script>

<style scoped>
/* Стиль компонента Archive */
.archive-section {
  margin-top: 30px;
}

.archive-section h2 {
  color: #333;
  margin-bottom: 20px;
}

.email-table {
  width: 100%;
  border-collapse: collapse;
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
}

.email-table th, .email-table td {
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #f0f0f0;
}

.email-table th {
  background-color: #007bff;
  color: white;
}

.email-table tr:hover {
  background-color: #f1f1f1;
}

.btn-delete {
  background-color: #dc3545;
  color: white;
}

.btn-delete:hover {
  background-color: #c82333;
}
</style>
