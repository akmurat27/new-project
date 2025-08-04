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

                <div>
                    <h1>Türkmenistanyň Ylymlar akademiýasy</h1>
                </div>
            </div>

            <div class="section-second">
                <div class="second-title">
                    <div>
                        <span>Jemi: 5 sahypa</span>
                    </div>

                    <div>
                        <button class="btn"><span>GÖRMEK</span></button>
                        <button class="btn"><span>ÝÜKLEMEK</span></button>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import inbox from '@/components/inbox.vue';

export default {
    components: {
        inbox
    }
}
</script>

<style lang="scss" scoped>
.inbox-general{
    .document-container {
        display: flex;
        padding: 20px;
        margin: 10px 0px;
        background: lighten(#f5f5f5, 5%);
        h1 {
            font-size: 18px;
            margin: 0 0 40px 0;
        }

        .section-first {
            width: 50%;
            display: flex;
            flex-direction: column;
            margin-bottom: 20px;
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
                padding-left: 20px;
                span {
                    font-size: 22px;
                    color: black;
                }
            }
            .btn {
                padding: 12px 18px;
                background: rgb(117, 185, 207);
                border: none;
                border-radius: 4px;
                color: white;
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