<template>
  <div class="app-card app-card-settings shadow-sm p-4">
    <div class="app-card-body">
      <form class="settings-form" @submit.prevent="onSubmit">

        <div class="mb-3">
          <label for="nombre" class="form-label">Nombre</label>
          <input type="text" class="form-control" id="name" v-model="estudiante.name" required="" />
        </div>

        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input type="email" class="form-control" id="email" v-model="estudiante.email" required="" />
          </div>

        <div class="mb-3">
          <label for="foto" class="form-label">Url Foto Perfil</label>
          <input type="foto" class="form-control" id="foto" v-model="estudiante.foto" />
        </div>

        <button type="submit" class="btn app-btn-primary">Guardar</button>


        <input class="btn btnSubirImagen" type="file" id="file" ref="file" v-on:change="onChangeFileUpload()">

        <!-- <button @click="chooseFiles()"  class="btn btnSubirImagen">Subir imagen</button> -->


      </form>
    </div>
    <!--//app-card-body-->
  </div>
</template>

<script>
  import EstudianteService from "@/services/EstudianteService.js";
  export default {
    props: {
      estudiante: {
        type: Object,
        default() {
          return { 
          name: null,
          email: null }
        }
      }
    },
    data() {
      return {
        file: '',
      };
    },
    methods: {
      onChangeFileUpload(){
        this.file = this.$refs.file.files[0];
        console.log(this.file)
      },

      chooseFiles(){
        document.getElementById("fileUpload").click();
      },
      onSubmit() {
        console.log(this.estudiante);
        if (this.estudiante.id) {
          // Actualizar
          EstudianteService.updateEstudiante(this.estudiante.id, this.estudiante)
            .then((respuesta) => {
              console.log(respuesta.data);
            })
            .catch((error) => {
              console.log(error);
            });
        } else {
          // Crear
          EstudianteService.createEstudiante(this.estudiante)
            .then((respuesta) => {
              this.$emit("estudiante-creado");
            })
            .catch((error) => {
              console.log(error);
            });
        }
      },
    }
  };
</script>

<style>
.btnSubirImagen{
margin-left: 5px; 
border: solid 1px #18BA70!important; 
}
.btnSubirImagen:hover{
  background: #2fbe7e;
  color: white!important;
  border: solid 1px #138b55!important; 
}
</style>