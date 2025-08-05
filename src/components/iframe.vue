<template>
  <div class="iframe-container">
    <iframe
      :src="pdfUrl"
      width="100%"
      height="600px"
      frameborder="0"
      title="PDF Document"
    ></iframe>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Указываем путь к PDF файлу
      pdfUrl: 'file:///C:/Users/admin/Downloads/Orazdurdy%C3%BDew%20S~Web%20programmirlemesi.pdf', // Замените на свой URL
    };
  },
};
</script>

<style scoped>
.iframe-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}
</style>
