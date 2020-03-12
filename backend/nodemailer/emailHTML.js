

class htmlGenerator{

    static generateEmail(body, dbStatus)
    {
       return new Promise((resolve, reject) => {

        let htmlOutput = `
                        <head>
                            <style>
                            p {
                            font-family: Arial, Helvetica, sans-serif;
                            }
                            .lineItem {
                            margin-left: 50px;
                            }

                            img{
                            background: #ffffff;
                            padding: 15px;
                            border-radius: 15px;
                            }
                            </style>
                            <img src='https://i.imgur.com/A6txNGD.png' style='height: 60px'></img>
                        </head>
                        <body>
                            <p>Your Order has been placed!</p>

                            <p> If you would like to modify or cancel your order, click the link below</p>
                            <a href='gatorgroceries.com/edit-order/${dbStatus.id}'>gatorgroceries.com<a>
                            <br></br>

                            <p><strong>Pickup Time:</strong> ${body.pickup}</p>
                            <p><strong>Order:</strong></p>
                        `

        body.order.forEach(line => {
            let htmlLine = `<p class='lineItem'>${line.item}<span> x </span><span>${line.qty}</span></p>`;
            htmlOutput = htmlOutput.concat('\n', htmlLine);
            } 
            )

            htmlOutput = htmlOutput.concat(`</body>`);

            resolve(htmlOutput)
       }) 
    }
}

module.exports = {htmlGenerator}