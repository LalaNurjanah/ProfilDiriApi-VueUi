<template>
  <div class="card shadow mt-3">
    <div class="card-body">
      <h5 class="card-title">Add abouts</h5>
      <form class="row g-3" @submit.prevent="store">
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">Keterangan</label>
          <input
            type="text"
            class="form-control"
            id="inputEmail4"
            v-model="abt.keterangan"
          />
          <div class="alert alert-danger" v-if="validation.keterangan">
            {{ validation.keterangan[0] }}
          </div>
        </div>
        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">Foto</label>
          <input
            type="img" 
            class="form-control"
            id="inputPassword4"
            v-model="abt.foto"
          />
           <div class="alert alert-danger" v-if="validation.foto">
            {{ validation.foto[0] }}
          </div>
        </div>
        <div class="col-6">
          <label for="inputAddress" class="form-label">Deskripsi</label>
          <input
            type="text"
            class="form-control"
            id="inputAddress"
            placeholder="masukan deskripsi"
            v-model="abt.deskripsi"
          />
           <div class="alert alert-danger" v-if="validation.deskripsi">
            {{ validation.deskripsi[0] }}
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
    const abt = reactive({
     keterangan: "",
      foto : "",
     deskripsi : "",
      
    });

    

    const validation = ref([]);

    const router = useRouter();

onMounted(() => {
axios
        .get("http://127.0.0.1:8000/api/abouts/")
        .then((response) => {
         abouts.value = response.data;
          console.log(response);
        })
        .catch((error) => {
          
          console.log(error);
        });
});

 function store() {
      let keterangan = abt.keterangan;
      let foto = abt.foto;
      let deskripsi = abt.deskripsi;
    
      axios
        .post("http://127.0.0.1:8000/api/abouts/", {
          keterangan: keterangan,
         foto:foto,
         deskripsi:deskripsi,
        })
        .then(() => {
          router.push({
            name: "Home",
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
    return {
      abt,
      validation,
      router,
      store,
     
    };
  },
};
</script>