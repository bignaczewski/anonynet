class ContactsController < ApplicationController
  def new
    @contact = Contact.new
  end

  def create
    @contact = Contact.new(params[:contact])
    @contact.request = request
    if @contact.deliver
      flash.now[:error] = nil
      flash.now[:notice] = I18n.t('thank_you_for_your_message')
    else
      flash.now[:error] = I18n.t('cannot_send_message')
      render :new
    end
  end
end