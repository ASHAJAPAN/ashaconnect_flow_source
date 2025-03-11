<script setup>
    import { ref } from 'vue'
    import interviewFlow from './components/CombinedQuestion.js'
    import rawData from './components/Data.vue'
    import status from './components/Status.vue'
    import { getIf } from './components/ifs.js'
    import DataView from './components/DataView.vue'
    //import { mostUrgent } from "./components/MostUrgent.js";

    // Initialize whole data


    // Setting sample patients data
    function getOperation(operation_id) {
        switch (operation_id) {
            case 'ANC (Before 20 weeks)':
                set5ANC();
                break;
            case 'ANC (20 - 36 weeks)':
                set6ANC();
                break;
            case 'ANC (After 36 weeks)':
                set9ANC();
                break;
            case 'PNC':
                setPNC();
                break;
            case 'Asthma-COPD':
                setAsthma();
                break;
            case 'Hypertension':
                setHypertension();
                break;
            case 'Diabetes':
                setDiabetes();
                break;
        }
    }

    function set5ANC() {
        status.subcategory.ANC = 'Yes';
        rawData.basic.MCH = 'ANC';
        const today = new Date();
        const pastDate = new Date();
        pastDate.setDate(today.getDate() - 12 * 7);
        const futureDate = new Date();
        futureDate.setDate(today.getDate() + 28 * 7);
        rawData.ANC.LMP = pastDate;
        rawData.ANC.EDD = futureDate;
        rawData.ANC.BirthFacilityType = 'HP';
        rawData.basic.gender = 'female';
        rawData.basic.age = 25;
        return true;
    }

    function set6ANC() {
        status.subcategory.ANC = 'Yes';
        rawData.basic.MCH = 'ANC';
        const today = new Date();
        const pastDate = new Date();
        pastDate.setDate(today.getDate() - 24 * 7);
        const futureDate = new Date();
        futureDate.setDate(today.getDate() * 16 * 7);
        rawData.ANC.LMP = pastDate;
        rawData.ANC.EDD = futureDate;
        rawData.ANC.BirthFacilityType = 'HP';
        rawData.basic.gender = 'female';
        rawData.basic.age = 25;
        return true;
    }

    function set9ANC() {
        status.subcategory.ANC = 'Yes';
        rawData.basic.MCH = 'ANC';
        const today = new Date();
        const pastDate = new Date();
        pastDate.setDate(today.getDate() - 38 * 7);
        const futureDate = new Date();
        futureDate.setDate(today.getDate() + 2 * 7);
        rawData.ANC.LMP = pastDate;
        rawData.ANC.EDD = futureDate;
        rawData.basic.gender = 'female';
        rawData.basic.age = 30;
        return true;
    }

    function setPNC() {
        status.subcategory.PNC = 'Yes';
        rawData.basic.MCH = 'PNC';
        return true;
    }

    function setAsthma() {
        status.subcategory.Asthma = 'Yes';
        rawData.basic.Asthma = 'Yes';
        return true;
    }

    function setHypertension() {
        status.subcategory.Hypertension = 'Yes';
        rawData.basic.Hypertension = 'Yes';
        return true;
    }

    function setDiabetes() {
        status.subcategory.Diabetes = 'Yes';
        rawData.basic.Diabetes = 'Yes';
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
        getNext(item);
    }

    function moveFromTextInput(item) {
        inputDataStructure(item);
        if (checkComplete(item)) {
            current.value = interviewFlow.find(i => i.id === 'RESULT_MOSTURGENT');
        }
        else {
            getNext(item);
        }
    }

    function moveFromTextInputOptional(item) {
        inputDataStructure(item);
        if (checkComplete(item)) {
            current.value = interviewFlow.find(i => i.id === 'RESULT_MOSTURGENT');
        }
        else {
            getNext(item, 0);
        }
    }

    function moveFromDateInput(item) {
        inputDataStructure(item);
        if (checkComplete(item)) {
            current.value = interviewFlow.find(i => i.id === 'RESULT_MOSTURGENT');
        }
        else {
            getNext(item);
        }
    }

    function moveFromDateInputOptional(item) {
        inputDataStructure(item);
        if (checkComplete(item)) {
            current.value = interviewFlow.find(i => i.id === 'RESULT_MOSTURGENT');
        }
        else {
            getNext(item, 0);
        }
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
        }
        inputValue.value = null;
    }

    function inputSetStructure(item, number = 0) {
        let path = status;
        if ('setname' in item && 'setvalue' in item) {
            for (var j = 0; j < item.setname.length; j++) {
                const name = item.setname[j];
                if (j === item.setname.length - 1) {
                    path[name] = item.setvalue[number];
                    return;
                }
                else {
                    path = path[name];
                }
            }
        }
    }

    function checkComplete(item){
        if ('checkComplete' in item && item.checkComplete === 'Yes') {
            return getIf('Urgent4', rawData, status)
        }
        return false
    }

    function moveFromSelection(item, cap, number) {
        if (item.id === 'Start') {
            //Initialize();
        }
        else if (item.id === 'Set1') {
            getOperation(cap);
        }
        inputValue.value = cap;
        inputDataStructure(item);
        inputSetStructure(item, number);
        if (checkComplete(item)) {
            current.value = interviewFlow.find(i => i.id === 'RESULT_MOSTURGENT');
        }
        else {
            getNext(item);
        }
    }

    function getNext(item, number = 0) {
        console.info(item.id);
        let find = null;
        const index = interviewFlow.findIndex(i => i.id === item.id);
        if (index < 0) {
            console.error("can't find interview");
            return;
        }
        find = interviewFlow[index + 1];
        if (find === undefined) {
            console.error("can't find interview");
            return;
        }
        if ('ifs' in find) {
            let flg = true;
            for (var j = 0; j < find.ifs.length; j++) {
                const cond = getIf(find.ifs[j], rawData, status);
                if (cond === false || cond === '') {
                    flg = false;
                    break;
                }
                if (cond !== true && cond !== '') {
                    find.explanation = cond;
                }
            }
            if (flg === false) {
                return getNext(find)
            }
        }
        if ('conditions' in find) {
            let flg = true;
            for (var j = 0; j < find.conditions.length; j++) {
                if (getCondition(find.conditions[j], rawData, status) === false) {
                    flg = false;
                    break;
                }
            }
            if (flg === false) {
                return getNext(find)
            }
        }

        current.value = find;
        console.info(find.msg);
        return find;
    }


    function getCondition(condition, data, setting) {
        if ('data' in condition) {
            for (var i = 0; i < condition.data.length; i++) {
                let path = data;
                const name = condition.data[i];
                if (i === condition.data.length - 1) {
                    path[name] = item.setvalue[number];
                    return;
                }
                else {
                    path = path[name];
                }
            }

        }
        if ('operator' in condition) {

        }

        return true
    }

    function getReason(item) {
        if (item.type === 'Result')
        {
            
        }
    }

    function returnStart(){
        current.value = interviewFlow.find(item => item.id ==='Start');
    }

    function getCurrent(id) {
        console.info(id);
        let find = interviewFlow.find(item => item.id === id);
        if ('operation' in find) {
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
        <template v-for="(cap, index) in current.caps">
            <button type="button" @click="moveFromSelection(current, cap, index)">{{ cap }}</button>
            <br>
        </template>
    </div>

    <div class="message" v-if="current.type === 'YesNo'">
        <button type="button" @click="moveFromSelection(current, 'Yes', 0)">Yes</button><br>
        <button type="button" @click="moveFromSelection(current, 'No', 1)">No</button><br>
    </div>

    <div class="message" v-if="current.type === 'YesNoUnknown'">
        <button type="button" @click="moveFromSelection(current, 'Yes', 0)">Yes</button><br>
        <button type="button" @click="moveFromSelection(current, 'No', 1)">No</button><br>
        <button type="button" @click="moveFromSelection(current, 'Unknown', 2)">Unknown</button><br>
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
        <button type="button" @click="getNext(current)">Skip</button><br>
    </div>

    <div class="message" v-if="current.type === 'DateInput'">
        <input v-model="inputValue"><br>
        <button type="button" @click="moveFromDateInput(current)">Next</button><br>
    </div>

    <div class="message" v-if="current.type === 'DateInputOptional'">
        <input v-model="inputValue"><br>
        <button type="button" @click="moveFromDateInputOptional(current)">Next</button><br>
        <button type="button" @click="getNext(current)">Skip</button><br>
    </div>

    <div class="message" v-if="current.type === 'Message'">
        <button type="button" @click="getNext(current)">Next</button><br>
    </div>

    <div class="message" v-if="current.type === 'Result'">
        <p></p>
        <button type="button" @click="getNext(current)">OK</button><br>
    </div>

    <div class="message" v-if="current.type === 'Terminate'">
        <!--<button type="button" @click="returnStart()">Finish</button><br>-->
    </div>


    <br>
        <DataView class="displaydata" :model="data"></DataView>
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
