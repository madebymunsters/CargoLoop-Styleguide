# Activate and configure extensions
# https://middlemanapp.com/advanced/configuration/#configuring-extensions

# Autoprefixer
activate :autoprefixer do |prefix|
  prefix.browsers = "last 2 versions"
end

# Sprockets
activate :sprockets

# Require Helpers
require "helpers/image_helpers"
helpers ImageHelpers

# Markdown
set :markdown_engine, :kramdown
activate :syntax

# Per-page layout changes
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

# Directory Settings
set :css_dir,    'stylesheets'
set :js_dir,     'scripts'
set :images_dir, 'images'
set :relative_links, false

# Build-specific configuration
configure :build do
  target_env = ENV['TARGET'] || ''
  case target_env.to_s.downcase
  when 'prod'
    config[:root_url] = '/CargoLoop-Styleguide/'
  else
    config[:root_url] = '/'
  end

  activate :minify_css
  activate :minify_javascript
  activate :minify_html
  activate :directory_indexes
  activate :gzip
  activate :relative_assets
end

# Deploy To GH-Pages
activate :deploy do |deploy|
  deploy.deploy_method = :git
  deploy.build_before = true
end
