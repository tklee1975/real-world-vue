<template>
  <h2>Debug Page</h2>
  <hr>
  Msg: {{msg}}
  <hr>
  route Link:
  <router-link to="/">Home</router-link>  
  <hr>
  ENV
  <pre>
    {{env}}
  </pre>
</template>

<script>
export default {
    data() {
        return {
            msg: "Welcome to Debug Page",
            env: process.env
        };
    },
}
</script>

<style>

</style>