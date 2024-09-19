<script setup>
    import { ref, computed } from 'vue'

    const props = defineProps({
        model: Object
    })

    const isFolder = computed(() => {
        //for (key in props.model.value){
        //    return true;
        //}
        return false
    })

    //function changeType() {
    //    if (!isFolder.value) {
    //        props.model.children = []
    //        addChild()
    //        isOpen.value = true
    //    }
    //}

    //function addChild() {
    //    props.model.children.push({ name: 'new stuff' })
    //}
</script>

<template>
    <li>
        <div :class="{ bold: isFolder }">
            {{ model }}
        </div>
        <ul v-if="isFolder">
            <!--
              A component can recursively render itself using its
              "name" option (inferred from filename if using SFC)
            -->
            <DataView class="item"
                      v-for="key in model.keys"
                      :model="model[key]">
            </DataView>
        </ul>
    </li>
</template>