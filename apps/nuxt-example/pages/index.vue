<template>
  <div>
    <h2 class="text-center text-9xl">Hello World</h2>
    <ul v-if="data" class="menu bg-base-100 w-56">
      <li v-for="user in data.users" :key="user.id">
        {{ user.name }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
// const { users } = await $fetch('/api/users');
const { data } = await useFetch('/api/users');
</script>
