<template>
  <div class="card text-center mt-4" v-for="h in hub" :key="h.id">
  <div class="card-header">
    Detail hubungi
  </div>
  <div class="card-body">
    <h5 class="card-title">{{h.nama }}</h5>
    <p class="card-text">{{h.email }}</p>
    <p class="card-text">{{h.no_tlp }}</p>
     <p class="card-text">{{h.subjek }}</p>
    <p class="card-text">{{h.pesan }}</p>
     

  </div>
  <div class="card-footer">
  <router-link class="btn btn-success" :to="{name: 'Edithubungi', params:{id:h.id}} "
              >Edit</router-link
            >
            <button @click.prevent="hubDelete(h.id)"  class="btn btn-danger">delete</button>
  </div>
</div>
</template>

<script>
import { onMounted,  ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
export default {
  setup() {
   
   let hub = ref([]);

    const router = useRouter();

const validation = ref([]);

    const route = useRouter();

    onMounted(()=>{
      axios.get(' http://127.0.0.1:8000/api/hubungi/${route.params.id}')
      .then (response => {
        console.log(response.data.data.nama)

        hub.value = response.data.data.nama
        
      }).catch(error =>{
        console.log(error.response.data)
      });
    });

     function hubDelete(id){
    axios.delete(`http://127.0.0.1:8000/api/hubungi/${id}`)
    .then(()=>{
      router.go(-1);
    }).catch(error => {
      console.log(error)
    });
  }


    
    
    return {
      hub,
      validation,
      router,
      hubDelete, 
      route,
     
    };
  },
};
</script>

<style>

</style>