<template>
  <div class="">
          <div class=" bg-green-400">
              <slot name="sample"></slot>
          </div>
      <button class="bg-gray-500 px-6 py-1"> Hello
      </button>


      <div class="">
          <slot name=""></slot>
      </div>

      <div class="">
          <slot name="footer"></slot>
      </div>
  </div>
</template>

<script>
export default {
    name: 'Form',
    props: {
        greet: {
            type: Object,
            default: function () {
                return { name: 'Abdulrahman', school: 'BUK'}
            },

            digit: {
                type: Number,
                validator(value) {
                    value < 10
                }
            }
        },
    },
    emits: ['say-hello', 'add-one']

}
</script>

<style>

</style>