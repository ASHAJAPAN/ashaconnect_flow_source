export function decision(model, data) {
    for (var i = 0; i < model.single_condition.length; i++) {
        const condition = model.single_condition[i]
        let path = data;
        let dataValue = null;
        for (var j = 0; j < condition.data.length; j++) {
            const name = condition.data[j];
            if (j === condition.data.length - 1) {
                dataValue = path[name];
            }
            else {
                path = path[name];
            }
        }
        switch (condition.operator) {
            case '=Yes':
                if (dataValue !== undefined && dataValue !== null) {
                    if (dataValue === 'Yes') {
                        return true;
                    }
                }
                break;
            case '=No':
                if (dataValue !== undefined && dataValue !== null) {
                    if (dataValue === 'No') {
                        return true;
                    }
                }
                break;
            case '<':
                if (dataValue !== undefined && dataValue !== null) {
                    if (Number(dataValue) < condition.value) {
                        return true;
                    }
                }
                break;
            case '>':
                if (dataValue !== undefined && dataValue !== null) {
                    if (Number(dataValue) > condition.value) {
                        return true;
                    }
                }
                break;
        }
    }
    return false;
}