var apiKey = "46289302";
var sessionId = "2_MX40NjI4OTMwMn5-MTU1MzUyMDM0NjQwN35QUEhOQ2xPTGdYMFdTdzRCaVlGSjNSS1p-UH4";
var token = "T1==cGFydG5lcl9pZD00NjI4OTMwMiZzaWc9ZDRlMmIzNDkwNDdlNmEyMDE3N2QwMTE0NWMzYzJiZWZlNjEyNTg5YzpzZXNzaW9uX2lkPTJfTVg0ME5qSTRPVE13TW41LU1UVTFNelV5TURNME5qUXdOMzVRVUVoT1EyeFBUR2RZTUZkVGR6UkNhVmxHU2pOU1MxcC1VSDQmY3JlYXRlX3RpbWU9MTU1MzUyMDQyMSZub25jZT0wLjcwNzk2ODQ3MDQ1Njk3NjYmcm9sZT1wdWJsaXNoZXImZXhwaXJlX3RpbWU9MTU1NjExMjQwMyZpbml0aWFsX2xheW91dF9jbGFzc19saXN0PQ==";

// Handling all of our errors here by alerting them
function handleError(error) {
  if (error) {
    alert(error.message);
  }
}

// (optional) add server code here
initializeSession();

function initializeSession() {
  var session = OT.initSession(apiKey, sessionId);

  // Subscribe to a newly created stream
  session.on('streamCreated', function(event) {
    session.subscribe(event.stream, 'subscriber', {
      insertMode: 'append',
      width: '100%',
      height: '100%'
    }, handleError);
  });

  // Create a publisher
  var publisher = OT.initPublisher('publisher_screen', {
	videoSource:'screen',
    insertMode: 'append',
    width: '100%',
    height: '100%'
  }, handleError);

  // Connect to the session
  session.connect(token, function(error) {
    // If the connection is successful, initialize a publisher and publish to the session
    if (error) {
      handleError(error);
    } else {
      session.publish(publisher, handleError);
    }
  });
}
