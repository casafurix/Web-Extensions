//listen for messages
chrome.runtime.onMessage.addListener((msg, sender, response) => {
  if (msg.name == "fetchWords") {
    //we call API
    //wait for response
    //send the response
    const apiKey = "OUR-API-KEY";
    const dateStr = new Date().toISOString().slice(0, 10); //2020-01-01
    const apiCall = "";

    response({
      api: apiCall,
      date: dateStr,
    });
  }
});
