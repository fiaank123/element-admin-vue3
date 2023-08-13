<script setup lang="ts">
const settingsStore = useSettingsStore();
const permissionStore = usePermissionStore();
const appStore = useAppStore();
const { sidebarLogo } = storeToRefs(settingsStore);
const route = useRoute();

</script>

<template>
  <div :class="{ 'has-logo': sidebarLogo}">
  <logo v-if="sidebarLogo" :collapse="!appStore.sidebar.opened" />
  </div>
</template>
<style lang="scss" scoped>
:deep(.setting-container) {
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
