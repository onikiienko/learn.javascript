// нужно обновить лого
// при большом  желании изменить тайлы, но это напряжненько, хотя есть хаготовки.
// копирайт новый вставить
// добавить аватарки(в дропбокс пока что можно)

// Дима https://photos-4.dropbox.com/t/0/AABlW-KuFMGRdIEHPA5lZPwt4Q4RVh1qpPh0QMnznQ9gEw/12/60307438/jpeg/32x32/3/1370613600/0/2/y_c1e1b94e.jpg/IQGoJk0OHp5jc77fX4C1bkX5cMwe4YUiK3AtUK2dJQg?size=1024x768


/**
 * Created with JetBrains PhpStorm.
 * User: onikienko
 * Date: 6/6/13
 * Time: 5:23 PM
 * To change this template use File | Settings | File Templates.
 */
var data = [
    /*    {
     dataHeader: '<div class="dg-api-baloon-title">Продукт в цифрах</div>',
     data: '<div class="dg-api-baloon-content">\
     <ul class="dg-api-number-list">\
     <li><span>25</span> млн скачиваний</li>\
     <li><span>170</span> партнеров</li>\
     <li><span>100500</span> строк кода</li>\
     <li><span>700+</span> автотестов</li>\
     </ul>\
     </div>',
     point: [-26.41113281249,5.5982024918376],
     htmlWidth: 480,
     htmlHeight: 245
     },*/

    {
        dataHeader: '<div class="dg-api-baloon-title">Команда</div>',
        data: '<div class="dg-api-baloon-content"> \
            <ul class="dg-api-team-preview">\
                <li><a href="javascript:void(0);" title="Андрей"><img src="/assets/frontend/api/api_vacancy/avatars/a.geonya_ava.jpg" alt="" /></a></li>\
                <li><a href="javascript:void(0);" title="Алексей"><img src="/assets/frontend/api/api_vacancy/avatars/a.lubchuk_ava.jpg" alt="" /></a></li>\
                <li><a href="javascript:void(0);" title="Петя"><img src="/assets/frontend/api/api_vacancy/avatars/p.dmitrienko_ava.jpg" alt="" /></a></li>\
                <li><a href="javascript:void(0);" title="Дима"><img src="/assets/frontend/api/api_vacancy/avatars/d.lutsyk_ava.jpg" alt="" /></a></li>\
                <li><a href="javascript:void(0);" title="Богдан"><img src="/assets/frontend/api/api_vacancy/avatars/b.onikienko_ava.jpg" alt="" /></a></li>\
                <li><a href="javascript:void(0);" title="Паша"><img src="/assets/frontend/api/api_vacancy/avatars/p.gajdamak_ava.jpg" alt="" /></a></li>\
                <li><a href="javascript:void(0);" title="Макс"><img src="/assets/frontend/api/api_vacancy/avatars/m.berezkin_ava.jpg" alt="" /></a></li>\
                <li><a href="javascript:void(0);" title="Алексей"><img src="/assets/frontend/api/api_vacancy/avatars/a.kim_ava.jpg" alt="" /></a></li>\
            </ul>\
            <ul class="dg-api-team">\
                <li class="dg-api-team-item">\
                    <img src="/assets/frontend/api/api_vacancy/avatars/a.geonya.jpg" alt="" class="dg-api-team-photo" />\
                    <div class="dg-api-team-desc">\
                        <div class="dg-api-team-name">Андрей</div>\
                        <div class="dg-api-team-skills">\
                            Раса: люди<br/>\
                            Класс: разработчики<br/>\
                            Уровень: 85<br/>\
                            Особые навыки: может не спать 2 суток\
                        </div>\
                    </div>\
                </li>\
                <li class="dg-api-team-item">\
                    <img src="/assets/frontend/api/api_vacancy/avatars/a.lubchuk.jpg" alt="" class="dg-api-team-photo" />\
                    <div class="dg-api-team-desc">\
                        <div class="dg-api-team-name">Алексей</div>\
                        <div class="dg-api-team-skills">\
                            Раса: люди<br/>\
                            Класс: разработчики<br/>\
                            Уровень: 85<br/>\
                            Особые навыки: умеет читать код с закрытими глазами, через закрытую крышку, выключенного ноутбука\
                        </div>\
                    </div>\
                </li>\
                <li class="dg-api-team-item">\
                    <img src="/assets/frontend/api/api_vacancy/avatars/p.dmitrienko.jpg" alt="" class="dg-api-team-photo" />\
                    <div class="dg-api-team-desc">\
                        <div class="dg-api-team-name">Пётр</div>\
                        <div class="dg-api-team-skills">\
                            Раса: люди<br/>\
                            Класс: разработчики<br/>\
                            Уровень: 85<br/>\
                            Особые навыки: рубает на удраных\
                        </div>\
                    </div>\
                </li>\
                <li class="dg-api-team-item">\
                    <img src="/assets/frontend/api/api_vacancy/avatars/d.lutsyk.jpg" alt="" class="dg-api-team-photo" />\
                    <div class="dg-api-team-desc">\
                        <div class="dg-api-team-name">Дмитрий</div>\
                        <div class="dg-api-team-skills">\
                            Раса: люди<br/>\
                            Класс: разработчики<br/>\
                            Уровень: 85<br/>\
                            Особые навыки: чемпион мира по настольному тенису\
                        </div>\
                    </div>\
                </li>\
                <li class="dg-api-team-item">\
                    <img src="/assets/frontend/api/api_vacancy/avatars/b.onikienko.jpg" alt="" class="dg-api-team-photo" />\
                    <div class="dg-api-team-desc">\
                        <div class="dg-api-team-name">Богдан</div>\
                        <div class="dg-api-team-skills">\
                            Раса: люди<br/>\
                            Класс: тестировщики<br/>\
                            Уровень: 85<br/>\
                            Особые навыки: моет руки перед релизом\
                        </div>\
                    </div>\
                </li>\
                <li class="dg-api-team-item">\
                    <img src="/assets/frontend/api/api_vacancy/avatars/p.gajdamak.jpg" alt="" class="dg-api-team-photo" />\
                    <div class="dg-api-team-desc">\
                        <div class="dg-api-team-name">Павел</div>\
                        <div class="dg-api-team-skills">\
                            Раса: люди<br/>\
                            Класс: тестировщики<br/>\
                            Уровень: 85<br/>\
                            Особые навыки: Повелитель котиков\
                        </div>\
                    </div>\
                </li>\
                <li class="dg-api-team-item">\
                    <img src="/assets/frontend/api/api_vacancy/avatars/m.berezkin.jpg" alt="" class="dg-api-team-photo" />\
                    <div class="dg-api-team-desc">\
                        <div class="dg-api-team-name">Максим</div>\
                        <div class="dg-api-team-skills">\
                            Раса: люди<br/>\
                            Класс: PO\'овнеры<br/>\
                            Уровень: 85<br/>\
                            Особые навыки: зрит в корень\
                        </div>\
                    </div>\
                </li>\
                <li class="dg-api-team-item">\
                    <img src="/assets/frontend/api/api_vacancy/avatars/a.kim.jpg" alt="" class="dg-api-team-photo" />\
                    <div class="dg-api-team-desc">\
                        <div class="dg-api-team-name">Алексей</div>\
                        <div class="dg-api-team-skills">\
                            Раса: люди<br/>\
                            Класс: добрая и общительная поддержка<br/>\
                            Уровень: 85<br/>\
                            Особые навыки: железные нервы, проникновенный взгляд\
                        </div>\
                    </div>\
                </li>\
            </ul>\
         </div>',
        point: [-15.161132812496,16.955649717134],
        htmlWidth: 626,
        htmlHeight: 230
    },

    {
        dataHeader: '<div class="dg-api-baloon-title">Задачи</div>',
        data: '<div class="dg-api-baloon-content">\
                <ul class="dg-api-text-list"> \
                    <li><i>&mdash;</i>Колбасим API карты 2ГИС</li> \
                    <li><i>&mdash;</i>Любим Canvas, SVG, WebGL, поглядываем на GLSL, WebGL фреймворки, мыслим draw call’ами</li> \
                    <li><i>&mdash;</i>Работаем с Leaflet</li> \
                    <li><i>&mdash;</i>Интегрируемся с внутренними сервисами компании</li> \
                    <li><i>&mdash;</i>Разрабатываем Widget’ы на основе карт</li> \
                    <li><i>&mdash;</i>Ворочаем кучей данных на клиенте</li> \
                    <li><i>&mdash;</i>Готовим карты от А до Я. Тайлы, стили, сервера, статистика</li> \
                    <li><i>&mdash;</i>Ускоряем отрисовки в браузерах и скорость загрузки API карт 2ГИС</li> \
                </ul>\
             </div>',
        point: [18.413085937505,5.2482142227771],
        htmlWidth: 510,
        htmlHeight: 230
    },

    {
        dataHeader: '<div class="dg-api-baloon-title">Процессы</div>',
        data: '<div class="dg-api-baloon-content">\
                <ul class="dg-api-text-list"> \
                    <li><i>&mdash;</i>Живем Scrum’ом (планирования, презентации, ретро, дейли-митинги) </li>\
                    <li><i>&mdash;</i>Пишем unit-тесты, делаем CodeReview и используем Continuous Intergation </li> \
                    <li><i>&mdash;</i>Занимаемся Continuous Delivery’нгом </li> \
                    <li><i>&mdash;</i>Дышим автоматизацией (Mocha, Selenium WebDriver) </li> \
                </ul>\
            </div>',
        point: [-2.8564453124956,-6.3330586227663],
        htmlWidth: 480,
        htmlHeight: 185
    },

    {
        dataHeader: '<div class="dg-api-baloon-title">Технологии</div>',
        data: '<div class="dg-api-baloon-content">\
                <ul class="dg-api-text-list"> \
                    <li><i>&mdash;</i>nodejs, javascript, html5, css3 </li> \
                    <li><i>&mdash;</i>sinonjs, yui3 test </li> \
                    <li><i>&mdash;</i>grunt, phing, chef, mapnik <li> \
                    <li><i>&mdash;</i>python, php </li> \
                </ul>\
            </div>',
        point: [-8.4814453124956,-19.328005949559],
        htmlWidth: 480,
        htmlHeight: 135
    },

    {
        dataHeader: '<div class="dg-api-baloon-title">Бенефиты</div>',
        data: '<div class="dg-api-baloon-content">\
            <ul class="dg-api-text-list"> \
                <li><i>&mdash;</i>Двухэтажный офис на последних этажах высотного здания с замечательным видом на центр Киева </li> \
                <li><i>&mdash;</i>Кормим вкусными завтраками, катаем на самокате(круглый год), усаживаем в мягкие груши </li> \
                <li><i>&mdash;</i>Ездим на it-конференции </li> \
                <li><i>&mdash;</i>Делаем YiiConf, LambaDay, StartupDay, подслушиваем DevDay </li> \
            </ul>\
            </div>',
        point: [23.862304687505,-19.16204784404],
        htmlWidth: 480,
        htmlHeight: 195
    }

];

