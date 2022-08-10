const nodemailer=require("nodemailer")
const EMAIL="louvenia53@ethereal.email"
const PASSWORD ="7VbTwXUYuuGrqeTUuh"


//transport

const transport =nodemailer.createTransport({
    host:"smtp.ethereal.email",
    port:587, //465
     auth:{
        user:EMAIL,
        pass:PASSWORD
     }

    
})

transport.sendMail({
     from:"Shristi <shristikumari759@gmail.com>",
     to:"ranveerkr759@gmail.com" ,
      subject:"your c1 score" ,
      text:"your c1 score is 10/10"
}).then((info)=>{
    console.log("mail sent successfully",info)
})