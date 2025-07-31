<template>
  <div>
    <h1>Create New Item</h1>
    <form @submit.prevent="createItem">
      <div>
        <label for="name">Name:</label>
        <input type="text" v-model="item.name" required />
      </div>
      <div>
        <label for="description">Description:</label>
        <textarea v-model="item.description" required></textarea>
      </div>
      <button type="submit">Create</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      item: {
        name: '',
        description: ''
      }
    };
  },
  methods: {
    createItem() {
      // Logic to create a new item
      console.log('Item created:', this.item);
    }
  }
};
</script>

<style scoped>
/* Add your styles here */
</style>