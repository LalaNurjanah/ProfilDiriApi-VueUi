<template>
  <div class="card shadow mt-3">
    <div class="card-body">
      <h5 class="card-title">Edit hubungi</h5>
      <form class="row g-3" @submit.prevent="update">
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">nama</label>
          <input
            type="text"
            class="form-control"
            id="inputEmail4"
            v-model="hub.nama"
          />
          <div class="alert alert-danger" v-if="validation.nama">
            {{ validation.nama[0] }}
          </div>
        </div>
        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">email</label>
          <input
            type="img"
            class="form-control"
            id="inputPassword4"
            v-model="hub.email"
          />
           <div class="alert alert-danger" v-if="validation.email">
            {{ validation.email[0] }}
          </div>
        </div>
        <div class="col-6">
          <label for="inputAddress" class="form-label">no_tlp</label>
          <input
            type="text"
            class="form-control"
            id="inputAddress"
            placeholder="masukan no_tlp"
            v-model="hub.no_tlp"
          />
           <div class="alert alert-danger" v-if="validation.no_tlp">
            {{ validation.no_tlp[0] }}
          </div>
        </div>
        <div class="col-6">
          <label for="inputAddress" class="form-label">subjek</label>
          <input
            type="text"
            class="form-control"
            id="inputAddress"
            placeholder="masukan subjek"
            v-model="hub.subjek"
          />
           <div class="alert alert-danger" v-if="validation.subjek">
            {{ validation.subjek[0] }}
          </div>
        </div>
        <div class="col-6">
          <label for="inputAddress" class="form-label">pesan</label>
          <input
            type="text"
            class="form-control"
            id="inputAddress"
            placeholder="masukan pesan"
            v-model="hub.pesan"
          />
           <div class="alert alert-danger" v-if="validation.pesan">
            {{ validation.pesan[0] }}
          </div>
        </div>
        <div class="col-12">
          <button type="submit" class="btn btn-primary">Edit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { onMounted, reactive, ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
export default {
  setup() {
    const hub = reactive({
      nama: "",
      email: "",
     no_tlp: "",
      subjek: "",
    pesan: "",
     
    });

    const validation = ref([]);

    const router = useRouter();

    const route = useRouter()

    onMounted(()=>{
      axios.get(' http://127.0.0.1:8000/api/hubungi/${route.params.id}/edit')
      .then (response => {
        console.log(response.data.data.nama)

        hub.nama = response.data.data.nama
         hub.email = response.data.data.email
          hub.no_tlp = response.data.data.no_tlp
          hub.subjek = response.data.data.subjek
          hub.pesan = response.data.data.pesan
           
      }).catch(error =>{
        console.log(error.response.data)
      });

    function update() {
      let nama = hub.nama;
      let email = hub.email;
      let no_tlp = hub.no_tlp;
      let subjek = hub.subjek;
      let pesan = hub.pesan;
      


      axios.put('http://127.0.0.1:8000/api/hubungi/${route.params.id}', {
         nama:nama,
          email: email,
          no_tlp: no_tlp,
            subjek: subjek,
          pesan: pesan,
        })
        .then(() => {
          router.push({
            name: "Index",
          });
        })
        .catch((error) => {
         validation.value = error.response.data
        });
    }
    return {
      hub,
      validation,
      router,
      update,
      route,
     
    };
  },
  
  
    )},
};
</script>