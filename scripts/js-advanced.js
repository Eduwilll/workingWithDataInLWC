function doSomething(msg){ 
    return new Promise(
      function (resolve, reject) {
        setTimeout(
          function () {
            console.log(msg);
            resolve();
          }, 
          1000);
      }); 
  }
      
  doSomething("1st Call")
    .then(function() {
      return doSomething("2nd Call");
    })
    .then(function() {
      return doSomething("3rd Call");
  });    

    // *******************************************
    function doSomething(msg){ 
    return new Promise((resolve, reject) => {
        setTimeout(
          () => {
            console.log(msg);
            resolve();
          }, 
          1000);
      }) 
  }
      
  doSomething("1st Call")
    .then(() => doSomething("2nd Call"))
    .then(() => doSomething("3rd Call"));  
  
    // *******************************************
    async function doSomethingManyTimes() {
        try {
          await doSomething("1st Call");
          await doSomething("2nd Call");
          await doSomething("3rd Call");
        } catch (e) {
          console.error(e.message);
        }
      }
            
      doSomethingManyTimes();  
        