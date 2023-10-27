<script setup lang="ts">
import { reactive, watch } from 'vue';
import { useRouter } from 'vue-router'
import { SideMenuProps } from '../types';
import { sideMenuData } from '../constants/sideMenu';

const items: SideMenuProps[] = reactive(sideMenuData);
const router = useRouter();
const state = reactive({
  collapsed: false,
  selectedKeys: ['1'],
  openKeys: ['sub1'],
  preOpenKeys: ['sub1'],
});

watch(
  () => state.openKeys,
  (_val, oldVal) => {
    state.preOpenKeys = oldVal;
  },
);
const toggleCollapsed = () => {
  state.collapsed = !state.collapsed;
  state.openKeys = state.collapsed ? [] : state.preOpenKeys;
};

const handleMenu = ({ item, key, keyPath }) => {
  if (item.link) {
    router.push({ name: item.link })
  }
};

</script>

<template>
  <a-layout-sider width="200" class="sider-layout bg-bg-white">
    <a-menu
      v-model:openKeys="state.openKeys"
      v-model:selectedKeys="state.selectedKeys"
      mode="inline"
      class="item-menu"
      :inline-collapsed="state.collapsed"
      :items="items"
      @click="handleMenu"
    ></a-menu>
  </a-layout-sider>
</template>

<style scoped>
header {
  line-height: 1.5;
  height: 100vh;
}

.sider-layout {
  border-inline-end: none;
}

.item-menu {
  border-inline-end: none !important;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }
}
</style>
