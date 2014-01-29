module ApplicationHelper
  def avatar_url(user, size)
    gravatar_id = Digest::MD5.hexdigest(user.email.downcase)
    "http://www.gravatar.com/avatar/#{gravatar_id}?s=#{size}"
  end
end
