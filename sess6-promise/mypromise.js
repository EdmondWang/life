function myPromise(executor) {

  if (typeof executor != 'function') {
    throw TypeError('myPromise resolver is not a function!');
  }

  var self = this;

  this.value = undefined;
  this.status = 'pending';
  this.onResolvedCallbacks = [];
  this.onRejectedCallbacks = [];

  function resolve(v) {
    setTimeout(function() {
      if (self.status == 'pending') {
        self.status = 'fullfiiled';
      }
      self.data = v;
      for (let i = 0; i < self.onResolvedCallbacks.length; i++) {
        self.onResolvedCallbacks[i](v);
      }
    });
  }

  function reject(e) {
    setTimeout(function() {
      if (self.status == 'pending') {
        self.status = 'rejected';
      }
      self.data = e;
      for (let i = 0; i < self.onRejectedCallbacks.length; i++) {
        self.onRejectedCallbacks[i](e);
      }
    });
  }

  try {
    executor(resolve, reject);
  } catch(e) {
    reject(e);
  }
  
}

myPromise.prototype.then = function(onResolved, onRejected) {
  var self = this;
  var x;

  onResolved = typeof onResolved == 'function'? onResolved: function(v) {return v};
  onRejected = typeof onRejected == 'function'? onRejected: function(r) {throw r};

  if (self.status == 'fullfiiled') {
    return promiseB = new myPromise(function(resolve, reject) {
      try {
        x = onResolved(self.data);
        if (x instanceof Promise) {
          x.then(resolve, reject);
        }
        resolvePromise(promiseB, x, resolve, reject);
      } catch(e) {
        reject(e);
      }
    });
  }

  if (self.status == 'rejected') {
    return promiseB = new myPromise(function(resolve, reject) {
      try {
        x = onRejected(self.data);
        if (x instanceof Promise) {
          x.then(resolve, reject);
        }
        resolvePromise(promiseB, x, resolve, reject);
      } catch(e) {
        reject(e)
      }
      
    });
  }

  if (self.status == 'pending') {
    return promiseB = new myPromise(function(resolve, reject) {

      self.onResolvedCallbacks.push(function(v) {
        try {
          x = onResolved(self.data);
          if (x instanceof Promise) {
            x.then(resolve, reject);
          }
          resolvePromise(promiseB, x, resolvem, reject);
        } catch(e) {
          reject(e);
        }
      });

      self.onRejectedCallbacks.push(function(v) {
        try {
          x = onRejected(self.data);
          if (x instanceof Promise) {
            x.then(resolve, reject);
          }
          resolvePromise(promiseB, x, resolve, reject);
        } catch(e) {
          reject(e)
        }
      });

    });
  }

};

function resolvePromise(promise, val, resolve, reject) {
  resolve(promise);
}

// usage:
var dd = myPromise(function(resolve, reject) {
  console.log('inside constructor');
  resolve('8');
}).then(function(v) { 
  console.log('v: ' + v);
});