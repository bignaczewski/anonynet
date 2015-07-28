class Contact < MailForm::Base
  attribute :nickname, :name, :surname
  attribute :category, :validate => true
  attribute :message, :validate => true
  attribute :email, :validate => /\A([\w\.%\+\-]+)@([\w\-]+\.)+([\w]{2,})\z/i

  # Declare the e-mail headers. It accepts anything the mail method
  # in ActionMailer accepts.
  def headers
    {
        :subject => %(Anonynet #{category}),
        :to => Devise.mailer_sender,
        :from => %("#{nickname}|#{name}|#{surname}" <#{email}>)
    }
  end

end