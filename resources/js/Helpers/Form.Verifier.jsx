/**
 * Verifies if the required fields in the given object are empty or not.
 * @param {object} obj - The object to verify.
 * @param {string[]} requiredFields - An array of field names that are required.
 * @param {function} callback - The callback function to be called with the empty fields.
 * @returns {object} - An object containing the empty fields.
 */
export function fieldVerifier(obj, requiredFields, callback) {
    const emptyFields = {};
    for (const iterator of requiredFields) {

        if (iterator == "student_disability_details" && obj["student_disability"] == "0") {
            continue;
        }
        if (iterator == "medical_condition_details" && obj["medical_condition"] == "0") {
            continue;
        }
        if (iterator == "allergies_details" && obj["allergies"] == "0") {
            continue;
        }
      

        if (!obj[iterator]) {   
          
                
            emptyFields[iterator] = true;
        }
    }
    callback(emptyFields);
    return emptyFields;
}
