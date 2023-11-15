<template>
  <nav class=" navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">OpenSalus</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link class="nav-link" :to="{name:'index'}"><Icon icon="bx:home" class="px-1 fs-4 pb-1" />Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{name:'qr'}"><Icon icon="bx:qr" class="px-1 fs-4 pb-1" />QR</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{name:'icon'}"><Icon icon="bx:upload" class="px-1 fs-4 pb-1" />Icon</router-link>
        </li>
      </ul>
    </div>
    <h1 class="logo">
      <router-link :to="{name:'index'}"><img class="pb-1" :src="store.icon_url" style="height: 40px;width: 40px" alt="icon"></router-link>
    </h1>

  </nav>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import {globalStore} from "../../../core/store/global.store"
const store=globalStore()
function generate(){

}
</script>

<style scoped>
.logo{
  width: 150px;
  height: 40px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
</style>
