const mail = require("@mailersend");

mail.setApiKey(process.env.MAILERSEND_API_KEY);

exports.handler = async function (event, context) {
    const body = JSON.parse(event.body);
    const message = `
    Name: ${body.name}rn
    Email: ${body.email}rn
    Message: ${body.message}
    `;

    await mail.send({
        to:'howeihao3105@gmail.com',
        from:'howeihao3105@gmail.com',
        subject:  `New mail from ${body.name}`,
        text: message,
        html:message.replace(/rn/g, '<br>')
    })

    return{
        statusCode: 200,
        body: JSON.stringify({success: true})
    }
};