<template>
    <main class="inbox-general">
        <inbox />
        <div class="document-container">

            <div class="section-first">
                <div class="first-title">
                    <h1>GIRIŞ HAT</h1>
                    <button class="btn">
                        <span class="connected">
                            BAGLANANLAR
                        </span>
                    </button>
                </div>

                <div class="line"></div>

                <div class="">
                    <h1 style="margin-bottom: 10px;">Türkmenistanyň Ylymlar akademiýasy</h1>
                    <span style="font-weight: bold;">Ýuridiki şahs</span>
                </div>
                <div class="container-box" style="width: 100%; margin: 20px 0;">

                    <div class="section" style="display: flex; justify-content: space-between;">
                        <div style="display: flex; flex-direction: column;">
                            <span>Çykyş senesi</span>
                            <span style="margin-top: 20px;">(DID:40554)</span>
                        </div>
                        <div class="links" style="display: flex; flex-direction: column; width: 50%;">
                            <span>{{ formattedDate }}</span>
                            <span style="font-weight: bold; margin-top: 10px;">№03/1287</span>
                        </div>
                    </div>

                    <div class="line"></div>
                    
                    <div class="" style="display: flex; justify-content: space-between; margin: 20px 0;">
                        <span>Giriş senesi</span>
                        <div class="" style="width: 50%; display: flex; flex-direction: column;">
                            <span>{{ formattedDate }}</span>
                            <span style="font-weight: bold; margin-top: 10px;">№1984</span>
                        </div>
                    </div>
                    
                    <div class="" style="display: flex; justify-content: space-between; margin: 20px 0;" >
                        <span>Kabul eden</span>
                        <div style="display: flex; flex-direction: column; width: 50%;">
                            <span>Ogulgerek Tuliýewa</span>
                            <span style="font-weight: bold; margin-top: 10px;">Türkmenistanyň Ýokary gözegçilik edarasy - Hyzmat edýän işgärler</span>
                        </div>
                    </div>
                    
                    <div class="" style="display: flex; justify-content: space-between; margin: 20px 0;" >
                        <span>Kime ýazylan</span>
                        <span style="width: 50%;">Türkmenistanyň Ýokary gözegçilik edarasy</span>
                    </div>
                    
                    <div class="" style="display: flex; justify-content: space-between; margin: 20px 0;">
                        <span>Düşündiriş</span>
                        <span style="width: 50%;">Maksatnamalaryň we bellenilen çäreleriň ýerine ýetirilişi barada</span>
                    </div>
                </div>
            </div>  

            <div class="section-second">
                <div class="second-title">
                    <div class="nav-links">
                        <div>
                            <span>Jemi: 5 sahypa</span>
                        </div>

                        <div>
                            <button class="btn" @click="openDialog"><span>GÖRMEK</span></button>
                            <button class="btn"><span>ÝÜKLEMEK</span></button>
                        </div>
                    </div>
                     <!-- Модальный диалог -->
                    <div v-if="isDialogActive" class="dialog-overlay">
                        <div class="dialog-content">
                            <h2>Dialog</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>

                            <!-- iframe в диалоге -->
                            <div v-if="isIframeActive">
                            <iframe
                                :src="pdfUrl"
                                width="100%"
                                height="400"
                                frameborder="0"
                            ></iframe>
                            </div>

                            <div class="dialog-actions">
                                <button @click="closeDialog">Close Dialog</button>
                                <button @click="toggleIframe">Toggle Iframe</button>
                            </div>
                        </div>
                    </div>
                    <iframe :src="pdfUrl" height="500" class="iframe-example"></iframe>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import inbox from '@/components/inbox.vue';

export default {
    name: 'PdfViewer',

    data() {
        const today = new Date();

        return {
            pdfUrl: '/pdf/document.pdf',
            today,
            months: ["Ýanwar", "Fewral", "Mart", "Aprel", "Maý", "Iýun", "Iýul", "Awgust", "Sentýabr", "Oktýabr", "Noýabr", "Dekabr"],
            weekdays: ["Duşenbe", "Sişenbe", "Çarşenbe", "Penşenbe", "Anna", "Şenbe", "Ýekşenbe"],

            isDialogActive: false, // Флаг для контроля отображения диалога
            isIframeActive: false, // Флаг для контроля отображения iframe
        };
    },
    methods: {
        openDialog() {
            this.isDialogActive = true; // Открыть диалог
        },
        closeDialog() {
            this.isDialogActive = false; // Закрыть диалог
        },
        toggleIframe() {
            this.isIframeActive = !this.isIframeActive; // Переключить состояние iframe
        },
    },
    components: {
        inbox
    },
    computed: {
        formattedDate() {
            const day = this.today.getDate();  // Day of the month
            const month = this.months[this.today.getMonth()];  // Get month name
            const year = this.today.getFullYear();  // Get year
            const weekday = this.weekdays[this.today.getDay()];  // Get weekday name
            
            // Return in the format: "Month Day, Year (Weekday)"
            return `${month} ${day}, ${year}ý. (${weekday})`;
        },
    },
}
</script>

<style lang="scss" scoped>
.inbox-general{
    .document-container {
        display: flex;
        padding: 20px;
        background: lighten(#f5f5f5, 5%);
        h1 {
            font-size: 32px;
            font-weight: 100;
            margin: 0;
        }
        span{
            font-size: 22px;
        }
        .section-first {
            width: 50%;
            display: flex;
            flex-direction: column;
            .first-title{
                display: flex;
                justify-content: space-between;
                align-items: center;
                h1 {
                    font-size: 18px;
                    margin: 0;
                    color: rgb(117, 185, 207);
                }
                .btn{
                    background: transparent;
                    border: none;
                    color: rgb(117, 185, 207);
                    cursor: pointer;
                    border: 2px solid rgb(117, 185, 207);
                    border-radius: 3px;
                    padding: 12px 16px;
                    .connected{
                        color: rgb(117, 185, 207);
                    }
                }
            }
            .line {
                height: 1px;
                background: darken(#eee, 5%);
                margin: 20px 0px;
            }
        }

        .section-second {
            width: 50%;
            .second-title{
                display: flex;
                justify-content: space-between;
                align-items: center;
                flex-direction: column;
                padding-left: 20px;
                .dialog-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background-color: rgba(0, 0, 0, 0.5); /* Прозрачный черный фон */
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .dialog-content {
                    background-color: white;
                    padding: 20px;
                    border-radius: 8px;
                    width: 300px;
                    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
                }

                .dialog-actions {
                    margin-top: 20px;
                    text-align: right;
                }

                span {
                    font-size: 22px;
                    color: black;
                }

                .nav-links{
                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }
                .iframe-example {
                    border: 1px solid #ccc;
                    width: 100%;
                    margin: 12px;
                }
            }
            .btn {
                padding: 12px 18px;
                background: rgb(117, 185, 207);
                border: none;
                border-radius: 4px;
                cursor: pointer;
                margin: 10px;
                span{
                    color: white;
                    font-size: 16px;
                }
                &:hover {
                    background: darken(#007bff, 10%);
                }

            }
        }
    }
}
</style>