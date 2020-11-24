const data = [
    {
      "_id": "5f833668e94616874f65f2db",
      "index": 3,
      "guid": "e85871c3-97c8-40db-b3dc-165ae49f4feb",
      "isActive": false,
      "balance": "$1,887.25",
      "picture": "http://placehold.it/32x32",
      "age": 21,
      "eyeColor": "brown",
      "name": "Campos Kane",
      "gender": "male",
      "company": "JETSILK",
      "email": "camposkane@jetsilk.com",
      "phone": "+1 (882) 511-2696"
    },
    {
      "_id": "5f8336684939a4c95ed13123",
      "index": 4,
      "guid": "b1e7ca09-a5e5-4c29-859e-3d269bec9cb8",
      "isActive": false,
      "balance": "$3,919.87",
      "picture": "http://placehold.it/32x32",
      "age": 20,
      "eyeColor": "green",
      "name": "Courtney Atkinson",
      "gender": "female",
      "company": "ANIVET",
      "email": "courtneyatkinson@anivet.com",
      "phone": "+1 (850) 473-2587"
    },
    {
      "_id": "5f833668b623c306077be745",
      "index": 5,
      "guid": "06d17390-5413-4fee-8389-cbeef6054763",
      "isActive": false,
      "balance": "$3,817.73",
      "picture": "http://placehold.it/32x32",
      "age": 21,
      "eyeColor": "blue",
      "name": "Juanita Stark",
      "gender": "female",
      "company": "NSPIRE",
      "email": "juanitastark@nspire.com",
      "phone": "+1 (831) 409-3428"
    }
];


exports.handler = async function(event, context) {
    return {
        statusCode: 200,
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
        },
        body: JSON.stringify(data)
      };
}