var index = 0
var i = 0


function _next() {
    console.log('index' + index)

    if (index < 4) {
        $('body>div:nth-of-type(1)>div').eq(i).css('display', 'none')
        $('body>div:nth-of-type(1)>div').eq(i).next().css('display', 'block')
        index = index + 1
        i++
        console.log(i)

    }
    $('#prev').css('display', 'block')


}

function _prev() {
    console.log('index' + index)
    if (index != 0) {
        $('body>div:nth-of-type(1)>div').eq(i).css('display', 'none')
        $('body>div:nth-of-type(1)>div').eq(i).prev().css('display', 'block')
        index = index - 1
        i--

    }
    console.log(i)
}


$('#next').click(function() {
    if (index > 3) {
        $(this).css('display', 'none')
        $('#submit').css('display', 'block')

    }
})
$('#prev').click(function() {
    if (index < 4) {
        $('#submit').css('display', 'none')
        $('#next').css('display', 'block')

    }
})
$('#prev').click(function() {
    if (index < 1) {
        $(this).css('display', 'none')

    }
})

$('#next').click(function() {
    if (index == 1) {
        document.getElementsByClassName('progress')[0].style.width = "100px"
        document.getElementsByClassName('progress')[0].innerHTML = "25%"

    } else if (index == 2) {
        document.getElementsByClassName('progress')[0].style.width = "150px"
        document.getElementsByClassName('progress')[0].innerHTML = "50%"
    } else if (index == 3) {
        document.getElementsByClassName('progress')[0].style.width = "200px"
        document.getElementsByClassName('progress')[0].innerHTML = "75%"
    } else if (index == 4) {
        document.getElementsByClassName('progress')[0].style.width = "250px"
        document.getElementsByClassName('progress')[0].innerHTML = "100%"
    }


})
$('#prev').click(function() {
    if (index == 0) {
        document.getElementsByClassName('progress')[0].style.width = "0"
        document.getElementsByClassName('progress')[0].innerHTML = ""

    } else if (index == 1) {
        document.getElementsByClassName('progress')[0].style.width = "100px"
        document.getElementsByClassName('progress')[0].innerHTML = "25%"
    } else if (index == 2) {
        document.getElementsByClassName('progress')[0].style.width = "150px"
        document.getElementsByClassName('progress')[0].innerHTML = "50%"
    } else if (index == 3) {
        document.getElementsByClassName('progress')[0].style.width = "200px"
        document.getElementsByClassName('progress')[0].innerHTML = "75%"

    }


})

$('#submit').click(function() {
    $('body>div').css('display', 'none')
    $('#like').css('transform', 'scale(1)')
})


$(function() {
    $('li').click(function() {
        $('li').removeClass(' background')
        $(this).addClass(' background')
    })

})