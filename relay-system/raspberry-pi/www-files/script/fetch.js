'use strict';
// Post data and get a RemoteResponse object back
function GetData(property) {
    var init = {
        method: 'post'
        , headers: {
            "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
        }
        , body: 'property=' + property
    };
    var fetchInit = new Request("getdata.php", init);
    return fetchInit;
}
// Post an action and get a RemoteResponse back if the action commited
function PostAction(action, value) {
    var init = {
        method: 'post'
        , headers: {
            "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
        }
        , body: 'action=' + action
    };
    var fetchInit = new Request("postaction.php", init);
    return fetchInit;
}
// Validate the response
function ValidateResponse(response) {
    if (response.status >= 200 && response.status < 300 || response.status == 0) {
        LostConnection(false);
        return response.json();
    }
    else {
        return Promise.reject(new Error(response.statusText));
    }
}
function GetRemoteResponse(response) {
    return response.json();
}
function LogJsonResponse(jsonResponse) {
    console.log("PostAction: " + jsonResponse.Name + " => " + jsonResponse.Value + " : Commited = " + jsonResponse.Commited);
    return response;
}

// Logs to console that a package is lost, and alert offline message function
function Packagelost(error) {
    console.error("Fetch: not possible to fetch data - " + error);
    LostConnection(true);
}
// Holding information about the recived data from server
var RemoteResponse = function (Property, Value, Commited) {
    // The string name of the data
    this.Name = Property;
    // The actual data
    this.Value = Value;
    // Boolean if data or action reealy got thru to the reciver
    this.Commited = Commited;
}
/*
{
  "Name": "property",
  "Value": 101,
  "Commited": true
}
*/