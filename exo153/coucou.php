<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" type="text/css" href="default_blue.css" />


</head>
<body>
    <input value=01/<?=$_GET['month']?>/<?=$_GET['year']?>" hidden id="test">
    <div id="calendarMain" class="calendarMain"></div>
    <script type="text/javascript" src="jsSimpleDatePickr.2.1.js"></script>
    <div id="calendarMain" class="calendarMain"></div>
    <script type="text/javascript">
        //<![CDATA[
        var myCalendar = new jsSimpleDatePickr();
        myCalendar.CalAdd({
            'divId': 'calendarMain',
            'dateMask': 'JJ/MM/AAAA',
            'dateCentury': 20,
            'titleMask': 'M AAAA',
            'navType': '01',
            'classTable': 'jsCalendar',
            'classDay': 'day',
            'classDaySelected': 'selectedDay',
            'monthLst': ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
            'dayLst': ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
            'hideOnClick': false,
            'showOnLaunch': true
        });
        myCalendar.jsSDPObj[0]['inputFieldId']="test";

        myCalendar.CalDateInit(0, String(document.getElementById("test").value));
        //]]>
    </script>

</body>
</html>