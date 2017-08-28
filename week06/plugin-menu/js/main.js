$(document).ready(function() {
  var json = {brand : 'Menu UI',
      menu: [
        {
          id: 'home',
          value: 'Home',
          icon: 'glyphicon glyphicon-home',
          action: 'click'
        },{
          id: 'profile',
          value: 'Profile',
          icon: 'glyphicon glyphicon-user',
          action: 'click',
          disable: true
        },{
          id: 'message',
          value: 'Message',
          icon: 'glyphicon glyphicon-envelope',
          show: true,
          action: 'click',
          disable: true
        },{
          id: 'setting',
          value: 'Setting',
          icon: 'glyphicon glyphicon-cog',
          show: true,
          submenu: [
            { id: 'preference', value: 'Preference', action: 'click' },
            { id: 'theme', value: 'Theme', show: true, action: 'click' },
            { id: 'help', value: 'Help', show: true, action: 'click' }
          ]
        }
      ]
    };

  var clickAction = function(id){
    console.log("clickAction: ", id);
  }

  $( "#menuUI" ).menuUI(json, clickAction);

});
