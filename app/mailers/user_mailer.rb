class UserMailer < ApplicationMailer
    default from: 'rexwebcompany@gmail.com'
    layout 'mailer'

    def sample_email(email, mensagem)
        @email  = email
        @mensagem = mensagem
        mail(to: @email, subject: 'Feedback trabalho')
    end




end
