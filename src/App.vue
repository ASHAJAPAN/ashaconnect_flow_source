<script setup>
    import { ref } from 'vue'
    import FlowItem from './FlowItem.vue'

</script>

<template>
    <header>
        <img alt="Vue logo" class="logo" src="./assets/ASHA_logo.svg" width="125" height="125" />
        <div class="title">
            <h1>ASHAConnect flow test app</h1>
        </div>
    </header>

    <main>
        <div class="wrapper">
            <FlowItem /> 
        </div>
    </main>
    <!--<Teleport to="FlowItem">-->
        <!-- use the modal component, pass in the prop -->
        <!--<modal :show="showModal" @close="showModal = false">
            <template #header>
                <h3>Custom Header</h3>
            </template>
        </modal>
    </Teleport>-->
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}
    .title h1 {
        text-align: center;
    }

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
