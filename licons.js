/*!
 *  licons by Jan Klever - @janklever - http://kleverspace.github.io/licons/
 *
 *
 * A polyfill for browsers that don't support ligatures.
 * The script tag referring to this file must be placed before the ending body tag.
 *
 * To provide support for elements dynamically added, this script adds
 * method 'icomoonLiga' to the window object. You can pass element references to this method.
 *
 */

(function () {
    'use strict';
    function supportsProperty(p) {
        var prefixes = ['Webkit', 'Moz', 'O', 'ms'],
            i,
            div = document.createElement('div'),
            ret = p in div.style;
        if (!ret) {
            p = p.charAt(0).toUpperCase() + p.substr(1);
            for (i = 0; i < prefixes.length; i += 1) {
                ret = prefixes[i] + p in div.style;
                if (ret) {
                    break;
                }
            }
        }
        return ret;
    }
    var icons;
    if (!supportsProperty('fontFeatureSettings')) {
        icons = {
            'accessibility': '&#xe901;',
            'accessibility-alt': '&#xe900;',
            'deaf': '&#xe91b;',
            'bullhorn': '&#xe911;',
            'certificate': '&#xe913;',
            'check': '&#xe915;',
            'close': '&#xe917;',
            'minus': '&#xe93f;',
            'plus': '&#xe94e;',
            'more-or-less': '&#xe941;',
            'divide': '&#xe91d;',
            'percent': '&#xe94a;',
            'permille': '&#xe94b;',
            'dollar': '&#xe91e;',
            'delivery': '&#xe91c;',
            'door-lock': '&#xe91f;',
            'door': '&#xe920;',
            'eye': '&#xe927;',
            'eye-slash': '&#xe926;',
            'flag': '&#xe929;',
            'folder': '&#xe92a;',
            'archive': '&#xe904;',
            'paper': '&#xe947;',
            'paperclip': '&#xe948;',
            'download': '&#xe923;',
            'upload': '&#xe968;',
            'note': '&#xe944;',
            'pencil': '&#xe949;',
            'trash': '&#xe962;',
            'printer': '&#xe94f;',
            'filter': '&#xe928;',
            'balloons': '&#xe907;',
            'birthday-cake': '&#xe90d;',
            'gift': '&#xe92b;',
            'graduation-cap': '&#xe92c;',
            'university': '&#xe965;',
            'trophy': '&#xe963;',
            'black-tie': '&#xe90e;',
            'hashtag': '&#xe92d;',
            'asterisk': '&#xe905;',
            'ampersand': '&#xe902;',
            'home': '&#xe931;',
            'menu': '&#xe93e;',
            'options': '&#xe945;',
            'dots-v': '&#xe922;',
            'dots-h': '&#xe921;',
            'calendar': '&#xe912;',
            'clock': '&#xe916;',
            'bell': '&#xe90c;',
            'share': '&#xe958;',
            'comment': '&#xe918;',
            'chat': '&#xe914;',
            'search': '&#xe956;',
            'settings': '&#xe957;',
            'hourglass': '&#xe932;',
            'rss': '&#xe955;',
            'infinity': '&#xe933;',
            'cursor': '&#xe91a;',
            'laptop': '&#xe936;',
            'bug': '&#xe910;',
            'leaf': '&#xe937;',
            'anchor': '&#xe903;',
            'link': '&#xe938;',
            'magnet': '&#xe93c;',
            'magnet-alt': '&#xe93b;',
            'location-arrow': '&#xe939;',
            'map-marker': '&#xe93d;',
            'phone': '&#xe94c;',
            'mobile': '&#xe940;',
            'envelope': '&#xe924;',
            'at': '&#xe906;',
            'battery-full': '&#xe90a;',
            'battery-hal': '&#xe90b;',
            'battery-empty': '&#xe909;',
            'music': '&#xe943;',
            'music-alt': '&#xe942;',
            'headphones': '&#xe92e;',
            'paper-plane': '&#xe946;',
            'plug': '&#xe94d;',
            'turn-off': '&#xe964;',
            'question': '&#xe950;',
            'exclamation': '&#xe925;',
            'quote-left': '&#xe951;',
            'quote-right': '&#xe952;',
            'quotes': '&#xe953;',
            'copyright': '&#xe919;',
            'registered': '&#xe954;',
            'trademark': '&#xe961;',
            'tag': '&#xe95e;',
            'heart': '&#xe92f;',
            'heartbeat': '&#xe930;',
            'star': '&#xe95c;',
            'star-alt': '&#xe95a;',
            'thumbs-up': '&#xe960;',
            'thumbs-down': '&#xe95f;',
            'ban': '&#xe908;',
            'lock': '&#xe93a;',
            'unlock': '&#xe967;',
            'unlock-alt': '&#xe966;',
            'user': '&#xe96a;',
            'user-alt': '&#xe969;',
            'users': '&#xe96c;',
            'users-alt': '&#xe96b;',
            'info': '&#xe934;',
            'warning': '&#xe96d;',
            'bluetooth': '&#xe90f;',
            'signal': '&#xe959;',
            'wireless': '&#xe96e;',
            'bike': '&#xe971;',
            'bus': '&#xe976;',
            'car': '&#xe978;',
            'subway': '&#xe993;',
            'train': '&#xe997;',
            'book': '&#xe973;',
            'bookmaker': '&#xe974;',
            'glasses': '&#xe983;',
            'briefcase': '&#xe975;',
            'picture': '&#xe98a;',
            'camera': '&#xe977;',
            'flash': '&#xe97f;',
            'coffee': '&#xe97a;',
            'diamond': '&#xe97c;',
            'float': '&#xe980;',
            'fruit-apple': '&#xe981;',
            'glass': '&#xe982;',
            'stethoscope': '&#xe992;',
            'atom': '&#xe96f;',
            'kitasato': '&#xe984;',
            'test-tube': '&#xe996;',
            'drop': '&#xe97d;',
            'drugs': '&#xe97e;',
            'light': '&#xe985;',
            'balance': '&#xe970;',
            'line-chart': '&#xe986;',
            'pie-chart': '&#xe98b;',
            'map': '&#xe987;',
            'mouse': '&#xe989;',
            'compact-disc': '&#xe97b;',
            'pin': '&#xe98d;',
            'pin-alt': '&#xe98c;',
            'sun': '&#xe994;',
            'moon': '&#xe988;',
            'cloud': '&#xe979;',
            'bolt': '&#xe972;',
            'umbrella': '&#xe998;',
            'planet': '&#xe98e;',
            'rocket': '&#xe98f;',
            'shield': '&#xe990;',
            'skull': '&#xe991;',
            'target': '&#xe995;',
            'play': '&#xe9a2;',
            'pause': '&#xe9a1;',
            'stop': '&#xe9a7;',
            'rec': '&#xe9a3;',
            'fast-backward': '&#xe99a;',
            'fast-forward': '&#xe99b;',
            'backward': '&#xe999;',
            'forward': '&#xe99c;',
            'step-left': '&#xe9a5;',
            'step-right': '&#xe9a6;',
            'left': '&#xe99d;',
            'right': '&#xe9a4;',
            'video-camera': '&#xe9a8;',
            'microphone': '&#xe99f;',
            'volume-up': '&#xe9ab;',
            'volume-down': '&#xe9a9;',
            'volume': '&#xe9ac;',
            'volume-off': '&#xe9aa;',
            'maximize': '&#xe99e;',
            'minimize': '&#xe9a0;',
            'female': '&#xe9ad;',
            'male': '&#xe9b0;',
            'mars-double': '&#xe9b1;',
            'venus-double': '&#xe9b7;',
            'intersex': '&#xe9af;',
            'venus-mars': '&#xe9b8;',
            'mars-stroke-h': '&#xe9b2;',
            'mars-stroke-v': '&#xe9b3;',
            'transgender': '&#xe9b6;',
            'mercury': '&#xe9b4;',
            'neuter': '&#xe9b5;',
            'genderless': '&#xe9ae;',
            'apple': '&#xe9b9;',
            'google': '&#xe9c1;',
            'windows': '&#xe9ce;',
            'codepen': '&#xe9bc;',
            'behance': '&#xe9ba;',
            'dribbble': '&#xe9bd;',
            'flickr': '&#xe9bf;',
            'instagram': '&#xe9c2;',
            'linkedin': '&#xe9c3;',
            'medium': '&#xe9c4;',
            'blogger': '&#xe9bb;',
            'wordpress': '&#xe9cf;',
            'facebook': '&#xe9be;',
            'pinterest': '&#xe9c6;',
            'twitter': '&#xe9cb;',
            'snapchat': '&#xe9c9;',
            'vimeo': '&#xe9cc;',
            'youtube': '&#xe9d0;',
            'spotify': '&#xe9ca;',
            'slack': '&#xe9c8;',
            'skype': '&#xe9c7;',
            'foursquare': '&#xe9c0;',
            'paypal': '&#xe9c5;',
            'wikipedia': '&#xe9cd;',
            'angle-double-down': '&#xe9d1;',
            'angle-double-left': '&#xe9d2;',
            'angle-double-right': '&#xe9d3;',
            'angle-double-top': '&#xe9d4;',
            'angle-down': '&#xe9d5;',
            'angle-left': '&#xe9d6;',
            'angle-right': '&#xe9d7;',
            'angle-top': '&#xe9d8;',
            'angles': '&#xe9da;',
            'angles-alt': '&#xe9d9;',
            'arrow-down-left': '&#xe9db;',
            'arrow-down-right': '&#xe9dc;',
            'arrow-down': '&#xe9dd;',
            'arrow-left': '&#xe9de;',
            'arrow-right': '&#xe9df;',
            'arrow-top-left': '&#xe9e0;',
            'arrow-top-right': '&#xe9e1;',
            'arrow-top': '&#xe9e2;',
            'arrows-h': '&#xe9e4;',
            'arrows-oblique-alt': '&#xe9e5;',
            'arrows-oblique': '&#xe9e6;',
            'arrows-v': '&#xe9e7;',
            'arrows-alt': '&#xe9e3;',
            'arrows': '&#xe9e8;',
            'caret-down': '&#xe9e9;',
            'caret-left': '&#xe9ea;',
            'caret-right': '&#xe9eb;',
            'caret-top': '&#xe9ec;',
            'loading': '&#xe9ed;',
            'restart': '&#xe9ef;',
            'random': '&#xe9ee;',
            'slide-h': '&#xe9f1;',
            'slide-h-alt': '&#xe9f0;',
            'slide-v': '&#xe9f3;',
            'slide-v-alt': '&#xe9f2;',
          '0': 0
        };
        delete icons['0'];
        window.icomoonLiga = function (els) {
            var classes,
                el,
                i,
                innerHTML,
                key;
            els = els || document.getElementsByTagName('*');
            if (!els.length) {
                els = [els];
            }
            for (i = 0; ; i += 1) {
                el = els[i];
                if (!el) {
                    break;
                }
                classes = el.className;
                if (/li-/.test(classes)) {
                    innerHTML = el.innerHTML;
                    if (innerHTML && innerHTML.length > 1) {
                        for (key in icons) {
                            if (icons.hasOwnProperty(key)) {
                                innerHTML = innerHTML.replace(new RegExp(key, 'g'), icons[key]);
                            }
                        }
                        el.innerHTML = innerHTML;
                    }
                }
            }
        };
        window.icomoonLiga();
    }
}());
