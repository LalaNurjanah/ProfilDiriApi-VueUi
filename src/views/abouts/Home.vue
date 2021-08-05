<template>
  <div class="home">
    <!--  <img alt="Vue logo" src="../assets/logo.png"> -->
    <Slider />
    <hr class="my-3" />
    <router-link class="btn btn-primary" to="/Createabouts"
      >Add abouts</router-link
    >

<Cardabouts :abouts="abouts"/>

    <table class="table">
      <thead>
        <tr>
          <th scope="col">Keterangan</th>
          <th scope="col">Foto</th>
          <th scope="col">Deskripsi</th>
          <th scope="col">Aksi</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(abt, index) in abouts" :key="index">
          <td>{{ abt.keterangan}}</td>
          <td>{{ abt.foto}}</td>
          <td>{{ abt.deskripsi}}</td>
          <td>
            <router-link class="btn btn-success" :to="{name: 'Editabouts', params:{id:abt.id}} "
              >Edit</router-link
            >
            <button @click.prevent="abtDelete(abt.id)"  class="btn btn-danger">delete</button>
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
import Cardabouts from "@/components/Cardabouts.vue";
import { onMounted, ref } from 'vue';

export default {
  name: "Home",
  components: {
    Slider,
    Cardabouts,
  },
  setup(){
    let abouts = ref([])

    onMounted(() => {
      axios.get('http://127.0.0.1:8000/api/abouts')
      .then(response => {
        abouts.value = response.data.data
      })
      .catch(error =>{
        console.log(error)
      });
    });

  function abtDelete(id){
    axios.delete(`http://127.0.0.1:8000/api/abouts/${id}`)
    .then(()=>{
      let z = this.abouts.map(abouts => abouts.id).indexOf(id);
      this.abouts.splice(z, 1)
    }).catch(error => {
      console.log(error)
    })
  }

    return {
      abouts,
      abtDelete
    }
  }
};
</script>
