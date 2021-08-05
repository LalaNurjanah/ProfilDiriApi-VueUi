<template>
<div class="row">
  <div 
  class="col-lg-4 mt-3" 
  v-for="(hub, index) in hubungi" 
  :key="index"
  >
  <div class="card">
  <div class="card-header"> {{hub.nama}}
  </div>
  <div class="card-body">
    <h5 class="card-title">{{hub.email}}</h5>
    <p class="card-text">{{hub.no_tlp}}</p>
    <p class="card-text">{{hub.subjek}}</p>
    <p class="card-text">{{hub.pesan}}</p>
     
   
  </div>
<div class="card-footer text-muted">
   <router-link class="btn btn-primary" :to="{name: 'Detailhubungi', params:{id:hub.id}} "
              >Edit</router-link
            >
</div>
</div>
</div>
</div>
</template>

<script>
export default {
    props: ["hubungi"],
};
</script>

<style>

</style>