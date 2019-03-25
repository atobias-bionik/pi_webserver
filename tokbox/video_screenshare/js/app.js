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

  var alreadyOneVideo = false;

  // Subscribe to a newly created stream
  session.on('streamCreated', function(event) {
	  
	var subStreamId = "subscribe_1"
	  
	if(alreadyOneVideo === false) {
		subStreamId = "subscribe_1";
		alreadyOneVideo = !(alreadyOneVideo)
	}
	else {
		subStreamId = "subscribe_2";
		alreadyOneVideo = !(alreadyOneVideo)
	}
		
	session.subscribe(event.stream, subStreamId, {
	  insertMode: 'append',
	  width: '100%',
	  height: '100%'
	}, handleError);

	
	/*
	  
	streamLocation = document.createElement('div');
	newStream.setAttribute("class","video");
	newStream.setAttribute("id",event.stream.streamId);
	
    session.subscribe(event.stream, newStream.getAttribute("id"), {
      insertMode: 'append',
      width: '50%',
      height: '100%'
    }, handleError);
	
	*/
  });

  // Create a publisher
  var publisher = OT.initPublisher('publisher', {
    insertMode: 'append',
    width: '100%',
    height: '100%'
  }, handleError);
  
  var publisher_screen = OT.initPublisher('publisher_screen', {
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
	  session.publish(publisher_screen, handleError);
    }
  });
}
