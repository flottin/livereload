class Render
{
    constructor()
    {
        this.content = [
            'First item !',
            'Second item !',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            "Fourth item !",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",
            "Another item !",
            "The last item !",            "Another item !",
            "The last item !",            "Another item !",
                        "The last item !",
"This time the last item !","The last item !",            "Another item !",
            "The last item !",
"This time the last item !","The last item !",            "Another item !",
            "The last item !",
"This time the last item !","The last item !",            "Another item !",
            "The last item !",
"This time the last item !",
        ]
    }

  display()
  {
    var html = ""
          html += '<div class="divTable">'
          html += '<div class="divTableBody">'
    for (var i=0; i < this.content.length ;i++)
    {
              html += '<div class="divTableRow">'
              html += '<div class="divTableCell first">&#10048;</div>'
              html += '<div class="divTableCell second">&#9635;</div>'
              html += '<div class="divTableCell third"><span>&#8618; '+this.trunc(this.content[i], 50)+'</span>'
              html += '<div class="divTableCell third hidden">&#8618; '+this.content[i]+'</div></div>'
              html += '</div>'
    }
          html += '</div>'
          html += '</div>'
    document.body.innerHTML += html;
  }

  trunc(str, limit)
  {
    return str.length > limit ? str.substring(0,50) + ' ...' : str
  }
}
const r = new Render()
r.display()

  var toggle = 0




  $('.second').on( "click", function( event ) {
      $('span').show()
      $('.hidden').hide()

      if ($( event.target ).parent().find('.hidden').hasClass('lg'))
      {
          $( '.lg').removeClass('lg')
          $( event.target ).parent().find('.hidden').parent().removeClass('lg')
          $( event.target ).parent().find('.hidden').removeClass('lg')
          $( event.target ).parent().find('.hidden').hide()
          $( event.target ).parent().find('span').show()
      }
      else {
          $( '.lg').removeClass('lg')
          $( event.target ).parent().find('.hidden').parent().addClass('lg')
          $( event.target ).parent().find('.hidden').addClass('lg')
          $( event.target ).parent().find('.hidden').show()
          $( event.target ).parent().find('span').hide()
      }
});
