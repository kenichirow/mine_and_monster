require 'rubygems'
begin
  require 'bundler'
  Bundler.require
  require './main'
  run Sinatra::Application
rescue LoadError => err
 warn "where's bunder #{err}" 
end
