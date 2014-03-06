/* 
  An Orangejuice plugin is a function that decorates an 
  Orangejuice instance with functionality.
   
  The typical use-case looks like:

      var OJ = require('orangejuice');
      var myPlugin = require('orangejuice-my-plugin');
  
      myPlugin(OJ);
    
  The following is a "kitchen sink" implementation of the 
  Orangejuice API, to showcase the various ways a plugin 
  can interact with Orangejuice.

  By convention the first argument to your plugin
  function should be the Orangejuice instance.
   
  Feel free to add any number of additional arguments, 
  for instance to pass in a plugin-specific config object.
*/

module.exports = function(oj, myPluginConfig) {

  /* 
    ORANGEJUICE EVENTS
    ##################

    Orangejuice allows you to register event listeners
    to get notified of the various stages of execution.

    The event API is: 
    
    Register an event listener:
    oj.bind('eventName', callbackFunction);
    
    Register an event listener that will be fired only once:
    oj.one('eventName', callbackFunction);
    
    Remove an event listener:
    oj.unbind('eventName', callbackFunction);

  */

  oj.one('beforeBuild', function() {
    console.log('Happens only once, before the first build');
  });

  oj.bind('afterBuild', function() {
    console.log('Happens after every build');
  });

  oj.bind('beforeBuild', function() {
    console.log('Happens before every build');
  });  

  /*
   
  */

};