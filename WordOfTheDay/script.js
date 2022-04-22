//send message to background
chrome.runtime.sendMessage(
  {
    name: "fetchWords",
  },
  (response) => {
    //wait for response

    console.log(response);
  }
);
