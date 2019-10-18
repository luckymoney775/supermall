<template>
<div>
<div class="recomend">
  <div v-for="item in recommends" class="recomend-item">
    <a :href="item.link">
      <img :src="item.image" alt="">
      <div>{{item.title}}</div>
    </a>
  </div>

</div>

</div>
</template>

<script>
    export default {
        name: "RecommendView",
        props:{
            recommends:{
                type:Array,
                default(){
                    return []
                }
            }
        }
    }
</script>

<style scoped>
  .recomend{
    display: flex;
    width: 100%;
    text-align: center;
    font-size: 12px;
    padding: 15px 0 30px;
    border-bottom: 8px solid #eeeeee;
  }
.recomend-item{
  flex: 1;
}
  .recomend-item img{
    width: 65px;
    height: 65px;

  }
</style>
