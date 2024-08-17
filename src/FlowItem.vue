<script setup>
    import { ref } from 'vue'
    import interviewFlow from './components/Question.vue'
    import rawData from './components/Data.vue'
    import status from './components/Status.vue'
    import { getCondition } from './condition.js'

    function getOperation(operation_id) {
        switch (operation_id) {
            case 'SetANC':
                rawData.basic.MCH = 'ANC';
            case 'SetPNC':
                rawData.basic.MCH = 'PNC';
            case 'SetMiscarry':
                rawData.basic.MCH = 'Miscarriage';
            case 'Set5ANC_Asthma':
                set5ANC();
            case 'Set9ANC':
                set5ANC();
        }
    }

    function set5ANC() {
        rawData.basic.MCH = 'ANC';
        rawData.ANC.EDD = '2025/1/1';
        rawData.basic.gender = 'female';
        rawData.basic.age = 25;
        return true;
    }

    function moveFromMultiInput(item) {
        for (var i = 0; i < item.inputs.length; i++) {
            const input = item.inputs[i];
            let path = rawData;
            const inputValue = multi_input.value[i];
            for (var j = 0; j < input.dataname.length; j++) {
                const name = input.dataname[j];
                if (j === input.dataname.length - 1) {
                    path[name] = inputValue;
                }
                else {
                    path = path[name];
                }
                multi_input.value[i] = null;
            }
        }
        getCurrent(item.next);
    }

    function moveFromTextInput(item) {
        inputDataStructure(item);
        getCurrent(item.next);
    }

    function moveFromTextInputOptional(item) {
        inputDataStructure(item);
        getCurrent(item.nexts[0]);
    }

    function moveFromDateInput(item) {
        inputDataStructure(item);
        getCurrent(item.next);
    }

    function moveFromDateInputOptional(item) {
        inputDataStructure(item);
        getCurrent(item.nexts[0]);
    }

    function inputDataStructure(item) {
        let path = rawData;
        if (item.dataname != null) {
            for (var j = 0; j < item.dataname.length; j++) {
                const name = item.dataname[j];
                if (j === item.dataname.length - 1) {
                    path[name] = inputValue.value;
                }
                else {
                    path = path[name];
                }
            }
            inputValue.value = null;
        }
    }

    function moveFromSelection(item, cap, nextId) {
        let path = rawData;
        if (item.dataname != null) {
            for (var j = 0; j < item.dataname.length; j++) {
                const name = item.dataname[j];
                if (j === item.dataname.length - 1) {
                    path[name] = cap;
                }
                else {
                    path = path[name];
                }
            }
            inputValue.value = null;
        }
        getCurrent(nextId);
    }

    function inputData() {
    }

    function getCurrent(id) {
        console.info(id);
        let find = interviewFlow.find(item => item.id === id);
        if (find.condition != null) {
            if (getCondition(find.condition, rawData))
                find = interviewFlow.find(item => item.id === find.nexts[0]);
            else 
                find = interviewFlow.find(item => item.id === find.nexts[1]);
        }
        if (find.operation != null) {
            getOperation(find.operation);
            find = interviewFlow.find(item => item.id === find.next);
        }
        current.value = find;
        if (find.type === "Branch" || find.type === "Operation") {
            getCurrent(find.id);
        }
    }

    const current = ref(interviewFlow.find(item => item.id === 'Start'))
    const multi_input = ref([])
    const inputValue = ref()

    const data = ref(rawData);
    const settings = {
        anc: {
            blood_urine_exam: false,
            gestational_week: 30
        }
    }
</script>

<template>
    <h4 class="displayid">ID: {{ current.id }}</h4>
    <br />

    <h3 class="blue">{{ current.msg }}</h3>
    <span>{{ current.explanation }}</span>

    <div class="message" v-if="current.type === 'Selection'">
        <template v-for="next in current.nexts">
            <button type="button" @click="moveFromSelection(current, next.cap, next.id)">{{ next.cap }}</button>
            <br>
        </template>
    </div>

    <div class="message" v-if="current.type === 'YesNo'">
        <button type="button" @click="moveFromSelection(current, 'Yes', current.nexts[0])">Yes</button><br>
        <button type="button" @click="moveFromSelection(current, 'No', current.nexts[1])">No</button><br>
    </div>

    <div class="message" v-if="current.type === 'YesNoUnknown'">
        <button type="button" @click="moveFromSelection(current, 'Yes', current.nexts[0])">Yes</button><br>
        <button type="button" @click="moveFromSelection(current, 'No', current.nexts[1])">No</button><br>
        <button type="button" @click="moveFromSelection(current, 'Unknown', current.nexts[2])">Unknown</button><br>
    </div>

    <div class="message" v-if="current.type === 'MultiInput'">
        <template v-for="inItem,index in current.inputs">
            <h4 class="blue">{{ inItem.cap }}</h4>
            <input v-model="multi_input[index]" />
        </template><br>
        <button @click="moveFromMultiInput(current)">Next</button>
    </div>

    <div class="message" v-if="current.type === 'TextInput'">
        <input v-model="inputValue"><br>
        <button type="button" @click="moveFromTextInput(current)">Next</button><br>
    </div>

    <div class="message" v-if="current.type === 'TextInputOptional'">
        <input v-model="inputValue"><br>
        <button type="button" @click="moveFromTextInputOptional(current)">Next</button><br>
        <button type="button" @click="getCurrent(current.nexts[1])">Skip</button><br>
    </div>

    <div class="message" v-if="current.type === 'DateInput'">
        <input v-model="inputValue"><br>
        <button type="button" @click="moveFromDateInput(current)">Next</button><br>
    </div>

    <div class="message" v-if="current.type === 'DateInputOptional'">
        <input v-model="inputValue"><br>
        <button type="button" @click="moveFromDateInputOptional(current)">Next</button><br>
        <button type="button" @click="getCurrent(current.nexts[1])">Skip</button><br>
    </div>

    <div class="message" v-if="current.type === 'Message'">
        <button type="button" @click="getCurrent(current.next)">Next</button><br>
    </div>

    <div class="message" v-if="current.type === 'Result'">
        <button type="button" @click="getCurrent(current.next)">OK</button><br>
    </div>

    <div class="message" v-if="current.type === 'Terminate'">
        <button type="button" @click="getCurrent('Start')">Finish</button><br>
    </div>


    <br>
    <div class="displaydata">
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
