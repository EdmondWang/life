Promise.retry = function(fn, times, delay) {
  var err = null;
  return new Promise(function(resolve, reject) {

    var attempt = function() {
      fn().then(resolve).catch(function(err) {
        console.log(`Attempt #${times} failed`);
        if (0 == times) {
          reject(err);
        } else {
          times--;
          setTimeout(function(){
            attempt()
          }, delay);
        }
      });
    };

    attempt();

  });
};


function fetchData() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      reject('server unavailable');
    }, 500);
  });
};


Promise.retry(fetchData, 3, 100).catch(function(err) {
  console.log('cannot fetch data now');
});;