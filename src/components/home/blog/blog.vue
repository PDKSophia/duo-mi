<template>
    <div>
        <top-header></top-header>
        <div class="Article-Auth">
			<div class="Auth-blog" v-for="(art, index) in BlogArticle" :key="index" @click="ViewArticle(art.url)" :class="[{'last-cell' : index+1 == BlogArticle.length}]">
				<p class="title">{{ art.title }}</p>
				<p class="summary-icon">{{ art.like }}人喜欢 · {{ art.author }} · {{ art.times }}</p>
		    </div>
        </div>
    </div>
</template>

<script>
import TopHeader from '../../basicComponents/top_header'
import { mapState } from 'vuex'
export default {
    components : {
        TopHeader
    },
    computed : mapState({
        BlogArticle : state => state.blog.BlogArticle
    }),
    methods : {
        ViewArticle (link) {
            window.location.href = link
        }
    },
    mounted() {
    }
}
</script>

<style scoped lang="scss">
.Auth-blog {
	padding: .88rem 1.1rem;
	padding-bottom: 1.3rem;
	border-bottom: .1px solid rgb(221, 220, 220);
    p.title{
        font-size: .92rem;
        margin-bottom: .52rem;
    }
    p.summary-icon{
        font-size: .68rem;
        color: #999;
    }
}
.last-cell{
	border: none;
}
</style>
