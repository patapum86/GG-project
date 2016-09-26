'use strict';

angular.module('chatApp')

  .directive('chat', function(socket) {
    return {
      templateUrl: 'components/chat/chat.html',
      restrict: 'E',
      link: function(scope, element) {
        element.addClass('chat');


        scope.messages = [];
        scope.sendMessage = function () {
          var myMsg = {
            text: scope.input
          };

        scope.input = "";
        console.log(socket);
        socket.socket.emit('chat', myMsg);
        };

        socket.socket.on('chat', function (data) {
        scope.messages.push(data);
        });
        

      }
    };
  });



