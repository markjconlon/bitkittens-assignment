$(function(){
  $('.summon-cats').click(function(){
    $.ajax({
      url: 'http://bitkittens.herokuapp.com/cats.json',
      method: 'GET',
      dataType: 'json'
    }).done(function(data) {
      debugger;
      var catList = data['cats'];
      for (var i = 0; i < catList.length; i++) {
        var catName = catList[i]['name']
        var catPhoto = catList[i]['photo']
        $('<img>').attr('src', catPhoto).attr('alt', catName).appendTo('#cat' + (i + 1))
      }
    });
  });

});
