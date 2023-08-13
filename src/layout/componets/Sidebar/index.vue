<script setup lang="ts">
const settingsStore = useSettingsStore();
const permissionStore = usePermissionStore();
const appStore = useAppStore();
const { sidebarLogo } = storeToRefs(settingsStore);
const route = useRoute();
import variables from "@/styles/variables.module.scss";
</script>

<template>
  <div :class="{ 'has-logo': sidebarLogo }">
    <logo v-if="sidebarLogo" :collapse="!appStore.sidebar.opened" />
    <el-scrollbar>
      <el-menu
        :default-active="route.path"
        :collapse="!appStore.sidebar.opened"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :active-text-color="variables.menuActiveText"
        :unique-opened="false"
        :collapse-transition="false"
        mode="vertical"
      >
        <sidebar-item
          v-for="route in permissionStore.routes"
          :key="route.path"
          :item="route"
          :base-path="route.path"
          :is-collapse="!appStore.sidebar.opened"
        />
      </el-menu>
    </el-scrollbar>
  </div>
</template>
<style lang="scss" scoped>
:deep(.stting-container) {
  .setting-item {
    color: #fff;
    .svg-icon {
      margin-right: 0px;
    }
    &:hover {
      color: var(--el-color-primary);
    }
  }
}
</style>
