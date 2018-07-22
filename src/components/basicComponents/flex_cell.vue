<template>
    <div class="dm-flex-cell">
        <div class="tabar-nav">
        	<img src="../../assets/tab/times.png" />
        	<p class="nav-label">多米日历</p>
        </div>
        <div class="tabar-nav">
        	<img src="../../assets/tab/hot.png" />
        	<p class="nav-label">多米日历</p>
        </div>
        <div class="tabar-nav">
        	<img src="../../assets/tab/calendar.png" />
        	<p class="nav-label">多米日历</p>
        </div>
        <div class="tabar-nav">
        	<img src="../../assets/tab/shop.png" />
        	<p class="nav-label">多米日历</p>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
.dm-flex-cell {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding: .7rem 0;
    position: relative;
	display: -webkit-flex; /* Safari */
    .tabar-nav{
        text-align: center;
        display: block;
        /*四个居中的代码*/
        -webkit-box-flex: 1;
        flex: 1;
        img {
            width: 1.8rem;
            height: 1.8rem;
        }
        p.nav-label{
            margin-top: 5px;
            text-align: center;
            color:#999;
            font-size: 11px;
        }
    }
}
</style>
