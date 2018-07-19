// $(document).ready(function () {
//   console.log('connected');
//
//   $('li').on('click',function() {
//     console.log("you clicked this item");
//     var item = $(this).text().replace(/ /g, "-");
//     // console.log(item);
//     $.ajax({
//       type: 'DELETE' ,
//       url: '/todo/'+ item,
//       data:
//       success: function(data) {
//         //some code to do something with the response
//         location.reload();
//       };
//     });
//   });
// });


//  console.log('connected');
//
// //deleting items from list
//  $('li').on('click', function(){
//    // console.log('youve touched me!');
//    var item = $(this).text().replace(/ /g, "-");
//    // console.log(item);
//    $.ajax({
//      type: 'DELETE',
//      url: '/todo/' + item,
//      success: function(data) {
//        // some code to do something with response
//        location.reload();
//      }
//    })
//  })
//
// $('form').on('submit',function() {
// event.preventDefault()
// let item=$(this);
// console.log(item);
//
//   $.ajax({
//     type: 'POST',
//     url: '/todo',
//     data: todo,
//     success: function (data) {
//        location.reload();
//
//
// }
// });
// });
// });

$(document).ready(function() {
  console.log('connected');
 // ADD ITEMS TO MY LIST
 $('form').on('submit', function() {
   console.log('you are submitting');
   let item = $('form input');
   let todo = {item: item.val()};

   $.ajax({
     type: 'POST',
     url:  '/todo',
     data: todo,
     success: function(data) {
       // some code to do somthing with the response
       location.reload();
     }
   });

   return false;

  });






 // DELETING ITEMS FROM LIST
  $('li').on('click', function() {
    // console.log('you have are inside click event')
    let id = $(this).attr('id');
    $.ajax({
      type: 'DELETE',
      url:  '/todo/' + id,
      success: function(data) {
        // some code to do somthing with the response
        location.reload();
      }
    });
  });

});
