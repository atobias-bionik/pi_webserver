var apiKey = "46289302";
var sessionId = "1_MX40NjI4OTMwMn5-MTU1MzUyMDQ4NDA1OX5HbmJsUUhzTWZhZE5WZnNwamFKSGZCSGF-fg";
var token = "T1==cGFydG5lcl9pZD00NjI4OTMwMiZzaWc9ZGFjNzU4YWVhZWE4NjhiZThlMWE1YTkwNjljZDVlNmE2ZWRiNDY3NDpzZXNzaW9uX2lkPTFfTVg0ME5qSTRPVE13TW41LU1UVTFNelV5TURRNE5EQTFPWDVIYm1Kc1VVaHpUV1poWkU1V1puTndhbUZLU0daQ1NHRi1mZyZjcmVhdGVfdGltZT0xNTUzNTIwNTEzJm5vbmNlPTAuNDk3NjkxNzcwNDY1MDUyNzUmcm9sZT1wdWJsaXNoZXImZXhwaXJlX3RpbWU9MTU1NjExMjQ5NSZpbml0aWFsX2xheW91dF9jbGFzc19saXN0PQ==";

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
  var publisher = OT.initPublisher('publisher', {
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
