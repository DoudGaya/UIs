<template>
 <div class=" w-full mx-auto justify-center py-10 flex">
   <div class="">
     
   </div>
 </div>
</template>

<script>
export default {
    name: 'Guides',
    props: {
     
    },

    data() {
      return {
        listings: ['Yay', 'oops', 'Another'],
        name: '',

      }
    },

    methods: {
      custom: function () {
        this.$emit('customEvent')
      },
      sendGreetings() {
        return this.$emit('greetBoss', name)
      }
    }
}
</script>

<style>

</style>