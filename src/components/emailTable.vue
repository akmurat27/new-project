<template>
  <div>
    <h1>Отчёт по письмам</h1>
    <p>Количество писем: {{ filteredEmails.length }}</p>

    <!-- Поиск -->
    <div>
      <label for="searchInput">Поиск по ключевым словам:</label>
      <input type="text" v-model="searchQuery" id="searchInput" placeholder="Введите ключевое слово">
    </div>

    <!-- Фильтры и сортировка (оставляем как было) -->
    <div>
      <label for="readFilter">Фильтр по статусу:</label>
      <select v-model="readFilter" id="readFilter">
        <option value="all">Все</option>
        <option value="read">Прочитано</option>
        <option value="unread">Не прочитано</option>
      </select>
    </div>

    <div>
      <label for="sortBy">Сортировка по:</label>
      <select v-model="sortBy" id="sortBy">
        <option value="date">Дате</option>
        <option value="sender">Отправителю</option>
        <option value="subject">Теме</option>
      </select>
      <button @click="sortEmails">Сортировать</button>
    </div>

    <table>
      <thead>
        <tr>
          <th>№</th>
          <th>Отправитель</th>
          <th>Дата</th>
          <th>Тема</th>
          <th>Тело письма</th>
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
          <td>{{ email.body }}</td>
          <td>
            <button @click="toggleReadStatus(email)">
              {{ email.read ? 'Да' : 'Нет' }}
            </button>
          </td>
          <td>
            <button @click="deleteEmail(email.id)">
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
        { id: 1, sender: 'example1@domain.com', date: '2025-08-01', subject: 'Счёт №12345', read: false, body: 'Документы по оплате' },
        { id: 2, sender: 'example2@domain.com', date: '2025-08-02', subject: 'Заявка на отпуск', read: true, body: 'Отпуск с 1 сентября' },
        { id: 3, sender: 'example3@domain.com', date: '2025-08-03', subject: 'Отчёт за июль', read: false, body: 'Подробный отчёт' },
        { id: 4, sender: 'example4@domain.com', date: '2025-08-04', subject: 'Важно: дата сдачи отчета', read: true, body: 'Напоминаем о сроках сдачи' },
        { id: 5, sender: 'example5@domain.com', date: '2025-08-04', subject: 'Важно: дата сдачи отчета', read: true, body: 'Напоминаем о сроках сдачи' },
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
