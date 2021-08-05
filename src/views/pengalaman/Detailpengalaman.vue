<template>
  <div class="card text-center mt-4" v-for="p in peng" :key="p.id">
  <div class="card-header">
    Detail pengalaman
  </div>
  <div class="card-body">
    <h5 class="card-title">{{p.keterangan }}</h5>
    <p class="card-text">{{p.deskripsi }}</p>
     

  </div>
  <div class="card-footer">
  <router-link class="btn btn-success" :to="{name: 'Editpengalaman', params:{id:p.id}} "
              >Edit</router-link
            >
            <button @click.prevent="pengDelete(p.id)"  class="btn btn-danger">delete</button>
  </div>
</div>
</template>

<script>
import { onMounted,  ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
export default {
  setup() {
   
   let peng = ref([]);

    const router = useRouter();

const validation = ref([]);

    const route = useRouter();

    onMounted(()=>{
      axios.get(' http://127.0.0.1:8000/api/pengalaman/${route.params.id}')
      .then (response => {
        console.log(response.data.data.nama)

        peng.value = response.data.data.nama
        
      }).catch(error =>{
        console.log(error.response.data)
      });
    });

     function pengDelete(id){
    axios.delete(`http://127.0.0.1:8000/api/pengalaman/${id}`)
    .then(()=>{
      router.go(-1);
    }).catch(error => {
      console.log(error)
    });
  }


    
    
    return {
      peng,
      validation,
      router,
      pengDelete, 
      route,
     
    };
  },
};
</script>

<style>

</style>