<template>
  <div class="card shadow mt-3">
    <div class="card-body">
      <h5 class="card-title">Edit about</h5>
      <form class="row g-3" @submit.prevent="update">
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
          <label for="inputAddress" class="form-label">deskripsi</label>
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
    const abt = reactive({
      keterangan: "",
      foto: "",
     deskripsi: "",
     
    });

    const validation = ref([]);

    const router = useRouter();

    const route = useRouter()

    onMounted(()=>{
      axios.get(' http://127.0.0.1:8000/api/abouts/${route.params.id}/edit')
      .then (response => {
        console.log(response.data.data.nama)

        abt.keterangan = response.data.data.keterangan
         abt.foto = response.data.data.foto
          abt.deskripsi = response.data.data.deskripsi
           
      }).catch(error =>{
        console.log(error.response.data)
      });

    function update() {
      let keterangan = abt.keterangan;
      let foto = abt.foto;
      let deskripsi = abt.deskripsi;
      


      axios.put('http://127.0.0.1:8000/api/abouts/${route.params.id}', {
         keterangan:keterangan,
          foto: foto,
          deskripsi: deskripsi,
           
        })
        .then(() => {
          router.push({
            name: "Home",
          });
        })
        .catch((error) => {
         validation.value = error.response.data
        });
    }
    return {
      abt,
      validation,
      router,
      update,
      route,
     
    };
  },
  
  
    )},
};
</script>