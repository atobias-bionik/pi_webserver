var apiKey = "46289302";
var sessionId = "1_MX40NjI4OTMwMn5-MTU1MjkyNjI4MTA2OX5VcmZDbzNleEw1OGMvMGNlSEp5VjJrMFN-fg";
var token = "T1==cGFydG5lcl9pZD00NjI4OTMwMiZzaWc9YjdhNDlhY2RkNjYzODUwMzY0MWM3YTZhNjFkOWQ2NWExZThlODkyNTpzZXNzaW9uX2lkPTFfTVg0ME5qSTRPVE13TW41LU1UVTFNamt5TmpJNE1UQTJPWDVWY21aRGJ6TmxlRXcxT0dNdk1HTmxTRXA1VmpKck1GTi1mZyZjcmVhdGVfdGltZT0xNTUyOTI2MzUxJm5vbmNlPTAuNzc2OTMzNjE3MjU4NzAxOCZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNTUyOTQ3OTQzJmluaXRpYWxfbGF5b3V0X2NsYXNzX2xpc3Q9";

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
