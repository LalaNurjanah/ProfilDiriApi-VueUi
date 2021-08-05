<template>
  <div class="index">
    <!--  <img alt="Vue logo" src="../assets/logo.png"> -->
    <Slider />
    <hr class="my-3" />
    <router-link class="btn btn-primary" to="/createhubungi"
      >Add hubungi</router-link
    >

<Cardhubungi :hubungi="hubungi"/>

    <table class="table">
      <thead>
        <tr>
          <th scope="col">nama</th>
          <th scope="col">email</th>
          <th scope="col">no_tlp</th>
          <th scope="col">subjek</th>
          <th scope="col">pesan</th>
          <th scope="col">Aksi</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(hub, index) in hubungi" :key="index">
          <td>{{ hub.nama}}</td>
          <td>{{ hub.email}}</td>
          <td>{{ hub.no_tlp}}</td>
          <td>{{ hub.subjek}}</td>
          <td>{{ hub.pesan}}</td>
          <td>
            <router-link class="btn btn-success" :to="{name: 'Edithubungi', params:{id:hub.id}} "
              >Edit</router-link
            >
            <button @click.prevent="hubDelete(hub.id)"  class="btn btn-danger">delete</button>
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
import Cardhubungi from "@/components/Cardhubungi.vue";
import { onMounted, ref } from 'vue';

export default {
  name: "Index",
  components: {
    Slider,
    Cardhubungi,
  },
  setup(){
    let hubungi = ref([])

    onMounted(() => {
      axios.get('http://127.0.0.1:8000/api/hubungi')
      .then(response => {
        hubungi.value = response.data.data
      })
      .catch(error =>{
        console.log(error)
      });
    });

  function hubDelete(id){
    axios.delete(`http://127.0.0.1:8000/api/hubungi/${id}`)
    .then(()=>{
      let z = this.hubungi.map(hubungi => hubungi.id).indexOf(id);
      this.hubungi.splice(z, 1)
    }).catch(error => {
      console.log(error)
    })
  }

    return {
      hubungi,
      hubDelete
    }
  }
};
</script>
