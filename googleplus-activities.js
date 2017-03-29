var apiKey = 'AIzaSyDoi7JdlqzHBGSwCllU9i1qpcB43Tkgvg4';
// Use a button to handle authentication the first time.
function handleClientLoad() {
  gapi.client.setApiKey(apiKey);
  makeApiCall();
}
// Load the API and make an API call.  Display the results on the screen.
function makeApiCall() {
  gapi.client.load('plus', 'v1', function() {
    var request = gapi.client.plus.activities.list({
      'userId': '+ChristinaCollada',
      'collection': 'public'
      // For instance:
      // 'userId': '+GregorioRobles'
    });
    request.execute(function(resp) {
      var i = 0;
      for(i = 0; i < resp.items.length; i++){
        var ul = document.getElementById("list");
        var li = document.createElement("li");
        li.appendChild(document.createTextNode("History " + i + ": " + resp.items[i].title));
        ul.appendChild(li);
        if(typeof resp.items[i].location != "undefined"){
          var subul = document.createElement("ul");
          li.appendChild(subul);
          var subli1 = document.createElement("li");
          var subli2 = document.createElement("li");
          subli1.appendChild(document.createTextNode("Latitude: " + resp.items[i].location.position.latitude));
          subli2.appendChild(document.createTextNode("Longitude: " + resp.items[i].location.position.longitude));
          subul.appendChild(subli1);
          subul.appendChild(subli2);
        }
      }
    });
  });
}
