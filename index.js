function shout(string) {
    return string.toUpperCase();
  }

  function whisper(string) {
      //console.log("im here");
    return string.toLowerCase();
  }

  function logShout(string) {
      console.log(string.toUpperCase());
  }

  function logWhisper(string) {
      console.log(string.toLowerCase());
  }

  function sayHiToHeadphonedRoommate(string) {
    if (string === string.toLowerCase()){
        string = "I can\'t hear you!"
        return string;

       //console.log("went there");
        //return string.toLowerCase();
    } else if (string === string.toUpperCase()) {
        //console.log(string.toUpperCase());
        string = "YES INDEED!"
        return string;
    } else {
        string = "I would love to!"
        return string;
    }
}
