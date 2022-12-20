<template>
  <div data-theme="black">
    <div class="navbar bg-neutral">
      <div class="flex-1">
        <a class="btn btn-ghost normal-case text-xl">Nuxt 3 Example</a>
      </div>
      <div class="flex-none">
        <div v-if="data?.user && data.user.name && data.user.image">
          <div class="avatar">
            <div class="w-24 rounded-full">
              <img :alt="data.user.name" :src="data.user.image" />
            </div>
          </div>
        </div>
        <button
          v-else
          type="button"
          class="btn btn-error"
          @click="signIn('google')"
        >
          LOGIN
        </button>
      </div>
    </div>
    <div class="mx-auto max-w-2xl px-8">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
const { data, signIn } = useSession();
</script>
