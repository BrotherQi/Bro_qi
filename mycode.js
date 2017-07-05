//alert(document.title);
//document.write('everything is ok in here<br/>'); //»»ÐÐ
function buttonReport(buttonId,buttonName,buttonValue)
{
        var userMessage1 = "Button id:" + buttonId + "\n";
        var userMessage2 = "Button name:" + buttonName +"\n";
        var userMessage3 = "Button value" + buttonValue + "\n";
        alert(userMessage1 + userMessage2 + userMessage3);
}
function telltime()
{
        var out = "";
        var now = new Date();
        out+= "<br /> Date : " + now.getDate();
        out+= "<br /> Month: " + now.getMonth();
        out+= "<br /> Year: " + now.getYear();
        out+= "<br /> Hours: " + now.getHours();
        out+= "<br /> Minutes: " + now.getMinutes();
        out+= "<br /> Seconds: " + now.getSeconds();
        document.getElementById("div2").innerHTML = out;
}