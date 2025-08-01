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

        <div class="content">
            <div class="nav-bar">
                <router-link to="/">GIRIŞ</router-link>
                <router-link to="/about">ÇYKYŞ</router-link>
                <router-link to="/contact">IÇKI</router-link>
            </div>

            <div class="main-content">
                <div class="main-info">
                    <h1>ESASY MAGLUMATLAR</h1>

                    <div class="separator"></div>

                    <div style="display: flex; flex-direction: column; justify-content: space-around;">

                        <div class="first-section">
                            <span>Görnüşi</span>
                            <div class="nav-links">
                                <div class="first-link">
                                    <router-link to="/more-info">ÝURIDIKI ŞAHS</router-link>
                                </div>
                                <div class="second-link">
                                    <router-link to="/more-info">FIZIKI ŞAHS</router-link>
                                </div>
                            </div>
                        </div>
                        <div class="second-section">
                            <span>Bölüm</span>

                            <select v-model="selectedNumbers" id="numbers" :class="{'error': !selectedNumbers}">
                                <option value="" disabled>Select a number</option>
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                            </select>

                            <!-- <p v-if="!selectedNumbers && !isTouched" class="error-text">Hökman doldurmaly</p> -->
                        </div>
                        <div class="third-section">
                            <div class="third-section-title">
                                <span>Kimden</span>
                            </div>
                            <div class="third-section-content">
                                <input type="text" placeholder="Kimden" class="input-field">
                            </div>
                        </div>
                        <div class="fourth-section">
                            <div class="fourth-section-title"> 
                                <span>Çykyş</span>
                            </div>
                            <div>
                                <input type="text" placeholder="Senesi" class="input-field-1">
                                <input type="text" placeholder="belgisi" class="input-field-2">
                            </div>
                        </div>
                        
                        <div class="line-1"></div>

                        <div class="fourth-section">
                            <div class="fourth-section-title">
                                <span>Giriş</span>
                            </div>
                            <div>
                                <input type="text" placeholder="Senesi" class="input-field-1">
                                <input type="text" placeholder="belgisi" class="input-field-2">
                            </div>
                        </div>
                        <div class="fourth-section">
                            <div class="fourth-section-title">
                                <span>Düşündiriş</span>
                            </div>
                            <div>
                                <textarea name="" id="" class="input-field-1"></textarea>
                            </div>
                        </div>

                        <div class="fourth-section">
                            <div class="fourth-section-title">
                                <span>Baglamak</span>
                            </div>
                            <div>
                                <input type="text" placeholder="DID" class="input-field-1">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="additional-info">
                    <span>RESMINAMA</span>
                    <div class="line"></div>
                    <div class="info-item">
                        <p><span>Info Item 1:</span> Description for info item 1.</p>
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
            selectedNumbers: null, // Значение по умолчанию
            isTouched: false
        };
    },
    watch: {
        selectedNumbers(newValue) {
            // Отслеживаем изменение значения и помечаем, что выбор был сделан
            this.isTouched = true;
        },
    },
};
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
        }
    }
    .line {
        width: 100%;
        height: 1px;
        background: darken(#eee, 5%);
        margin: 1rem 0;
    }

    .content {
        height: calc(100vh - 100px);
        background-color: white;
        overflow: hidden;
        border-radius: 8px;

        .nav-bar {
            width: 280px;
            margin: 20px auto;
            display: flex;
            background-color: gray;
            border-radius: 3px;
            a {
                padding: 10px;
                text-decoration: none;
                color: white;
                width: 100%;
                text-align: center;
                &:hover {
                    background-color: black;
                }
            }
        }
        .main-content {
            display: flex;
            padding: 20px;
            .main-info {
                width: 1550px;
                .first-section {
                    display: flex;
                    align-items: center;
                    width: 60%;
                    margin: auto;
                    span{
                        width: 170px;
                        text-align: end;
                    }
                    .nav-links {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        border-radius: 3px;
                        margin-left: 30px;
                        .first-link{
                            text-align: center;
                            background-color: gray;
                            padding: 12px 16px;
                            margin: 0 10px;
                        }
                        .second-link{
                            text-align: center;
                            background-color: gray;
                            padding: 12px 16px;
                        }
                        a{
                            text-decoration: none;
                            color: white;
                            margin: 0 10px;
                            padding: 12px;
                            &:hover {
                                background: black;
                            }
                        }
                    }
                }
                .second-section {
                    width: 60%;
                    margin: 20px auto;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    span{
                        width: 170px;
                        text-align: end;
                    }
                    select{
                        padding: 8px 12px;
                        width: 725px;
                    }
                    .error {
                        border: 2px solid red;
                    }

                    .error-text {
                        color: red;
                        font-size: 14px;
                    }
                }
                .third-section{
                    width: 60%;
                    margin: auto;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    .third-section-title {
                        width: 170px;
                        text-align: end;
                    }
                    .third-section-content {
                        .input-field{
                            width: 700px;
                            padding: 8px 12px;
                            border: 1px solid #ccc;
                            border-radius: 3px;
                            &:focus {
                                border-color: black;
                                outline: none;
                            }
                        }
                    }
                }

                .fourth-section {
                    width: 60%;
                    margin: 20px auto;
                    display: flex;
                    align-items: center;
                    .fourth-section-title {
                        width: 170px;
                        text-align: end;
                        margin-right: 35px;
                    }
                    .input-field-1{
                        width: 300px;
                        padding: 8px 12px;
                        border: 1px solid #ccc;
                        border-radius: 3px;
                        margin-right: 30px;
                        &:focus {
                            border-color: black;
                            outline: none;
                        }
                    }
                    .input-field-2{
                        width: 150px;
                        padding: 8px 12px;
                        border: 1px solid #ccc;
                        border-radius: 3px;
                        &:focus {
                            border-color: black;
                            outline: none;
                        }
                    }
                }

                .line-1 {
                    width: 725px;
                    margin: auto;
                    margin-left: 33%;
                    height: 1px;
                    background: darken(#eee, 5%);
                }
                
            }

            .additional-info {
                width: 365px;
                margin-top: 21.44px;
                span{
                    font-weight: bold;
                    font-size: 32px;
                }
                .info-item {
                    background: lightblue;
                    border-radius: 3px;

                    span {
                        font-weight: bold;
                    }
                }
            }
            .separator {
                height: 1px;
                background: darken(#eee, 5%);
                margin: 1rem 0;
            }
            p {
                margin: 1rem 0;
            }
        }
    }
}
</style>