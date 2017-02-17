/**
 * Created by iag on 6/1/16.
 */
var axios = require('axios');
var X2JS = require("x2js");

function loadData() {
    return axios.get('./activities/match_choose_otm/SC3eOTM_00_01_04.xml')
        .then(function(response) {
            var x2js = new X2JS();
            var document = x2js.xml2js(response.data);
            return document.match_choose_otm;
        });
}

var API = {
    loadEngineData: function() {
        return loadData();
    }
};

module.exports = API;