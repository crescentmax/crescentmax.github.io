# Chengyan Tsai / Max — Portfolio

A Jekyll portfolio for software engineering, game development, and technical art.

## Run locally on Windows

The project uses Ruby, Bundler, Jekyll, and the Minimal Mistakes theme.

```powershell
ruby --version
bundle --version
bundle install
bundle exec jekyll serve --livereload --force_polling
```

Open <http://127.0.0.1:4000>.

If you only want the smaller local-development dependency set, use:

```powershell
$env:BUNDLE_GEMFILE = "local/Gemfile"
bundle install
bundle exec jekyll serve --config local/_config.yml --livereload --force_polling
```

If the gems are already installed globally and Bundler is blocked by a platform-specific lockfile, this fallback starts the site without resolving the main bundle:

```powershell
$env:JEKYLL_NO_BUNDLER_REQUIRE = "true"
jekyll serve --config local/_config.yml --force_polling
```

The generated local site is written to `.jekyll-local/` and is ignored by Git.
