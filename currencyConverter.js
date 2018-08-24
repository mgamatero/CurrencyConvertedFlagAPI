$(document).ready(function () {

    $(document).on('click', ".dropdown-menu a", function () {
        $('.btn:first-child').text($(this).text())
        destinationCurrency = $(this).attr('data')
        countryName=$(this).text()
        flagName=$(this).attr('value')
        

        convert()
    })

    $converted = $(".converted")
    $currency = $(".currency")
    $countryCode = $(".countryCode")
    $country = $(".country")
    $flag=$("#flag")

    var key = "6037cc0086f8b6f51d09c1958c97f5e6"
    var sourceCurrency = ""
    var destinationCurrency = ""
    var countryName = ""
    var flagName=""

    function convert() {
        $.get("http://apilayer.net/api/live?access_key=" + key + "&from=" + sourceCurrency + "&to=" + destinationCurrency)
            .done(function (data) {
                console.log(data)  //returns JSON
                
                $country.html(countryName)
                $flag.attr("src","https://www.countryflags.io/"+ flagName +"/shiny/48.png")
                $countryCode.html(flagName)
                $currency.html(destinationCurrency)
                $converted.html(data.quotes["USD"+destinationCurrency])
                
               
                
            })
            .fail(function (e) {
                alert(e)
            })
    }



});