<template>
<div class="row">
  <div 
  class="col-lg-4 mt-3" 
  v-for="(history, index) in historys" 
  :key="index"
  >
  <div class="card">
  <div class="card-header"> {{history.keterangan}}
  </div>
  <div class="card-body">
    <p class="card-text">{{history.deskripsi}}</p>
     
   
  </div>
<div class="card-footer text-muted">
   <router-link class="btn btn-primary" :to="{name: 'Detailhistorys', params:{id:history.id}} "
              >Edit</router-link
            >
</div>
</div>
</div>
</div>
</template>

<script>
export default {
    props: ["historys"],
};
</script>

<style>

</style>