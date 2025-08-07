<template>
  <div class="email-report">
    <h1>Arzalar</h1>
    <p class="count">Количество писем: {{ filteredEmails.length }}</p>

    <!-- Поиск -->
    <div class="search">
      <label for="searchInput" style="margin-right: 20px;">Поиск по ключевым словам:</label>
      <input type="text" v-model="searchQuery" id="searchInput" placeholder="Hatyňyz">
    </div>

    <!-- Фильтры и сортировка (оставляем как было) -->
    <div class="filters">
      <div style="margin-right: 20px;">
        <label for="readFilter" style="margin-right: 20px;">Фильтр по статусу:</label>
        <select v-model="readFilter" id="readFilter">
          <option value="all">Все</option>
          <option value="read">Прочитано</option>
          <option value="unread">Не прочитано</option>
        </select>
      </div>

      <div>
        <label for="sortBy" style="margin-right: 20px;">Сортировка по:</label>
        <select v-model="sortBy" id="sortBy">
          <option value="date">Дате</option>
          <option value="sender">Отправителю</option>
          <option value="subject">Теме</option>
        </select>
        <button @click="sortEmails" class="btn">Сортировать</button>
      </div>
    </div>
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
        <tr v-for="(email, index) in filteredEmails" :key="email.id">
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
  data() {
    return {
      emails: [
        { id: 1, sender: 'example1@domain.com', date: '2025-08-01', subject: 'Счёт №12345', read: false, },
        { id: 2, sender: 'example2@domain.com', date: '2025-08-02', subject: 'Заявка на отпуск', read: true, },
        { id: 3, sender: 'example3@domain.com', date: '2025-08-03', subject: 'Отчёт за июль', read: false,  },
        { id: 4, sender: 'example4@domain.com', date: '2025-08-04', subject: 'Важно: дата сдачи отчета', read: true, },
        { id: 5, sender: 'example5@domain.com', date: '2025-08-04', subject: 'Важно: дата сдачи отчета', read: true, },
      ],
      searchQuery: '',
      readFilter: 'all',
      sortBy: 'date',
    };
  },
  computed: {
    filteredEmails() {
      let emails = this.emails;

      // Фильтруем по поисковому запросу
      if (this.searchQuery) {
        emails = emails.filter(email => {
          const query = this.searchQuery.toLowerCase();
          return (
            email.subject.toLowerCase().includes(query) ||
            email.body.toLowerCase().includes(query) ||
            email.sender.toLowerCase().includes(query)
          );
        });
      }

      // Фильтруем по статусу прочтения
      if (this.readFilter === 'read') {
        emails = emails.filter(email => email.read);
      } else if (this.readFilter === 'unread') {
        emails = emails.filter(email => !email.read);
      }

      // Сортировка
      return emails.sort((a, b) => {
        if (this.sortBy === 'date') {
          return new Date(b.date) - new Date(a.date);
        } else if (this.sortBy === 'sender') {
          return a.sender.localeCompare(b.sender);
        } else if (this.sortBy === 'subject') {
          return a.subject.localeCompare(b.subject);
        }
        return 0;
      });
    },
  },
  methods: {
    toggleReadStatus(email) {
      email.read = !email.read;
    },
    sortEmails() {
      // Принудительное обновление сортировки
      this.filteredEmails;
    },

    deleteEmail(emailId) {
      this.emails = this.emails.filter(email => email.id !== emailId);
    }
    
  }
};
</script>

<style scoped>
.email-report {
  font-family: 'Arial', sans-serif;
  margin: 20px;
  padding: 20px;
  background-color: #f4f7fb;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
}

h1 {
  font-size: 24px;
  color: #333;
}

.count {
  font-size: 16px;
  margin-bottom: 15px;
}

.search, .filters {
  display: flex;
  align-items: center;
  margin: 20px 0;
}

.search label, .filters label {
  font-size: 14px;
  color: #555;
}

.search input, .filters select {
  padding: 8px 12px;
  border-radius: 4px;
  border: 1px solid #ccc;
}

.search input::placeholder {
  color: #888;
}

.btn {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 8px 15px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  margin-left: 20px;
}

.btn:hover {
  background-color: #0056b3;
}

.email-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
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

.email-table td button {
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.btn-read {
  background-color: #28a745;
  color: white;
}

.btn-unread {
  background-color: #ffc107;
  color: white;
}

.btn-delete {
  background-color: #dc3545;
  color: white;
}

.btn-delete:hover {
  background-color: #c82333;
}
</style>