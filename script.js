$(document).ready(function() {
  function colour_random() {
    var num = Math.floor(Math.random() * Math.pow(2, 24));
    return '#' + ('00000' + num.toString(16)).substr(-6);
  }
  // Block#: 1
  function on_Label_target1_CLICK(e) {
    try {
      // Block#: 2
      com.fc.JavaScriptDistLib.Label.setProperty["Text color"]("target1", (colour_random())); // Block#: 4
      com.fc.JavaScriptDistLib.Label.setProperty["Font size"]("target1", 25); // Block#: 6
      com.fc.JavaScriptDistLib.Label.setProperty["Font family"]("target1", 'Copperplate'); // Block#: 8
      com.fc.JavaScriptDistLib.Label.setProperty["Text"]("content", com.fc.JavaScriptDistLib.Label.getProperty["Text"]("target1")); // Block#: 10
      com.fc.JavaScriptDistLib.Label.setProperty["Max lines"]("content", 2); // Block#: 12
      com.fc.JavaScriptDistLib.Label.setProperty["Text"]("family", com.fc.JavaScriptDistLib.Label.getProperty["Font family"]("target1")); // Block#: 14
      com.fc.JavaScriptDistLib.Label.setProperty["Background color"]("color", com.fc.JavaScriptDistLib.Label.getProperty["Text color"]("target1")); // Block#: 16
      com.fc.JavaScriptDistLib.Label.setProperty["Text"]("style", com.fc.JavaScriptDistLib.Label.getProperty["Font style"]("target1")); // Block#: 18
      com.fc.JavaScriptDistLib.Label.setProperty["Text"]("size", (com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Label.getProperty["Font size"]("target1")))); // Block#: 21
      com.fc.JavaScriptDistLib.Label.setProperty["Text Alignment"]("alignment", 'center'); // Block#: 23
      com.fc.JavaScriptDistLib.Label.setProperty["Text"]("alignment", com.fc.JavaScriptDistLib.Label.getProperty["Text Alignment"]("target1")); // Block#: 25
      com.fc.JavaScriptDistLib.Label.setProperty["Text"]("bckcolor", (com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Label.getProperty["Background color"]("target1")))); // Block#: 28
      com.fc.JavaScriptDistLib.Label.setProperty["Alpha"]("alpha", 25); // Block#: 30
      com.fc.JavaScriptDistLib.Label.setProperty["Text"]("alpha", (com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Label.getProperty["Alpha"]("alpha")))); // Block#: 33
      com.fc.JavaScriptDistLib.Label.setProperty["x"]("target1", 0); // Block#: 35
      com.fc.JavaScriptDistLib.Label.setProperty["y"]("target1", 0); // Block#: 37
      com.fc.JavaScriptDistLib.Label.setProperty["width"]("target1", 200); // Block#: 39
      com.fc.JavaScriptDistLib.Label.setProperty["height"]("target1", 100); // Block#: 41
      com.fc.JavaScriptDistLib.Label.setProperty["y"]("target1", 0); // Block#: 42
      com.fc.JavaScriptDistLib.Label.setProperty["Text"]("width", (com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Label.getProperty["width"]("target1")))); // Block#: 45
      com.fc.JavaScriptDistLib.Label.setProperty["Text"]("height", (com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Label.getProperty["height"]("target1")))); // Block#: 48
      com.fc.JavaScriptDistLib.Label.setProperty["Text"]("y", (com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Label.getProperty["y"]("target1")))); // Block#: 51
      com.fc.JavaScriptDistLib.Label.setProperty["Text"]("x", (com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Label.getProperty["x"]("target1"))));
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    };
  };
  $('[obj-name= "target1"]').bind('click', on_Label_target1_CLICK);
  // Block#: 54
  function on_next_click(e) {
    try {
      // Block#: 55
      let hideScreen = $('.HTML5-deploy-wrapper .Screen:visible');
      hideScreen.hide();
      let showScreen = $('[obj-name="Screen2"]');
      showScreen.show();
      history.pushState({
        'view': 'Screen2'
      }, 'Screen2', 'Screen2');
      hideScreen.triggerHandler('hide');
      showScreen.triggerHandler('show');
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="next"]').on('click', on_next_click);
  // Block#: 56
  function on_font2_click(e) {
    try {
      // Block#: 57
      com.fc.JavaScriptDistLib.Label.setProperty["Font family"]("target2", 'Copperplate');
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="font2"]').on('click', on_font2_click);
  // Block#: 59
  function on_next2_click(e) {
    try {
      // Block#: 60
      let hideScreen = $('.HTML5-deploy-wrapper .Screen:visible');
      hideScreen.hide();
      let showScreen = $('[obj-name="Screen3"]');
      showScreen.show();
      history.pushState({
        'view': 'Screen3'
      }, 'Screen3', 'Screen3');
      hideScreen.triggerHandler('hide');
      showScreen.triggerHandler('show');
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="next2"]').on('click', on_next2_click);
  // Block#: 61
  function on_font1_click(e) {
    try {
      // Block#: 62
      com.fc.JavaScriptDistLib.Label.setProperty["Font family"]("target2", 'Helvetica');
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="font1"]').on('click', on_font1_click);
  // Block#: 64
  function on_show_click(e) {
    try {
      // Block#: 65
      $('[obj-name="target1"]').show();
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="show"]').on('click', on_show_click);
  // Block#: 66
  function on_hide_click(e) {
    try {
      // Block#: 67
      $('[obj-name="target1"]').hide();
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="hide"]').on('click', on_hide_click);
  // Block#: 68
  function on_disable_click(e) {
    try {
      // Block#: 69
      $('[obj-name= "target1"]').unbind('click');
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="disable"]').on('click', on_disable_click);
  // Block#: 70
  function on_enable_click(e) {
    try {
      // Block#: 71
      $('[obj-name= "target1"]').bind('click', on_Label_target1_CLICK);
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="enable"]').on('click', on_enable_click);
  // Block#: 72
  function on_Button_click(e) {
    try {
      // Block#: 73
      let hideScreen = $('.HTML5-deploy-wrapper .Screen:visible');
      hideScreen.hide();
      let showScreen = $('[obj-name="MainScreen"]');
      showScreen.show();
      history.pushState({
        'view': 'MainScreen'
      }, 'MainScreen', 'MainScreen');
      hideScreen.triggerHandler('hide');
      showScreen.triggerHandler('show');
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="Button"]').on('click', on_Button_click);
  // Block#: 74
  function on_setTextButton_click(e) {
    try {
      // Block#: 75
      com.fc.JavaScriptDistLib.Label.setProperty["Text"]("target1", 'hello\\nworld\\nhello');
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="setTextButton"]').on('click', on_setTextButton_click);
  com.fc.JavaScriptDistLib.Screen.screenPopInit();
  $('[obj-name="MainScreen"]').show();
});
// Generated by snapp
// 742720-385098-357795-835986
