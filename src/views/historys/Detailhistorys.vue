<template>
  <div class="card text-center mt-4" v-for="h in history" :key="h.id">
  <div class="card-header">
    Detail historys
  </div>
  <div class="card-body">
    <h5 class="card-title">{{h.keterangan }}</h5>
    <p class="card-text">{{h.deskripsi }}</p>
     

  </div>
  <div class="card-footer">
  <router-link class="btn btn-success" :to="{name: 'Edithistorys', params:{id:h.id}} "
              >Edit</router-link
            >
            <button @click.prevent="historyDelete(h.id)"  class="btn btn-danger">delete</button>
  </div>
</div>
</template>

<script>
import { onMounted,  ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
export default {
  setup() {
   
   let history = ref([]);

    const router = useRouter();

const validation = ref([]);

    const route = useRouter();

    onMounted(()=>{
      axios.get(' http://127.0.0.1:8000/api/historys/${route.params.id}')
      .then (response => {
        console.log(response.data.data.nama)

        history.value = response.data.data.nama
        
      }).catch(error =>{
        console.log(error.response.data)
      });
    });

     function historyDelete(id){
    axios.delete(`http://127.0.0.1:8000/api/historys/${id}`)
    .then(()=>{
      router.go(-1);
    }).catch(error => {
      console.log(error)
    });
  }


    
    
    return {
      history,
      validation,
      router,
      historyDelete, 
      route,
     
    };
  },
};
</script>

<style>

</style>