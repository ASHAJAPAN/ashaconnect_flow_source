<script setup>
    import { ref } from 'vue'
    import interviewFlow from './components/Question.vue'
    //import { fs } from 'fs'

        //defineProps({
        //    msg: {
        //        type: String,
        //        required: true
        //    },

        //    q_type: {
        //        type: Number,
        //        required: true
        //    },

        //    q_id: {
        //        type: String,
        //        required: true
        //    },

        //    captions: {
        //        type: Object,
        //        required: false
        //    }
    //})
    //const json = fs.readFileSync("D:\\01_ASHA\\09_ASHAconnect\\data202405\\MAY08replace.json");
    //const data = JSON.parse(json);

    function getCurrent(id) {
        console.info(id);
        current.value = interviewFlow.find(item => item.id === id)
    }
    const current = ref(interviewFlow.find(item => item.id === 'Start'))
</script>

<template>
    <h3 class="blue">{{ current.msg }}</h3>
    <span>{{ current.explanation }}</span>

    <div class="message" v-if="current.type === 'Selection'">
        <template v-for="next in current.nexts">
            <div><button @click="getCurrent(next.id)">{{ next.cap }}</button></div>
        </template>
    </div>

    <div class="message" v-if="current.type === 'YesNo'">
        <button @click="getCurrent(current.nexts[0])">Yes</button>
        <button @click="getCurrent(current.nexts[1])">No</button>
    </div>

    <div class="message" v-if="current.type === 'YesNoUnknown'">
        <button @click="getCurrent(current.nexts[0])">Yes</button>
        <button @click="getCurrent(current.nexts[1])">No</button>
        <button @click="getCurrent(current.nexts[2])">Unknown</button>
    </div>

    <div class="message" v-if="current.type === 'MultiInput'">
        <template v-for="inItem in current.inputs">
            <h4 class="blue">{{ inItem.cap }}</h4>
            <input />
        </template>
        <button @click="getCurrent(current.next)">Next</button>
    </div>

    <div class="message" v-if="current.type === 'TextInput'">
        <input>
        <button @click="getCurrent(current.next)">Next</button>
    </div>

    <div class="message" v-if="current.type === 'TextInputOptional'">
        <input>
        <button @click="getCurrent(current.nexts[0])">Next</button>
        <button @click="getCurrent(current.nexts[1])">Skip</button>
    </div>

    <div class="message" v-if="current.type === 'DateInput'">
        <input>
        <button @click="getCurrent(current.next)">Next</button>
    </div>

    <div class="message" v-if="current.type === 'DateInputOptional'">
        <input>
        <button @click="getCurrent(current.nexts[0])">Next</button>
        <button @click="getCurrent(current.nexts[1])">Skip</button>
    </div>

    <div class="message" v-if="current.type === 'Message'">
        <button @click="getCurrent(current.next)">Next</button>
    </div>

    <div class="message" v-if="current.type === 'Terminate'">
        <button @click="getCurrent('Start')">Finish</button>
    </div>

    <h3>ID: {{ current.id }}</h3>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
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
    .message button{
        padding: 5px
    }
  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
