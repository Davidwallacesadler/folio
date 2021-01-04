<template>
  <div class="app-background">
    <NavBar 
      title="David Sadler" 
      :options="[
      { label: 'About Me', to: '/about-me/index' },
      { label: 'Work', to: '/' },
      ]"
    />
    <Nuxt />
  </div>
</template>

