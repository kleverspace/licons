/* A polyfill for browsers that don't support ligatures. */
/* The script tag referring to this file must be placed before the ending body tag. */

/* To provide support for elements dynamically added, this script adds
   method 'icomoonLiga' to the window object. You can pass element references to this method.
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
            'ampersand': '&#xe902;',
            'anchor': '&#xe90e;',
            'archive': '&#xe91d;',
            'asterisk': '&#xe91e;',
            'at': '&#xe922;',
            'balloons': '&#xe923;',
            'birthday-cake': '&#xe927;',
            'gift': '&#xe959;',
            'turn-off': '&#xe9bb;',
            'ban': '&#xe925;',
            'warning': '&#xe9cb;',
            'bell': '&#xe92d;',
            'bullhorn': '&#xe92e;',
            'calendar': '&#xe934;',
            'certificate': '&#xe9a3;',
            'clock': '&#xe937;',
            'chat': '&#xe935;',
            'comment': '&#xe93c;',
            'copyright': '&#xe93e;',
            'registered': '&#xe99e;',
            'trademark': '&#xe9b7;',
            'delivery': '&#xe940;',
            'dots-h': '&#xe943;',
            'dots-v': '&#xe944;',
            'download': '&#xe945;',
            'envelope': '&#xe948;',
            'exclamation': '&#xe949;',
            'question': '&#xe999;',
            'eye': '&#xe94b;',
            'eye-slash': '&#xe94a;',
            'filter': '&#xe950;',
            'flag': '&#xe903;',
            'graduation-cap': '&#xe95c;',
            'hashtag': '&#xe95d;',
            'heart': '&#xe95f;',
            'home': '&#xe960;',
            'hourglass': '&#xe961;',
            'infinity': '&#xe962;',
            'info': '&#xe963;',
            'laptop': '&#xe967;',
            'leaf': '&#xe968;',
            'link': '&#xe96c;',
            'lock': '&#xe96f;',
            'unlock': '&#xe9c0;',
            'unlock-alt': '&#xe9bf;',
            'magnet': '&#xe971;',
            'magnet-alt': '&#xe970;',
            'map-marker': '&#xe973;',
            'menu': '&#xe97a;',
            'minus': '&#xe97e;',
            'plus': '&#xe997;',
            'more-or-less': '&#xe981;',
            'check': '&#xe936;',
            'close': '&#xe938;',
            'divide': '&#xe941;',
            'dollar': '&#xe942;',
            'percent': '&#xe98d;',
            'permille': '&#xe98e;',
            'music': '&#xe984;',
            'music-alt': '&#xe983;',
            'headphones': '&#xe95e;',
            'note': '&#xe986;',
            'options': '&#xe987;',
            'paper': '&#xe989;',
            'printer': '&#xe998;',
            'paper-plane': '&#xe988;',
            'paperclip': '&#xe98a;',
            'pencil': '&#xe98c;',
            'phone': '&#xe98f;',
            'mobile': '&#xe97f;',
            'quote-left': '&#xe99a;',
            'quote-right': '&#xe99b;',
            'quotes': '&#xe99c;',
            'rss': '&#xe9a1;',
            'search': '&#xe9a2;',
            'settings': '&#xe904;',
            'share': '&#xe9a4;',
            'signal': '&#xe9a6;',
            'wireless': '&#xe9ce;',
            'star': '&#xe9ad;',
            'tag': '&#xe9b2;',
            'thumbs-up': '&#xe9b6;',
            'thumbs-down': '&#xe9b5;',
            'trash': '&#xe9b9;',
            'trophy': '&#xe9ba;',
            'university': '&#xe9be;',
            'user': '&#xe9c1;',
            'users': '&#xe9c2;',
            'bolt': '&#xe929;',
            'flash': '&#xe952;',
            'camera': '&#xe92f;',
            'fruit-apple': '&#xe957;',
            'book': '&#xe92a;',
            'bookmaker': '&#xe92b;',
            'briefcase': '&#xe92c;',
            'coffee': '&#xe93b;',
            'compact-disc': '&#xe93d;',
            'drop': '&#xe946;',
            'drugs': '&#xe947;',
            'float': '&#xe954;',
            'glass': '&#xe95a;',
            'glasses': '&#xe95b;',
            'balance': '&#xe921;',
            'atom': '&#xe91f;',
            'kitasato': '&#xe966;',
            'test-tube': '&#xe9b4;',
            'light': '&#xe96a;',
            'pie-chart': '&#xe991;',
            'line-chart': '&#xe96b;',
            'cloud': '&#xe939;',
            'sun': '&#xe9b1;',
            'moon': '&#xe980;',
            'planet': '&#xe995;',
            'mouse': '&#xe982;',
            'map': '&#xe974;',
            'picture': '&#xe990;',
            'bike': '&#xe926;',
            'pin': '&#xe993;',
            'pin-alt': '&#xe992;',
            'shield': '&#xe9a5;',
            'skull': '&#xe9a7;',
            'target': '&#xe9b3;',
            'umbrella': '&#xe9bd;',
            'maximize': '&#xe978;',
            'minimize': '&#xe97d;',
            'play': '&#xe996;',
            'pause': '&#xe98b;',
            'rec': '&#xe99d;',
            'stop': '&#xe9b0;',
            'backward': '&#xe920;',
            'forward': '&#xe955;',
            'fast-backward': '&#xe94d;',
            'fast-forward': '&#xe94e;',
            'left': '&#xe969;',
            'right': '&#xe9a0;',
            'step-left': '&#xe9ae;',
            'step-right': '&#xe9af;',
            'microphone': '&#xe97c;',
            'video-camera': '&#xe9c5;',
            'volume': '&#xe9ca;',
            'volume-down': '&#xe9c7;',
            'volume-up': '&#xe9c9;',
            'volume-off': '&#xe9c8;',
            'genderless': '&#xe958;',
            'neuter': '&#xe985;',
            'female': '&#xe94f;',
            'male': '&#xe972;',
            'venus-double': '&#xe9c3;',
            'mars-double': '&#xe975;',
            'venus-mars': '&#xe9c4;',
            'intersex': '&#xe965;',
            'mars-stroke-h': '&#xe976;',
            'mars-stroke-v': '&#xe977;',
            'mercury': '&#xe97b;',
            'transgender': '&#xe9b8;',
            'apple': '&#xe90d;',
            'behance': '&#xe924;',
            'blogger': '&#xe928;',
            'codepen': '&#xe93a;',
            'facebook': '&#xe94c;',
            'flickr': '&#xe953;',
            'foursquare': '&#xe956;',
            'instagram': '&#xe96d;',
            'linkedin': '&#xe96e;',
            'medium': '&#xe979;',
            'pinterest': '&#xe994;',
            'skype': '&#xe9a8;',
            'slack': '&#xe9a9;',
            'spotify': '&#xe9ac;',
            'twitter': '&#xe9bc;',
            'vimeo': '&#xe9c6;',
            'wikipedia': '&#xe9cc;',
            'windows': '&#xe9cd;',
            'wordpress': '&#xe9cf;',
            'youtube': '&#xe9d0;',
            'angle-top': '&#xe90a;',
            'angle-down': '&#xe907;',
            'angle-left': '&#xe908;',
            'angle-right': '&#xe909;',
            'angle-double-top': '&#xe906;',
            'angle-double-down': '&#xe905;',
            'angle-double-left': '&#xe90b;',
            'angle-double-right': '&#xe90c;',
            'arrow-top': '&#xe916;',
            'arrow-top-right': '&#xe915;',
            'arrow-right': '&#xe913;',
            'arrow-down-right': '&#xe910;',
            'arrow-down': '&#xe911;',
            'arrow-down-left': '&#xe90f;',
            'arrow-left': '&#xe912;',
            'arrow-top-left': '&#xe914;',
            'arrows': '&#xe91c;',
            'arrows-alt': '&#xe917;',
            'arrows-oblique': '&#xe91a;',
            'arrows-oblique-alt': '&#xe919;',
            'arrows-h': '&#xe918;',
            'arrows-v': '&#xe91b;',
            'slide-h': '&#xe9aa;',
            'slide-v': '&#xe9ab;',
            'caret-top': '&#xe933;',
            'caret-down': '&#xe930;',
            'caret-left': '&#xe931;',
            'caret-right': '&#xe932;',
            'angles-alt': '&#xe93f;',
            'angles': '&#xe951;',
            'loading': '&#xe99f;',
            'restart': '&#xe900;',
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
