import { transporter } from "./sendMail";


export const SendVerficationCode = async (email, verficationCode) =>{
    try {
        const response = await transporter.sendMail({
    from: 'sunny.reliqeagle@gmail.com',
    to: "email",
    subject: "Verify your Email",
    text: "Hello world?", // plain‑text body
    html: "<b>Hello world?</b>", // HTML body
  });

  console.log("Message sent successfully:", response)
    } catch (error) {
        console.log(error);
              
    }
} 