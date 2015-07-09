require 'sinatra/base'

class ThermostatWeb < Sinatra::Base
  set :views, proc { File.join(root, 'views') }

  get '/' do
    erb :index
  end

  run! if app_file == $0
end
