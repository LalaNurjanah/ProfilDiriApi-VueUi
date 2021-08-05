<template>
<div class="row">
  <div 
  class="col-lg-4 mt-3" 
  v-for="(peng, index) in pengalaman" 
  :key="index"
  >
  <div class="card">
  <div class="card-header"> {{peng.keterangan}}
  </div>
  <div class="card-body">
    <p class="card-text">{{peng.deskripsi}}</p>
     
   
  </div>
<div class="card-footer text-muted">
   <router-link class="btn btn-primary" :to="{name: 'Detailpengalaman', params:{id:peng.id}} "
              >Edit</router-link
            >
</div>
</div>
</div>
</div>
</template>

<script>
export default {
    props: ["pengalaman"],
};
</script>

<style>

</style>