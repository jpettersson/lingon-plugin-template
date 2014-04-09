/* 
  An Lingon plugin is a function that decorates an 
  Lingon instance with functionality.
   
  The typical use-case looks like:

      var lingon = require('lingon');
      var myPlugin = require('lingon-my-plugin');
  
      myPlugin(lingon);
    
  The following is a "kitchen sink" implementation of the 
  Lingon API, to showcase the various ways a plugin 
  can interact with Lingon.

  By convention the first argument to your plugin
  function should be the Lingon instance.
   
  Feel free to add any number of additional arguments, 
  for instance to pass in a plugin-specific config object.
*/

module.exports = function(lingon, myPluginConfig) {

  /* 
    Lingon events
    ##################

    Lingon allows you to register event listeners
    to get notified of the various stages of execution.

    The event API is: 
    
    Register an event listener:
    lingon.bind('eventName', callbackFunction);
    
    Register an event listener that will be fired only once:
    lingon.one('eventName', callbackFunction);
    
    Remove an event listener:
    lingon.unbind('eventName', callbackFunction);

  */

  lingon.one('beforeBuild', function() {
    console.log('Happens only once, before the first build');
  });

  lingon.bind('afterBuild', function() {
    console.log('Happens after every build');
  });

  lingon.bind('beforeBuild', function() {
    console.log('Happens before every build');
  });  

  /*
    If Lingon is in server mode you can access the 
    internal connect server instance:
  */

  if(lingon.server) {
    /*
      Example: Add a proxy middleware to the connect server
      
      lingon.server.use('/api', proxy(url.parse('http://some.server.com/api')));
    */
  }

};