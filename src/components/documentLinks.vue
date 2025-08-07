<template>
    <main class="document-links">
        <inbox />
        <div class="document-container">
            <div class="section">
                <h1>Hasaba alan: </h1>
                <h1>Kimden gelen: </h1>
            </div>
            <chatApp />
        </div>
    </main>
</template>

<script>
import inbox from '@/components/inbox.vue';
import ChatApp from './chatApp.vue';        

export default {
    components: {
        inbox,
        ChatApp
    }
}
</script>

<style lang="scss" scoped>
.document-links {
    .document-container {
        padding: 20px;
        background: lighten(#f5f5f5, 5%);
        
        .section{
            margin-top: 20px;
            h1 {
                font-size: 22px;
                font-weight: bold;
            }
            p {
                font-size: 18px;
                color: darken(#333, 10%);
            }
        }
    }
}
</style>