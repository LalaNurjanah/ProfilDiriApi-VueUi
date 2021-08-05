<template>
<div class="row">
  <div 
  class="col-lg-4 mt-3" 
  v-for="(abt, index) in abouts" 
  :key="index"
  >
  <div class="card">
  <div class="card-header"> {{abt.keterangan}}
  </div>
  <div class="card-body">
    <h5 class="card-title">{{abt.foto}}</h5>
    <p class="card-text">{{abt.deskripsi}}</p>
     
   
  </div>
<div class="card-footer text-muted">
   <router-link class="btn btn-primary" :to="{name: 'Detailabouts', params:{id:abt.id}} "
              >Edit</router-link
            >
</div>
</div>
</div>
</div>
</template>

<script>
export default {
    props: ["abouts"],
};
</script>

<style>

</style>