<script setup lang="ts">
import { RouterView } from 'vue-router';
import TopBar from './components/TopBar.vue';
import SideMenu from './components/SideMenu.vue';
import { ref, watch, onMounted } from 'vue';

const topBar = ref(null);
const childShow = ref(true);

onMounted(() => {
  console.log('topbar value show >>> ', topBar.value.show);
  console.log(topBar.value.show);
  childShow.value = topBar.value.show;
})

watch(childShow, (newVal, oldVal) => {
  console.log('newVal >>> ', newVal);
  // alert(newVal)
})

const handleTransition = (show: boolean) => {
  console.log('handleTransition >>> ', show);
  childShow.value = show;
}

</script>

<template>
  <a-layout class="w-[100vw] bg-red-600">
    <TopBar class="z-10" ref="topBar" @transition="handleTransition" />
    <a-layout>
      <transition name="slide">
        <div v-if="childShow" className="side-container">
          <SideMenu />
        </div>
      </transition>
      <a-layout class="bg-bg-white">
        <RouterView />
      </a-layout>
    </a-layout>
  </a-layout>
</template>

<style scoped>
  .slide-enter-active,
  .slide-leave-active
  {
      transition: transform 0.2s ease;
  }

  .slide-enter,
  .slide-leave-to {
      transform: translateX(-100%);
      transition: all 150ms ease-in 0s
  }

  .side-container {
    background: white;
    height: 100%;
    height: 100%;
    border-inline-end: 1px solid rgba(5, 5, 5, 0.06);
  }
</style>
