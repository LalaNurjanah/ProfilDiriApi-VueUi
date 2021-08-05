<template>
  <div class="index">
    <!--  <img alt="Vue logo" src="../assets/logo.png"> -->
    <Slider />
    <hr class="my-3" />
    <router-link class="btn btn-primary" to="/createpengalaman"
      >Add Pengalaman</router-link
    >

<Cardpengalaman :pengalaman="pengalaman"/>

    <table class="table">
      <thead>
        <tr>
          <th scope="col">Keterangan</th>
          <th scope="col">Deskripsi</th>
          <th scope="col">Aksi</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(peng, index) in pengalaman" :key="index">
          <td>{{ peng.keterangan}}</td>
          <td>{{ peng.deskripsi}}</td>
          <td>
            <router-link class="btn btn-success" :to="{name: 'Editpengalaman', params:{id:peng.id}} "
              >Edit</router-link
            >
            <button @click.prevent="pengDelete(peng.id)"  class="btn btn-danger">delete</button>
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
import Cardpengalaman from "@/components/Cardpengalaman.vue";
import { onMounted, ref } from 'vue';

export default {
  name: "Index",
  components: {
    Slider,
    Cardpengalaman,
  },
  setup(){
    let pengalaman = ref([])

    onMounted(() => {
      axios.get('http://127.0.0.1:8000/api/pengalaman')
      .then(response => {
       pengalaman.value = response.data.data
      })
      .catch(error =>{
        console.log(error)
      });
    });

  function pengDelete(id){
    axios.delete(`http://127.0.0.1:8000/api/pengalaman/${id}`)
    .then(()=>{
      let z = this.pengalaman.map(pengalaman =>pengalaman.id).indexOf(id);
      this.pengalaman.splice(z, 1)
    }).catch(error => {
      console.log(error)
    })
  }

    return {
     pengalaman,
      pengDelete
    }
  }
};
</script>
