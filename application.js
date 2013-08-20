
$(document).ready(function() {
  var todoTemplate = $.trim($('#todo_template').html());
  
  $('.add').on('click', bindEvents);
  $('.todo_list').on('click', '.delete', removeTodo);
  $('.todo_list').on('click', '.complete', completeTodo);

  function buildTodo(todoName) {
    var $todo = $(todoTemplate);
    $todo.find('h2').text(todoName);
    return $todo;
  }

  function removeTodo() {
    $(this).closest('div').remove();
  }

  function completeTodo() {
    $(this).closest('div').css({'font-style':'italic', 'color':'red'});
    $(this).closest('div').find('h2').append(" - Completed");
  }
  
  function clearInput() {
    $('.todo').val("");
    $('.todo').focus();
  }

  function bindEvents() {
    todo = $('.todo').val();
    $template = buildTodo(todo);
    $('.todo_list').append($template);
    clearInput();
  }

});
