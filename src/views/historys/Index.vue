<template>
  <div class="index">
    <!--  <img alt="Vue logo" src="../assets/logo.png"> -->
    <Slider />
    <hr class="my-3" />
    <router-link class="btn btn-primary" to="/createhistorys"
      >Add historys</router-link
    >

<Cardhistorys :historys="historys"/>

    <table class="table">
      <thead>
        <tr>
          <th scope="col">Keterangan</th>
          <th scope="col">Deskripsi</th>
          <th scope="col">Aksi</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(history, index) in historys" :key="index">
          <td>{{ history.keterangan}}</td>
          <td>{{ history.deskripsi}}</td>
          <td>
            <router-link class="btn btn-success" :to="{name: 'Edithistorys', params:{id:history.id}} "
              >Edit</router-link
            >
            <button @click.prevent="historyDelete(history.id)"  class="btn btn-danger">delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'
// @ is an alias to /src
import Slider from "@/components/Slider.vue";
import Cardhistorys from "@/components/Cardhistorys.vue";
import { onMounted, ref } from 'vue';

export default {
  name: "Index",
  components: {
    Slider,
    Cardhistorys,
  },
  setup(){
    let historys = ref([])

    onMounted(() => {
      axios.get('http://127.0.0.1:8000/api/historys')
      .then(response => {
       historys.value = response.data.data
      })
      .catch(error =>{
        console.log(error)
      });
    });

  function historyDelete(id){
    axios.delete(`http://127.0.0.1:8000/api/historys/${id}`)
    .then(()=>{
      let z = this.historys.map(historys =>historys.id).indexOf(id);
      this.historys.splice(z, 1)
    }).catch(error => {
      console.log(error)
    })
  }

    return {
     historys,
      historyDelete
    }
  }
};
</script>
