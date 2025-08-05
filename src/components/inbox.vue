<template>
    <main class="inbox-page">
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

        <div class="inbox-content">
            <div class="nav-items-1">
                <div class="inbox-item">
                    <router-link to="/inbox/1">Umumy maglumatlar</router-link>
                </div>
                <div class="inbox-item" style="margin-left: 12px;">
                    <router-link to="/inbox/2">Resminama dolanşygy</router-link>
                </div>
            </div>
            <div class="nav-items-2">
                <div class="inbox-item">
                    <router-link to="/inbox/3">Bellenen</router-link>
                    <img src="@/assets/inbox/toggle-button.png" alt="toggle" class="toggle-icon">
                </div>
                <div class="inbox-item">
                    <router-link to="/inbox/4">Arhiw</router-link>
                    <img src="@/assets/inbox/toggle-button.png" alt="toggle" class="toggle-icon">
                </div>
                <button class="btn">
                    <router-link to="/inbox/5">ÜÝTGET</router-link>
                </button>
            </div>

            <router-view></router-view>
        </div>
    </main>
</template>

<style lang="scss" scoped> 
.inbox-page {   
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

    .inbox-content {
        margin-top: 40px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .nav-items-1 {
            width: 445px;
            display: flex;
            .inbox-item{
                a{
                    text-decoration: none;
                    font-size: 22px;
                    color: rgb(117, 185, 207);
                }
                &:hover {
                    a{    
                        color: black;
                    }
                }
                .router-link-exact-active {
                    padding: 12px;
                    background: white;
                    color: black;
                }
            }
        }
        .nav-items-2 {
            display: flex;
            .inbox-item{
                display: flex;
                align-items: center;
                gap: 5px;
                padding: 0px 12px;
                a{
                    text-decoration: none;
                    font-size: 22px;
                    color: rgb(117, 185, 207);
                }
                .toggle-icon {
                    width: 40px;
                    height: 40px;
                    margin-left: 8px;
                    cursor: pointer;
                }
            }
            .btn{
                background: green;
                border: none;
                padding: 0px 22px;
                border-radius: 4px;
                a{
                    font-size: 14px;
                    font-weight: 500;
                    text-decoration: none;
                    color: white;
                }
            }
        }
    }
}
</style>