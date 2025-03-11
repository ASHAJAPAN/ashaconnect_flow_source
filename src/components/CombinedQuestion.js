import arrayStarts from './Flow_Starts.js';
import arrayBase from './Flow_MCH.js';
import arrayNCD from './Flow_NCD.js';
import arrayNCDCommon from './Flow_NCDCommon.js';
import arrayReason from './Flow_Reason.js';
import arrayFollowup from './Flow_Followup.js';

const questions = [
    ...arrayStarts,
    ...arrayBase,
    ...arrayNCD,
    ...arrayNCDCommon,
    ...arrayReason,
    ...arrayFollowup];

export default questions;

