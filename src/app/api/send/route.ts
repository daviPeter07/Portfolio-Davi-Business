import { NextResponse } from "next/server"
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json()

    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <portifolio-davi.com>",
      to: ["davipetersondev173@email.com"],
      subject: `Nova Mensagem do Portfólio: ${subject}`,
      replyTo: email,
      html: `
        <h1>Nova mensagem de contato 🚀</h1>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Assunto:</strong> ${subject}</p>
        <hr />
        <p><strong>Mensagem:</strong></p>
        <p>${message}</p>
      `,
    })

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ message: "Email enviado com sucesso!", data })
  } catch (error) {
    return NextResponse.json({ error: "Algo deu errado." }, { status: 500 })
  }
}