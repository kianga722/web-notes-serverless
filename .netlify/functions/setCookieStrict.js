const cookie = require('cookie')

// cookie age 24 hours
const maxAge = 24 * 60 * 60 * 1000;
const cookieRes = cookie.serialize('cookie-strict', 'strict', {
    maxAge,
    path: '/',
    sameSite: 'strict'
})

exports.handler = async function(event, context) {
    return {
        statusCode: 200,
        headers: {
            'Set-Cookie': cookieRes,
        },
        body: `Set Cookie: Max-Age=${maxAge}, SameSite=Strict`
      };
}