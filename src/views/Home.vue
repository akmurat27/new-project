<template>
  <main class="home-page">
    <div class="nav-icons">
        <router-link to="/">
          <img src="@/assets/documents/search.png" alt="Home">
        </router-link>
        <router-link to="/about">
          <img src="@/assets/documents/bell.png" alt="About">
        </router-link>
        <router-link to="/contact">
          <img src="@/assets/documents/office-worker.png" alt="Contact">
        </router-link>
    </div>

    <div class="line"></div>

    <div class="about-section">
      <div class="nav-bar">
        <router-link to="/">GIRIŞ</router-link>
        <router-link to="/about">ÇYKYŞ</router-link>
        <router-link to="/contact">IÇKI</router-link>
      </div>
      <div class="main-content-header">
        <div class="form-container">

          <h1 class="form-title">ESASY MAGLUMATLAR</h1>
          <div class="line"></div>
          <form action="" class="form-action">
            
            <div class="form-group">
              <div class="form-label">
                <label for="name">Görnüşi</label>
              </div>
              <div class="list-group">
                <button class="btn">
                  <span>ÝURIDIKI ŞAHS</span>
                </button>
                <button class="btn">
                  <span>FIZIKI ŞAHS</span>
                </button>
              </div>
            </div>

            <div class="form-group">
              <div class="form-label">
                <label for="text">Bölüm</label>
              </div>
              <select name="" id="">
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
            <div class="form-group">
              <div class="form-label">
                <label>Kimden</label>
              </div>
              <div class="input-section">
                <input type="text" placeholder="Kimden" class="input-field">
              </div>
            </div>

            <div class="form-group">
              <div class="form-label">
                <label>Çykyş</label>
              </div>
              <div class="input-section">
                <input type="text" placeholder="Çykyş" class="input-field">
              </div>
            </div>

            <div class="line-1"></div>

            <div class="form-group">
              <div class="form-label">
                <label>Giriş</label>
              </div>
              <div class="input-section">
                <input type="text" placeholder="Giriş" class="input-field">
              </div>
            </div>

            <div class="form-group">
              <div class="form-label">
                <label>Düşündiriş</label>
              </div>
              <div class="input-section">
                <textarea name="" id="" class="input-field-1"></textarea>
              </div>
            </div>

            <div class="form-group">
              <div class="form-label">
                <label>Baglamak</label>
              </div>
              <div class="input-section">
                <input type="text" placeholder="DID" class="input-field-1">
              </div>
            </div>

          </form>
          <div class="register">
            <button class="register-btn">REGISTRASIÝA</button>
          </div>
        </div>
        <div class="additional-info">
          <div class="text">
            <span>RESMINAMA</span>
          </div>
          <div class="line"></div>
          <div class="info-item">
            <div class="drop-zone" @dragover.prevent="onDragOver" @drop.prevent="onDrop">
              <img src="@/assets/additional-info/backup.png" alt="backup" class="image">
              <p>Faýllary şu ýere goýuň </p> 
              <span>ÝA-DA</span>
              <input 
                type="file" 
                ref="fileInput" 
                @change="onFileSelect" 
                hidden 
              />
              <button @click="openFileDialog">Saýlaň</button>

              <div v-if="files.length">
                <h3>Saýlanan faýllar:</h3>
                <ul>
                  <li v-for="(file, index) in files" :key="index">
                    {{ file.name }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
    
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      files: []
    };
  },
  methods: {
    // Обработчик события dragover (необходимо для разрешения drop)
    onDragOver(event) {
      event.preventDefault();
    },

    // Обработчик события drop
    onDrop(event) {
      const droppedFiles = event.dataTransfer.files;
      if (droppedFiles.length) {
        this.files = Array.from(droppedFiles);
      }
    },

    // Обработчик события выбора файла
    onFileSelect(event) {
      const selectedFiles = event.target.files;
      if (selectedFiles.length) {
        this.files = Array.from(selectedFiles);
      }
    },

    // Открытие диалога выбора файлов
    openFileDialog() {
      this.$refs.fileInput.click();
    }
  }
}