$(document).ready(function() {
    DG.load(function() {
        var myMap;
        myMap = new DG.Map('map');

        myMap.setCenter(new DG.GeoPoint(-0.043945312495575,19.791241657938), 3);
        myMap.controls.add(new DG.Controls.Zoom());

        DG.Markers.MarkerWithBalloon.prototype._getOwnBalloon = function() {
            this._balloon = new DG.Balloons.Common({
                geoPoint: this.getPosition(),
                adjustMapCenterToBalloon: this._balloonOptions.adjustMapCenterToBalloon,
                contentHtml: this._balloonOptions.contentHtml,
                headerContentHtml: this._balloonOptions.headerContentHtml,
                isClosed: this._balloonOptions.isClosed,
                contentSize: this._balloonOptions.contentSize,
                fixedRelativePosition: this._balloonOptions.fixedRelativePosition,
                maxContentHeight: this._balloonOptions.maxContentHeight,
                maxContentWidth: this._balloonOptions.maxContentWidth
            });
            this._dgMap.balloons.add(this._balloon,'__markerOwnBalloonGroup__');
            this._balloon.show();

        }

        var markerSizes = [];
        markerSizes[3] = {
            size:[25,30],
            offset:[-16,-29]
        };

        markerSizes[4] = {
            size:[50,58],
            offset:[-31,-57]
        };

        markerSizes[5] = {
            size:[98,116],
            offset:[-62,-114]
        };

        var zoom = myMap.getZoom();
        var size = new DG.Size(markerSizes[zoom].size[0],markerSizes[zoom].size[1]);
        var point = new DG.Point(markerSizes[zoom].offset[0],markerSizes[zoom].offset[1]);

        for(idx in data) {
            var item = data[idx];
            var iconImg = new DG.Icon('/assets/frontend/api/api_vacancy/img/1_' + zoom + '.png', size, function() { return point});
            var iconImgHover = new DG.Icon('/assets/frontend/api/api_vacancy/img/1_' + zoom + '-hover.png', size, function() { return point});
            var options = {
                geoPoint: new DG.GeoPoint(item.point[0], item.point[1]),
                icon: iconImg,
                hoverIcon: iconImgHover,
                balloonOptions: {
                    contentHtml: item.data,
                    contentSize: new DG.Size(item.htmlWidth,item.htmlHeight),
                    headerContentHtml: item.dataHeader
                }
            };
            var marker = new DG.Markers.MarkerWithBalloon(options);
            myMap.markers.add(marker);

        }
        DG.myMap = myMap;
        myMap.setZoomRestrictions(3,5);

        var leftBottom = new DG.GeoPoint(-161.2451171875,-84.041598719795);
        var rightTop = new DG.GeoPoint(161.24316406251,84.919092416722);

        myMap.setBoundsRestrictions(new DG.Bounds(leftBottom, rightTop));
        myMap.addEventListener(myMap.getContainerId(), 'DgZoomChange', function(evt){

            var zoom = evt.getZoom();
            var myMap = DG.myMap;
            var markers = myMap.markers.getAll();
            for(idx in markers) {
                var marker = markers[idx];
                var size = new DG.Size(markerSizes[zoom].size[0],markerSizes[zoom].size[1]);
                var point = new DG.Point(markerSizes[zoom].offset[0],markerSizes[zoom].offset[1]);
                marker.setIcon(new DG.Icon('/assets/frontend/api/api_vacancy/img/1_'+ zoom +'.png', size, function() { return point}));
                marker._defaultIcon = new DG.Icon('/assets/frontend/api/api_vacancy/img/1_'+ zoom +'.png', size, function() { return point});
                marker._hoverIcon = new DG.Icon('/assets/frontend/api/api_vacancy/img/1_' + zoom + '-hover.png', size, function() { return point});
            }
        });
    });
});

$(document).ready(function(){
    $('.dg-api-team-preview li').live('click', function(){
        var current = $(this).index();
        var currentItem = $('.dg-api-team li:eq('+ current +')');
        $('.dg-api-team li').not(currentItem).hide();
        currentItem.show();
    });
});
