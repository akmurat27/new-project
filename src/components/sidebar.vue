
<template>
    <aside>
        <h1>Türkmenistanyň Ýokary gözegçilik edarasy</h1>
        <div class="line"></div>
        <div class="menu">
            <router-link class="button" to="/">
                <img src="@/assets/sidebar/add-file.png" class="image">
                <span>TÄZE RESMINAMA</span>
            </router-link>
            <router-link class="button" to="/inbox/1">
                <img src="@/assets/sidebar/inbox.png" class="image">
                <span>GIRIŞ HATLAR</span>
            </router-link>
            <router-link class="button" to="/about">
                <img src="@/assets/sidebar/outbox.png" class="image">
                <span>ÇYKYŞ HATLAR</span>
            </router-link>
            <router-link class="button" to="/contact">
                <img src="@/assets/sidebar/warning.png" class="image">
                <span>BELLENENLER</span>
            </router-link>
            <router-link class="button" to="/contact">
                <img src="@/assets/sidebar/folder.png" class="image">
                <span>IÇKI RESMINAMALAR</span>
            </router-link>
            <router-link class="button" to="/contact">
                <img src="@/assets/sidebar/archive.png" class="image">
                <span>ARHIW</span>
            </router-link>
            <router-link class="button" to="/Arzalar">
                <img src="@/assets/sidebar/archive.png" class="image">
                <span>ARZALAR</span>
            </router-link>
            <router-link class="button" to="/emailTable">
                <img src="@/assets/sidebar/archive.png" class="image">
                <span>HASABATLAR</span>
            </router-link>
        </div>
        
        <div class="flex"></div>
        
        <span class="author">O.K.Tuliýewa</span>
    </aside>
</template>

<style lang="scss" scoped>
@import "@/styles/variables.scss";
aside{
    display: flex;
    flex-direction: column;
    width: 300px;
    min-height: 100vh;
    padding: 10px;
    background: white;
    font-family: $font-family;
    h1{
        font-size: 22px;
        margin: 0;
    }
    .author{
        font-size: 18px;
        font-weight: bold;
        margin: 1rem 0 0 0;
    }
    .flex{
        flex: 1 1 0;
    }
    .line{
        width: 100%;
        height: 1px;
        background: darken(#eee, 5%);
        margin: 1rem 0;
    }
    .menu{
        display: flex;
        flex-direction: column;
        .button{
            padding: 8px 12px;
            margin: 10px 0px;
            text-decoration: none;
            color: #333;
            display: flex;
            align-items: center;
            span{
                margin-left: 12px;
                font-weight: bold;
                font-size: 16px;
            }
            &:hover{
                background: darken(#eee, 5%);
            }

            .image{
                width: 24px;
                height: 24px;
                margin-right: 12px;
            }
        }
    }
}
</style>
