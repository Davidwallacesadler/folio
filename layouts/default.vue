<template>
  <div>
    <NavBar :options="[{ label: 'About Me', to: '/about-me/index'}, {label:'Work', to: '/'},{label: 'Not Work', to: '/not-work/index'}]" />
    <Nuxt />
  </div>
</template>

