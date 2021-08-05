<template>
  <div class="card shadow mt-3">
    <div class="card-body">
      <h5 class="card-title">Add hubungi</h5>
      <form class="row g-3" @submit.prevent="store">
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
            type="text" 
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
            type="number"
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
            type="number"
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
            type="number"
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
          <button type="submit" class="btn btn-primary">ADD</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { reactive, ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
export default {
  setup() {
    const hub = reactive({
     nama: "",
      email : "",
     no_tlp : "",
     subjek : "",
     pesan : "",
      
    });

    

    const validation = ref([]);

    const router = useRouter();

onMounted(() => {

 function store() {
      let nama = hub.nama;
      let email = hub.email;
      let no_tlp = hub.no_tlp;
       let subjek = hub.subjek;
      let pesan = hub.pesan;
    
      axios
        .post("http://127.0.0.1:8000/api/hubungi/", {
          nama: nama,
         email:email,
         no_tlp:no_tlp,
         subjek:subjek,
         pesan:pesan,
        })
        .then(() => {
          router.push({
            name: "Index",
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
    return {
      hub,
      validation,
      router,
      store,
     
    };
  },
)},
};
</script>