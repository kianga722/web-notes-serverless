const cookie = require('cookie')

// clear Secure Cookie
const maxAge = 0;
const cookieRes = cookie.serialize('cookie-secure', 'secure', {
    maxAge,
    path: '/',
    secure: true
})

exports.handler = async function(event, context) {
    return {
        statusCode: 200,
        headers: {
            'Set-Cookie': cookieRes,
        },
        body: `Clear Cookie: Secure=true`
      };
}