class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  before_action :set_locale

  before_filter :configure_permitted_parameters, if: :devise_controller?

  def set_locale
    if cookies[:educator_locale] && I18n.available_locales.include?(cookies[:educator_locale].to_sym)
      l = cookies[:educator_locale].to_sym
    else
      l = extract_locale_from_tld || I18n.default_locale
      cookies.permanent[:educator_locale] = l
    end
    I18n.locale = l
  end

# Get locale from top-level domain or return nil if such locale is not available
# You have to put something like:
#   127.0.0.1 localanonynet.com
#   127.0.0.1 localanonynet.pl
# in your /etc/hosts file to try this out locally
  def extract_locale_from_tld
    parsed_locale = request.host.split('.').last
    I18n.available_locales.map(&:to_s).include?(parsed_locale) ? parsed_locale : nil
  end

  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.for(:sign_up) do |u|
      u.permit :nickname, :password, :password_confirmation
    end
  end

end