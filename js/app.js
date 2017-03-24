/**
 * Created by aimene on 23/03/17.
 */

// jst to require Planets List
$.get("http://swapi.co/api/planets/?format=json&page=6", function(res1) {
    $('#homeworld').text("i live in " +res1.results[9].name)
    $('#homeworld2').text("i live in " +res1.results[9].name)
    $('#homeworld4').text("i live in " +res1.results[9].name)
})
// there is 7 pages of Planets ans each page = new Html page
// so i added a new require Planets List
$.get("http://swapi.co/api/planets/?format=json&page=1", function(res1) {
    $('#homeworld3').text("i live in " +res1.results[6].name)
})

$.get("http://swapi.co/api/people/?format=json", function(res) {
    $('#full_detail').hide()
    $('#full_detail2').hide()
    $('#full_detail3').hide()
    $('#full_detail4').hide()
    // Show hero DATA
    $('.jumbotron').css({
        display: 'block'
    })
    // Fill hero DATA
    $('#name').text("I am " + res.results[0].name)
    $('#birthday').text("Born in  " + res.results[0].birth_year)
    $('#gender').text("i am a " + res.results[0].gender)
    $('#height').text("i have " + res.results[0].height + " Kg")
    $('#mass').text("mass " + res.results[0].mass)
    $('#hair-color').text("my hair color is " + res.results[0].hair_color)
    $('#skin_color').text("my skin color is " + res.results[0].skin_color)
    $('#eye_color').text("my eye color is " + res.results[0].eye_color)
    $('#films').text("i filmed in " + res.results[0].films)
    $('#species').text("i visited " + res.results[0].species)
    $('#vehicles').text("i have " + res.results[0].vehicles)
    $('#starships').text("and " + res.results[0].starships)

    // Fill hero DATA
    $('#name2').text("I am " + res.results[1].name)
    $('#birthday2').text("produced in  " + res.results[1].birth_year)
    $('#gender2').text("i am a Robot " + res.results[1].gender)
    $('#height2').text("i have " + res.results[1].height + " Kg")
    $('#mass2').text("mass " + res.results[1].mass)
    $('#hair-color2').text("my hair color is " + res.results[1].hair_color)
    $('#skin_color2').text("my skin color is " + res.results[1].skin_color)
    $('#eye_color2').text("my eye color is " + res.results[1].eye_color)
    $('#films2').text("i filmed in " + res.results[1].films)
    $('#species2').text("i visited " + res.results[1].species)
    $('#vehicles2').text("i have " + res.results[1].vehicles)
    $('#starships2').text("and " + res.results[1].starships)

    // Fill hero DATA
    $('#name3').text("I am " + res.results[2].name)
    $('#birthday3').text(res.results[2].birth_year)
    $('#gender3').text(res.results[2].gender)
    $('#birthday3').text("produced in  " + res.results[2].birth_year)
    $('#gender3').text("i am a Robot " + res.results[2].gender)
    $('#height3').text("i have " + res.results[2].height + " Kg")
    $('#mass3').text("mass " + res.results[2].mass)
    $('#hair-color3').text("my hair color is " + res.results[2].hair_color)
    $('#skin_color3').text("my skin color is " + res.results[2].skin_color)
    $('#eye_color3').text("my eye color is " + res.results[2].eye_color)
    $('#films3').text("i filmed in " + res.results[2].films)
    $('#species3').text("i visited " + res.results[2].species)
    $('#vehicles3').text("i have " + res.results[2].vehicles)
    $('#starships3').text("and " + res.results[2].starships)

    // Fill hero DATA
    $('#name4').text("I am " + res.results[3].name)
    $('#birthday4').text(res.results[3].birth_year)
    $('#gender4').text(res.results[3].gender)
    $('#birthday4').text("Born in  " + res.results[3].birth_year)
    $('#gender4').text("i am a " + res.results[3].gender)
    $('#height4').text("i have " + res.results[3].height + " Kg")
    $('#mass4').text("mass " + res.results[3].mass)
    $('#hair-color4').text("my hair color is " + res.results[3].hair_color)
    $('#skin_color4').text("my skin color is " + res.results[3].skin_color)
    $('#eye_color4').text("my eye color is " + res.results[3].eye_color)
    $('#films4').text("i filmed in " + res.results[3].films)
    $('#species4').text("i visited " + res.results[3].species)
    $('#vehicles4').text("i have " + res.results[3].vehicles)
    $('#starships4').text("and " + res.results[3].starships)

    // Show Full Hero Data
    // i added full and less buttons into  2 classes btn-info and btn-success
    // and made the classes shown and hide in place of repeating the code for each id button
    // just to optimaize the code
    // i am tired xd
    $('#all1').click(function() {
        $('.btn-success').hide()
        $('#full_detail').show()

    })
    $('#all2').click(function() {
        $('.btn-success').hide()
        $('#full_detail2').show()

    })
    $('#all3').click(function() {
        $$('.btn-success').hide()
        $('#full_detail3').show()

    })
    $('#all4').click(function() {
        $('.btn-success').hide()
        $('#full_detail4').show()

    })
    // Show Less Hero Data
    $('#less1').click(function() {
        $('#full_detail').hide()
        $('.btn-success').show()
    })
    $('#less2').click(function() {
        $('#full_detail2').hide()
        $('.btn-success').show()
    })
    $('#less3').click(function() {
        $('#full_detail3').hide()
        $('.btn-success').show()
    })
    $('#less4').click(function() {
        $('#full_detail4').hide()
        $('.btn-success').show()
    })

})