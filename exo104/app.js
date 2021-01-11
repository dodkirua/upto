// Le cookie expirera dans 24h, exprimées en millisecondes !
// 1 jour = 86400000 millisecondes.

// Comment créer un cookie, je suis gentil je laisse l'exemple !
document.cookie = "theme=dark; path=/; domain=localhost; max-age=86400000; samesite=strict";
//console.log(document.cookie);


/**
 * Récupère tous les cookies.
 * @returns {string[]}
 */
function getCookies() {
    let cookies = document.cookie.split(';');
    return cookies.map(cookie => cookie.trim());
}


/**
 * TODO Cette fonction doit permettre de créer un nouveau cookie avec le nom et la valeur au choix !
 * @param cookieName
 * @param cookieValue
 */
function setCookie(cookieName, cookieValue) {
    // Le cookie doit être valide 2 jours et doit respecter les normes de sécurité contre les failles CSRF.
    document.cookie = cookieName+"="+cookieValue+"; path=/; domain=localhost; max-age=172800000; samesite=strict";
    //console.log(document.cookie);
}


/**
 * TODO Cette fonction doit retourner la valeur du nom du cookie passé en paramètre.
 * @param cookieName
 */
function getCookie(cookieName) {
    let tmp = getCookies();

    for (let i = 0 ; i < tmp.length ; i++){
        if (tmp[i].startsWith(cookieName)){
            return tmp[i].substring(cookieName.length+1);
        }
    }

}


//console.log(getCookies());

// FIXME Test de setCookie()
setCookie('monCookie', 'maValeur');
console.log(getCookies());

// FIXME test de getCookie(param)
console.log(getCookie('monCookie'));