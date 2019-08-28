#!/bin/sh
echo "$TEST"

echo 'Installing bundler...'
gem install bundler

echo 'Installing gem bundle...'
bundle install
bundle list | grep "jekyll ("

echo 'Building site...'
bundle exec jekyll build

mkdir -p /github/.ssh && \
    chmod 0700 /github/.ssh && \
    ssh-keyscan damour.xyz > /github/.ssh/known_hosts && \
    # Add the keys and set permissions
    echo "$SSH_KEY" > /github/.ssh/id_rsa && \
    chmod 600 /github/.ssh/id_rsa

echo 'Deleting old site...'
ssh github@damour.xyz "rm -rf /var/www/damour.xyz/*"

echo 'Deploying site...'
scp -r /github/workspace/_site/* github@damour.xyz:/var/www/damour.xyz:/var/www/damour.xyz

echo 'Site deployed!'

rm -rf /github/.ssh/
