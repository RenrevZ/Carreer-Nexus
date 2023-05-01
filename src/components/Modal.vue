<template>
   <div
      v-if="isOpen"
      class="fixed inset-0 z-10 overflow-y-auto"
      aria-modal="true"
      role="dialog"
      aria-labelledby="modal-title"
      @keydown.escape="isOpen = false"
    >
      <div class="flex items-center justify-center min-h-screen">
        <div
          class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          aria-hidden="true"
        ></div>

        <div
          class="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full"
          role="document"
        >
          <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div class="sm:flex sm:items-start">
              <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">

                <h3 class="text-lg leading-6 font-bold text-gray-500 text-center mb-5"
                    id="modal-title">

                    <!-- TITLE -->
                   <slot name="title"></slot>
                </h3>
                <div class="mt-2 w-full">
                    <!-- BODY -->
                  <slot name="body"></slot>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
  </div>
</template>

<script>
export default {
    props:['isOpen']
}
</script>

<style>
.modal-enter {
  opacity: 0;
  transform: scale(0.9);
}

.modal-enter-active {
  transition: all 0.2s ease-out;
  opacity: 1;
  transform: scale(1);
}

.modal-leave {
  opacity: 1;
  transform: scale(1);
}

.modal-leave-active {
  transition: all 0.2s ease-out;
  opacity: 0;
  transform: scale(0.9);
}
</style>