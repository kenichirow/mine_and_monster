require 'rubygems'
require 'sinatra'

get '/' do
  erb :start
end
get '/game' do
  erb :index
end
