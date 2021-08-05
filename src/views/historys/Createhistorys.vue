<template>
  <div class="card shadow mt-3">
    <div class="card-body">
      <h5 class="card-title">Add pengalaman</h5>
      <form class="row g-3" @submit.prevent="store">
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">Keterangan</label>
          <input
            type="text"
            class="form-control"
            id="inputEmail4"
            v-model="peng.keterangan"
          />
          <div class="alert alert-danger" v-if="validation.keterangan">
            {{ validation.keterangan[0] }}
          </div>
        </div>
        
        <div class="col-6">
          <label for="inputAddress" class="form-label">Deskripsi</label>
          <input
            type="text"
            class="form-control"
            id="inputAddress"
            placeholder="masukan deskripsi"
            v-model="peng.deskripsi"
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
    const peng = reactive({
     keterangan: "",
     deskripsi : "",
      
    });

    

    const validation = ref([]);

    const router = useRouter();

onMounted(() => {

 function store() {
      let keterangan = peng.keterangan;
      let deskripsi = peng.deskripsi;
    
      axios
        .post("http://127.0.0.1:8000/api/pengalaman/", {
          keterangan: keterangan,
         deskripsi:deskripsi,
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
      peng,
      validation,
      router,
      store,
     
    };
  },
)},
};
</script>