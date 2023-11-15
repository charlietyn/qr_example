<template>
  <div class="center mt-5">
    <div class="row">
      <h1 class="col-md-12 icon-center">
        <div>
          <Icon icon="bx:upload" class="px-1 fs-4 pb-1 qrf"/>
          Upload Image
        </div>
      </h1>
    </div>
    <div class="row">
      <div class="input-group mb-3 col-md-2">
        <span class="input-group-text" id="basic-addon1"><Icon icon="bx:upload"/></span>
        <input type="file" @change="changeListenerFile" class="form-control" placeholder="Text" required
               aria-label="text"
               aria-describedby="basic-addon1">
      </div>
      <div class="form-check col-md-4">
        <input class="form-check-input" type="checkbox" @change="()=>{is_public=!is_public}" id="flexCheckDefault">
        <label class="form-check-label" for="flexCheckDefault">
          Is Public
        </label>
      </div>
    </div>
    <div class="row" v-if="valid">
      <p class="alert alert-danger">You must insert a text</p>
    </div>
    <div class="row center">
      <button type="button" @click="generate" class="btn btn-primary">Upload</button>
    </div>
    {{ result }}
  </div>
</template>

<script setup lang="ts">
import {Icon} from '@iconify/vue'
import {reactive, ref} from "vue"
import {globalStore} from "../core/store/global.store"
import {useFetch} from "@vueuse/core/index"
import axios from "axios"


let file: any = reactive({})
const is_public = ref(false)
const valid = ref(false)
const result = ref()

const store = globalStore()
const url = store.url

function changeListenerFile(event: any) {
  const fileUpload = event.target.files
  file = fileUpload[0]
}

function generate() {
  if (!file?.name) {
    valid.value = true
    setTimeout(() => {
      valid.value = false
    }, 1000)
  } else {
    const formData = new FormData()
    formData.append('IsPublic', is_public.value.toString())
    formData.append('FileDetails', file as Blob)
    axios.post(url + '/api/media/upload', formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        "accept": "*/*",
      },
      mode: "no-cors",
      method: 'post',
    }).then((response => {
      console.log("Aqui el response",response)
    })).catch(error => {
      console.log(error)
    })
  }
}
</script>

<style scoped>
.center {
  display: grid;
  display-items: center;
}

.icon-center {
  display: flex;
  justify-content: center;
  align-content: center;
}

.input-group {
  width: 50%;
}

.qrf {
  font-size: 3.5rem !important;
}
</style>
