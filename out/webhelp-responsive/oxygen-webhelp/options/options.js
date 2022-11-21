/* 
 * The 'properties.js' file is generated in the output directory next to this file
 *  and contains the parameters configured in the current transfromation.
 */
define(['options/properties'], function (properties) {
    return {
        get : function (property) {
            return properties[property];
        }
    };
});