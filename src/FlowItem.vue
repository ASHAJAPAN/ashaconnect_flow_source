<script setup>
    import { ref } from 'vue'
    import interviewFlow from './components/Question.vue'

    function getCondition(num) {
        switch (num)
        {
            case 1:
                if (isAdult())
                    return 'MB1';
                else
                    return 'MB2';
            case 10:
                if (settings.anc.gestational_week < 36)
                    return 'ANC1'
                else
                    return 'ANC101'
        }
    }

    function isAdult() {
        return true;
    }
    function getCurrent(id) {
        console.info(id);
        let find = interviewFlow.find(item => item.id === id);
        if (find.condition > 0) {
            find = interviewFlow.find(item => item.id === getCondition(find.condition));
        }
        current.value = find;
    }
    const current = ref(interviewFlow.find(item => item.id === 'Start'))
    const data = {
        basic: {
            name: { first: '', middle: '', family: '' },
            birthdate: ''
        },
        medical_basic: {},
        anc: {},
        pnc: {},
        newborn: {}
    };
    const settings = {
        anc: {
            gestational_week: 30
        }
    }
</script>

<template>
    <h4 class="displayid">ID: {{ current.id }}</h4><br/>

    <h3 class="blue">{{ current.msg }}</h3>
    <span>{{ current.explanation }}</span>

    <div class="message" v-if="current.type === 'Selection'">
        <template v-for="next in current.nexts">
            <button type="button" @click="getCurrent(next.id)">{{ next.cap }}</button><br>
        </template>
    </div>

    <div class="message" v-if="current.type === 'YesNo'">
        <button type="button" @click="getCurrent(current.nexts[0])">Yes</button><br>
        <button type="button" @click="getCurrent(current.nexts[1])">No</button><br>
    </div>

    <div class="message" v-if="current.type === 'YesNoUnknown'">
            <button type="button" @click="getCurrent(current.nexts[0])">Yes</button><br>
            <button type="button" @click="getCurrent(current.nexts[1])">No</button><br>
            <button type="button" @click="getCurrent(current.nexts[2])">Unknown</button><br>
    </div>

    <div class="message" v-if="current.type === 'MultiInput'">
        <template v-for="inItem in current.inputs">
            <h4 class="blue">{{ inItem.cap }}</h4>
            <input />
        </template><br>
        <button @click="getCurrent(current.next)">Next</button>
    </div>

    <div class="message" v-if="current.type === 'TextInput'">
        <input><br>
        <button type="button" @click="getCurrent(current.next)">Next</button><br>
    </div>

    <div class="message" v-if="current.type === 'TextInputOptional'">
        <input><br>
        <button type="button" @click="getCurrent(current.nexts[0])">Next</button><br>
        <button type="button" @click="getCurrent(current.nexts[1])">Skip</button><br>
    </div>

    <div class="message" v-if="current.type === 'DateInput'">
        <input><br>
        <button type="button" @click="getCurrent(current.next)">Next</button><br>
    </div>

    <div class="message" v-if="current.type === 'DateInputOptional'">
        <input><br>
        <button type="button" @click="getCurrent(current.nexts[0])">Next</button><br>
        <button type="button" @click="getCurrent(current.nexts[1])">Skip</button><br>
    </div>

    <div class="message" v-if="current.type === 'Message'">
        <button type="button" @click="getCurrent(current.next)">Next</button><br>
    </div>

    <div class="message" v-if="current.type === 'Terminate'">
        <button type="button" @click="getCurrent('Start')">Finish</button><br>
    </div>

    
    <br><div class="displaydata">
        {{data}}
    </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}
    .displayid h3 {

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
        margin: 0.1rem
    }
  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
