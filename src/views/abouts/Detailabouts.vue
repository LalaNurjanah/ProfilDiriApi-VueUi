<template>
  <div class="card text-center mt-4" v-for="a in abt" :key="a.id">
  <div class="card-header">
    Detail abouts
  </div>
  <div class="card-body">
    <h5 class="card-title">{{a.keterangan }}</h5>
    <p class="card-text">{{a.foto }}</p>
    <p class="card-text">{{a.deskripsi }}</p>
     

  </div>
  <div class="card-footer">
  <router-link class="btn btn-success" :to="{name: 'Editabouts', params:{id:a.id}} "
              >Edit</router-link
            >
            <button @click.prevent="abtDelete(a.id)"  class="btn btn-danger">delete</button>
  </div>
</div>
</template>

<script>
import { onMounted,  ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
export default {
  setup() {
   
   let abt = ref([]);

    const router = useRouter();

const validation = ref([]);

    const route = useRouter();

    onMounted(()=>{
      axios.get(' http://127.0.0.1:8000/api/abouts/${route.params.id}')
      .then (response => {
        console.log(response.data.data.nama)

        abt.value = response.data.data.nama
        
      }).catch(error =>{
        console.log(error.response.data)
      });
    });

     function abtDelete(id){
    axios.delete(`http://127.0.0.1:8000/api/abouts/${id}`)
    .then(()=>{
      router.go(-1);
    }).catch(error => {
      console.log(error)
    });
  }


    
    
    return {
      abt,
      validation,
      router,
      abtDelete, 
      route,
     
    };
  },
};
</script>

<style>

</style>