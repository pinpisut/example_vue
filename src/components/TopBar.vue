
<!--
  ref: 
  https://stackoverflow.com/questions/68260555/how-to-emit-event-from-child-to-parent-in-vue3-with-script-setup-syntax
  https://kanexkane.com/programming/defineexpose-not-working/
  https://stackoverflow.com/questions/72591866/how-to-fix-defineexpose-method-not-defined-in-vue3
-->
<script setup lang="ts">
import {
    MenuOutlined,
    LoginOutlined,
    UserOutlined,
    TranslationOutlined,
  } from '@ant-design/icons-vue';
import { ref, reactive, watch, h } from 'vue'

  const show = ref(true)

  const transition = () => {
    console.log('transition >>> ', );
    show.value = !show.value
    emit('transition', show.value);
  }

  defineExpose({
    show,
  })

  const emit = defineEmits(['transition']);

  //
  const state = reactive({
    hasShown: false,
    selectedKeys: [],
    openKeys: [],
    preOpenKeys: [],
  });

  const lang = reactive({
    hasShown: false,
    selectedKeys: [],
    openKeys: [],
    preOpenKeys: [],
  });
  
  const items = reactive([
    {
      key: 'logout-1',
      icon: () => h(LoginOutlined),
      label: 'Logout',
      title: 'Logout',
    },
  ]);

  const itemsLang = reactive([
    {
      key: 'lang-en',
      label: 'English',
      title: 'en',
    },
    {
      key: 'lang-th',
      label: 'ภาษาไทย',
      title: 'th',
    },
  ]);

  watch(
    () => state.openKeys,
    (_val, oldVal) => {
      state.preOpenKeys = oldVal;
    },
  );

  const toggleCollapsed = () => {
    state.hasShown = !state.hasShown;
    state.openKeys = state.hasShown ? [] : state.preOpenKeys;
  };

  const toggleLang = () => {
    lang.hasShown = !lang.hasShown;
    lang.openKeys = lang.hasShown ? [] : lang.preOpenKeys;
  };

  const handleUsingLang = ({ item, key, keyPath }) => {
    lang.selectedKeys = key;
    lang.hasShown = !lang.hasShown;
  };

  const handleCloseAvatar = ({ item, key, keyPath }) => {
    state.selectedKeys = key;
    state.hasShown = !state.hasShown;
  };
</script>

<template>
  <a-layout-header class="header bg-primary-main w-full flex justify-between">
    <a-button ghost class="border-none w-[20px] mt-[2px] h-full" @click="transition">
      <MenuOutlined class="text-primary-contrast-text text-2xl mt-[-5px] ml-[-12px]" />
    </a-button>
    <div class="flex flex-row justify-center items-center">
      <div class="relative">
        <a-button type="primary" class="rounded-[50%] border border-transparent w-[30px] flex justify-center items-center" @click="toggleLang">
          <TranslationOutlined class="text-[25px] ml-[4px]" v-if="lang.hasShown" />
          <TranslationOutlined class="text-[25px] ml-[4px]" v-else />
        </a-button>
        <div v-if="lang.hasShown" class="absolute top-[50px] shadow-md right-[0px]">
          <a-menu
            v-model:openKeys="lang.openKeys"
            v-model:selectedKeys="lang.selectedKeys"
            :items="itemsLang"
            @click="handleUsingLang"
          ></a-menu>
        </div>
      </div>
      <div class="ml-4">
        <a-button type="primary" class="rounded-[50%] border border-white w-[30px] h-[30px] flex justify-center items-center" @click="toggleCollapsed">
          <UserOutlined v-if="state.hasShown" />
          <UserOutlined v-else />
        </a-button>
        <div v-if="state.hasShown" class="absolute top-[64px] shadow-md right-[50px]">
          <a-menu
            v-model:openKeys="state.openKeys"
            v-model:selectedKeys="state.selectedKeys"
            :items="items"
            @click="handleCloseAvatar"
          ></a-menu>
        </div>
      </div>
    </div>
  </a-layout-header>
</template>

<style scoped>
header {
  line-height: 1.5;
  height: 100vh;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }
}
</style>
