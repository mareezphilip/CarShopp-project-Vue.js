<template>
  <div >
    <ErrorPageComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import ErrorPageComponent from '../components/errorpage/Error.vue'
export default {
  name: 'ErrorPage',
  components: {
    ErrorPageComponent,
  }
}
</script>


