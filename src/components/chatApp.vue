<template>
  <div id="app">
    <!-- Список пользователей для общения -->
    <div class="search-area">
      <input 
        v-model="searchQuery" 
        placeholder="Поиск по имени..." 
        @input="filterUsers" 
      />
    </div>

    <div class="user-list">
      <div 
        v-for="user in filteredUsers" 
        :key="user" 
        class="user" 
        @click="selectUser(user)"
      >
        {{ user }}
      </div>
    </div>

    <!-- Чат с выбранным пользователем -->
    <div v-if="selectedUser" class="chat-container">
      <div class="chat-box">
        <div v-for="(message, index) in messages" :key="index" class="message">
          <span>{{ message.username }}: </span>
          <span>{{ message.text }} </span>
          <span class="time">{{ message.time }}</span>

          <!-- Галочки для статуса сообщения -->
          <span class="status">
            <i v-if="message.status === 'sent'" class="status-icon">✔️</i> 
            <i v-if="message.status === 'delivered'" class="status-icon">✔️✔️</i> 
            <i v-if="message.status === 'read'" class="status-icon green">✔️✔️</i>
          </span>
        </div>
      </div>

      <div class="input-area">
        <input 
          v-model="newMessage" 
          placeholder="Введите сообщение" 
          @keyup.enter="sendMessage" 
        />
        <button @click="sendMessage">Отправить</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: 'Пользователь',  // Присваиваем дефолтное имя
      newMessage: '',
      selectedUser: null,
      users: ['Иван', 'Мария', 'Петр', 'Анастасия', 'Сергей', 'Ольга', 'Дмитрий', 'Екатерина', 'Максим', 'Юлия'],
      filteredUsers: [],
      messages: [],
      searchQuery: '',
    };
  },
  methods: {
    filterUsers() {
      if (this.searchQuery) {
        this.filteredUsers = this.users.filter(user => user.toLowerCase().includes(this.searchQuery.toLowerCase()));
      } else {
        this.filteredUsers = [...this.users];
      }
    },
    selectUser(user) {
      this.selectedUser = user;
      this.messages = [];  // Очистить чат при смене собеседника
    },
    sendMessage() {
      if (this.newMessage.trim()) {
        const message = {
          username: this.username,
          text: this.newMessage,
          time: new Date().toLocaleTimeString(),
          status: 'sent',  // Статус сообщения по умолчанию - отправлено
        };
        
        this.messages.push(message);
        this.newMessage = '';

        // Через некоторое время меняем статус на доставлено
        setTimeout(() => {
          this.updateMessageStatus(message, 'delivered');
        }, 2000);  // Статус "Доставлено" через 2 секунды

        // Через некоторое время меняем статус на прочитано (имитация чтения собеседником)
        setTimeout(() => {
          this.updateMessageStatus(message, 'read');
        }, 4000);  // Статус "Прочитано" через 4 секунды
      }
    },
    updateMessageStatus(message, status) {
      const index = this.messages.indexOf(message);
      if (index !== -1) {
        this.$set(this.messages, index, { ...message, status });
      }
    },
  },
  mounted() {
    this.filteredUsers = [...this.users];  // Изначально заполняем список пользователей
  },
};
</script>

<style scoped>
#app {
  font-family: Arial, sans-serif;
  padding: 20px;
}

.search-area {
  margin-bottom: 20px;
}

.user-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.user {
  padding: 10px;
  border: 1px solid #ccc;
  cursor: pointer;
}

.user:hover {
  background-color: #f0f0f0;
}

.chat-container {
  margin-top: 20px;
}

.chat-box {
  border: 1px solid #ccc;
  padding: 10px;
  max-height: 300px;
  overflow-y: auto;
  margin-bottom: 20px;
}

.message {
  margin-bottom: 10px;
}

.input-area {
  display: flex;
  gap: 10px;
}

input {
  padding: 5px;
  font-size: 14px;
}

button {
  padding: 5px 10px;
  font-size: 14px;
  cursor: pointer;
}

button:hover {
  background-color: #f0f0f0;
}

input:focus {
  outline: none;
  border: 1px solid #007bff;
}

.time {
  font-size: 0.8em;
  color: gray;
  margin-left: 5px;
}

.status {
  margin-left: 10px;
}

.status-icon {
  font-size: 18px;
  color: gray;
}

.status-icon.green {
  color: green;
}
</style>
