document.getElementById("arabicLang").addEventListener('click', function(e) {
    e.preventDefault()
    localStorage.setItem('lang', 'en');
    var initialLocaleCode = 'en';
    var srcCalendarEl = document.getElementById('source-calendar');

    if (srcCalendarEl) {
        var srcCalendar = new FullCalendar.Calendar(srcCalendarEl, {
            editable: true,
            initialDate: '2020-09-12',
            locale: initialLocaleCode,
            events: [{
                start: '2020-09-01',
                backgroundColor: '#9B5ADC',
                borderColor: '#9B5ADC'
            }, {
                start: '2020-09-07',
                end: '2020-09-10',
                backgroundColor: '#1ABBAD',
                borderColor: '#1ABBAD'
            }],
            eventLeave: function(info) {
                console.log('event left!', info.event);
            }
        });

        srcCalendar.render();
        srcCalendar.setOption('locale', 'en');
    }

    var calendarEl = document.getElementById('calendar');

    if (calendarEl) {
        var calendar = new FullCalendar.Calendar(calendarEl, {
            headerToolbar: {
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
            },
            initialDate: '2020-09-12',
            locale: initialLocaleCode,
            buttonIcons: false, // show the prev/next text
            weekNumbers: true,
            navLinks: true, // can click day/week names to navigate views
            editable: true,
            dayMaxEvents: true, // allow "more" link when too many events
            events: [{
                title: 'All Day Event',
                start: '2020-09-01',
                backgroundColor: '#9B5ADC',
                borderColor: '#9B5ADC'
            }, {
                title: 'Long Event',
                start: '2020-09-07',
                end: '2020-09-10',
                backgroundColor: '#1ABBAD',
                borderColor: '#1ABBAD'
            }, {
                groupId: 999,
                title: 'Repeating Event',
                start: '2020-09-09T16:00:00',
                backgroundColor: '#75A9F2',
                borderColor: '#75A9F2'
            }, {
                groupId: 999,
                title: 'Repeating Event',
                start: '2020-09-16T16:00:00'
            }, {
                title: 'Conference',
                start: '2020-09-11',
                end: '2020-09-13'
            }, {
                title: 'Meeting',
                start: '2020-09-12T10:30:00',
                end: '2020-09-12T12:30:00'
            }, {
                title: 'Lunch',
                start: '2020-09-12T12:00:00'
            }, {
                title: 'Meeting',
                start: '2020-09-12T14:30:00'
            }, {
                title: 'Happy Hour',
                start: '2020-09-12T17:30:00'
            }, {
                title: 'Dinner',
                start: '2020-09-12T20:00:00'
            }, {
                title: 'Birthday Party',
                start: '2020-09-13T07:00:00'
            }, {
                title: 'Click for Google',
                url: 'http://google.com/',
                start: '2020-09-28'
            }]
        });

        calendar.render();

        calendar.setOption('locale', 'en');

    }

    $('html').attr('dir', 'ltr');
    $('link').attr('href', 'css/style-rtl.css');

    $('.top-header')[0].style.background = '#fff url("images/topleft-right.png") no-repeat right center';


    $('.selector').calendarsPicker('destroy') // disable datepicker and field 

    $('.selector').calendarsPicker($.extend({
        calendar: $.calendars.instance('islamic'),
        dateFormat: 'M d, yyyy',
        prevText: 'prev',
        todayText: 'today',
        nextText: 'next',
        clearText: 'clear',
        closeText: 'close',
    }));

    $('.selector').calendarsPicker('enable') // enable datepicker and field 


    $(this)[0].style.display = 'none';
    $('#englishLang')[0].style.display = 'flex';

});


document.getElementById("englishLang").addEventListener('click', function(e) {
    e.preventDefault();
    localStorage.setItem('lang', 'ar');
    var initialLocaleCode = 'ar';

    var srcCalendarEl = document.getElementById('source-calendar');

    if (srcCalendarEl) {
        var srcCalendar = new FullCalendar.Calendar(srcCalendarEl, {
            editable: true,
            initialDate: '2020-09-12',
            locale: initialLocaleCode,
            events: [{
                start: '2020-09-01',
                backgroundColor: '#9B5ADC',
                borderColor: '#9B5ADC'
            }, {
                start: '2020-09-07',
                end: '2020-09-10',
                backgroundColor: '#1ABBAD',
                borderColor: '#1ABBAD'
            }],
            eventLeave: function(info) {
                console.log('event left!', info.event);
            }
        });

        srcCalendar.render();
        srcCalendar.setOption('locale', 'ar-sa');
    }

    var calendarEl = document.getElementById('calendar');

    if (calendarEl) {
        var calendar = new FullCalendar.Calendar(calendarEl, {
            headerToolbar: {
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
            },
            initialDate: '2020-09-12',
            locale: initialLocaleCode,
            buttonIcons: false, // show the prev/next text
            weekNumbers: true,
            navLinks: true, // can click day/week names to navigate views
            editable: true,
            dayMaxEvents: true, // allow "more" link when too many events
            events: [{
                title: 'All Day Event',
                start: '2020-09-01',
                backgroundColor: '#9B5ADC',
                borderColor: '#9B5ADC'
            }, {
                title: 'Long Event',
                start: '2020-09-07',
                end: '2020-09-10',
                backgroundColor: '#1ABBAD',
                borderColor: '#1ABBAD'
            }, {
                groupId: 999,
                title: 'Repeating Event',
                start: '2020-09-09T16:00:00',
                backgroundColor: '#75A9F2',
                borderColor: '#75A9F2'
            }, {
                groupId: 999,
                title: 'Repeating Event',
                start: '2020-09-16T16:00:00'
            }, {
                title: 'Conference',
                start: '2020-09-11',
                end: '2020-09-13'
            }, {
                title: 'Meeting',
                start: '2020-09-12T10:30:00',
                end: '2020-09-12T12:30:00'
            }, {
                title: 'Lunch',
                start: '2020-09-12T12:00:00'
            }, {
                title: 'Meeting',
                start: '2020-09-12T14:30:00'
            }, {
                title: 'Happy Hour',
                start: '2020-09-12T17:30:00'
            }, {
                title: 'Dinner',
                start: '2020-09-12T20:00:00'
            }, {
                title: 'Birthday Party',
                start: '2020-09-13T07:00:00'
            }, {
                title: 'Click for Google',
                url: 'http://google.com/',
                start: '2020-09-28'
            }]
        });

        calendar.render();
        calendar.setOption('locale', 'ar-sa');

    }

    $('html').attr('dir', 'rtl');
    $('link').attr('href', 'css/style.css');

    $('.top-header')[0].style.background = '#fff url("images/bg_art_topleft.png") no-repeat left center';


    $('.selector').calendarsPicker('destroy') // disable datepicker and field 

    $('.selector').calendarsPicker($.extend({
        calendar: $.calendars.instance('islamic', 'ar'),
        dateFormat: 'M d, yyyy',
        prevText: 'السابق',
        todayText: 'اليوم',
        nextText: 'التالي',
        clearText: 'مسح',
        closeText: 'اغلاق',
    }));

    $('.selector').calendarsPicker('enable') // disable datepicker and field 

    $(this)[0].style.display = 'none';
    $('#arabicLang')[0].style.display = 'flex';

});