</script>

<style lang="scss" scoped>
.home-page {
  .nav-icons {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 20px;
    img {
      width: 24px;
      height: 24px;
      padding: 0 12px;
      cursor: pointer;
    }
  }
  .line {
    height: 1px;
    background: darken(#eee, 5%);
    margin-bottom: 20px;
  }

  .about-section {
    width: 100%;
    background: white;
    .nav-bar {
      width: 350px;
      margin: auto;
      display: flex;
      align-items: center;
      background-color: gray;
      border-radius: 3px;
      a {
        padding: 10px;
        text-decoration: none;
        color: white;
        width: 100%;
        text-align: center;
        font-size: 18px;
        cursor: pointer;
        &:hover {
          background-color: black;
        }
      }
     }
     .main-content-header {
      display: flex;
      width: 100%;
      .form-container {
          width: 70%;
          margin: 0 auto;
          padding: 20px;
          border-radius: 8px;
          .line-1 {
            width: 85%;
            margin: 0 auto;
            margin-right: 0 ;
            height: 1px;
            background: darken(#eee, 5%);
          }
          .form-title {
            font-size: 32px;
            font-weight: 100;
            color: #333;
          }
        
        .form-action{
          width: 100%;
          max-width: 1000px;
          margin: 0 auto;
          margin-right: 0;
          padding: 20px;
          font-size: 22px;
          .form-group {
            display: flex;
            align-items: center;
            margin: 2rem;
            .form-label{
              width: 100px;
              text-align: end;
            }
            .list-group{
              width: 100%;
              list-style: none;
              justify-content: space-between;
              align-items: center;
              border-radius: 3px;
              margin-left: 30px;
              .btn{
                background-color: gray;
                padding: 16px 20px; 
                border: none;
                margin-right: 12px;
                color: white;
                cursor: pointer;
                &:hover {
                  background-color: black;
                }
              }
            }
            select{
              width: 100%;
              padding: 16px; 
              border-radius: 4px;
              border: 1px solid #ccc;
              margin-left: 40px;
            }
            .input-section {
              width: 100%;
              margin-left: 40px;
              .input-field, .input-field-1 {
                width: 100%;
                padding: 16px;
                border-radius: 4px;
                border: 1px solid #ccc;
              }
            }
          }
        }
        
        .register {
          margin-top: 20px;
          .register-btn {
            padding: 16px 32px;
            background-color: white;
            color: #007bff;
            border: 1px solid #007bff;
            border-radius: 4px;
            cursor: pointer;
            font-size: 18px;
            &:hover {
              background-color: #0056b3;
              color: white;
            }
          }
        }
      }
      .additional-info {
      width: 30%;
      padding: 20px;
      border-radius: 8px;
      .text {
        font-size: 32px;
        font-weight: 100;
        color: #333;
        padding: 20px 0;
      }
      .info-item {
        height: 40%;
        background: lightblue;
        border: dotted;
        color: red;
        border-radius: 3px;
        padding: 8px 12px;
        margin-bottom: 8px;
        display: flex;
        justify-content: space-evenly;
        flex-direction: column;
        align-items: center;
        .image{
          color: white;
          filter: invert(1) brightness(1000%);
          max-width: 100px;
          max-height: 100px;
        }

        .drop-zone {
          width: 400px;
          height: 300px;
          border-radius: 10px;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          align-items: center;
          text-align: center;
          font-size: 16px;
          color: #333;
          transition: background-color 0.3s ease;
          padding: 10px;
          p {
            margin: 0;
            font-size: 22px;
            color: white;
          }
          span{
            font-size: 22px;
            color: white;
          }
  
          button {
            font-size: 18px;
            width: 180px;
            height: 50px;
            border: none;
            border-radius: 5px;
            background: white;
            color: lightblue;
            cursor: pointer;
            &:hover {
              background: black;
              color: white;
            }
            
          }
          ul {
            list-style-type: none;
            padding: 0;
          }
  
          li {
            margin: 5px 0;
          }
        }


      }
    }
  }
}
}
</style>