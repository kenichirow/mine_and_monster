require 'rubygems'
begin
  require 'bundler'
  Bundler.require
  require './hello'
  run Sinatra::Application
rescue LoadError => err
 warn "where's bunder #{err}" 
end
