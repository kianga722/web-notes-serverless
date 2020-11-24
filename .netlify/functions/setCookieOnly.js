const cookie = require('cookie')

// cookie age 24 hours
const maxAge = 24 * 60 * 60 * 1000;
const cookieRes = cookie.serialize('cookie-only', 'http-only', {
    maxAge,
    path: '/',
    httpOnly: true
})

exports.handler = async function(event, context) {
    return {
        statusCode: 200,
        headers: {
            'Set-Cookie': cookieRes,
        },
        body: `Set Cookie: Max-Age=${maxAge}, HttpOnly=true`
      };
}