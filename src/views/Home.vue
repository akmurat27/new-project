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
              <label for="name">Görnüşi</label>
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
              <label for="text">Bölüm</label>
              <select name="" id="">
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
            <div class="form-group">
              <div class="">
                  <label>Kimden</label>
              </div>
              <div class="input-section">
                <input type="text" placeholder="Kimden" class="input-field">
              </div>
            </div>

            <div class="form-group">
              <div class="">
                <label>Çykyş</label>
              </div>
              <div class="input-section">
                <input type="text" placeholder="Çykyş" class="input-field">
              </div>
            </div>

            <div class="line"></div>

            <div class="form-group">
              <div class="">
                <label>Giriş</label>
              </div>
              <div class="input-section">
                <input type="text" placeholder="Giriş" class="input-field">
              </div>
            </div>

            <div class="form-group">
              <div class="">
                <label>Düşündiriş</label>
              </div>
              <div class="input-section">
                <textarea name="" id="" class="input-field-1"></textarea>
              </div>
            </div>

            <div class="form-group">
              <div class="fourth-section-title">
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
            <img src="@/assets/additional-info/backup.png" alt="backup" class="image">
            <span>Faýllary şu ýere goýuň</span>
            <span>ÝA-DA</span>
            <button class="btn">Saýlaň</button>
          </div>
    
        </div>
      </div>
    </div>
  </main>
</template>

<script>
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
    width: 100%;
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
            .list-group{
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
        height: 60%;
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
        span {
          font-size: 22px;
          color: white;
        }
        .btn{
          font-size: 18px;
          width: 180px;
          height: 50px;
          border: none;
          border-radius: 5px;
          background: white;
          color: lightblue;
          }
        }
      }
    }
  }
} 
</style>