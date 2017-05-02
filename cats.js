$(function(){
  $('.summon-cats').click(function(){
    $.ajax({
      url: 'http://bitkittens.herokuapp.com/cats.json',
      method: 'GET',
      dataType: 'json'
    }).done(function(data) {
      var catList = data['cats'];
      catName = catList[1]['name']
      catPhoto = catList[1]['photo']
      $('<img>').attr('src', catPhoto).attr('alt', catName).appendTo('#cat1')
    });
  });

});
