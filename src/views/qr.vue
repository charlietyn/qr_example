<template>
  <div class="center mt-5">
    <div class="row">
      <h1 class="col-md-12 icon-center">
        <div>
          <Icon icon="bx:qr" class="px-1 fs-4 pb-1 qrf"/>
          Generar Qr
        </div>
      </h1>
    </div>
    <div class="row">
      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1"><Icon icon="bx:qr"/></span>
        <input type="text" v-model="text" class="form-control" placeholder="Text" required aria-label="text"
               aria-describedby="basic-addon1">
      </div>
    </div>
    <div class="row" v-if="valid">
      <p class="alert alert-danger">You must insert a text</p>
    </div>
    <div class="row center">
      <button type="button" @click="generate" class="btn btn-primary">Generate</button>
    </div>
    {{ result }}
  </div>
</template>

<script setup lang="ts">
import {Icon} from '@iconify/vue'
import {ref} from "vue"
import {useFetch} from "@vueuse/core"
import axios from "axios"
import {globalStore} from "../core/store/global.store"

const text = ref('')
const valid = ref(false)
const url = 'https://opensalus-api.azurewebsites.net/api/qrcode'
const result = ref()
const store = globalStore()

function generate() {
  if (text.value.trim() == '')
    valid.value = true
  else {
    axios(store.url + '/api/qrcode?qrText=' + text.value).then(response => {
      console.log(response)
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

.qrf {
  font-size: 3.5rem !important;
}
</style>
