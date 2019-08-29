#!/bin/sh
echo 'Installing bundler...'
gem install bundler

echo 'Installing gem bundle...'
bundle install
bundle list | grep "jekyll ("

echo 'Building site...'
bundle exec jekyll build

mkdir -p $HOME/.ssh && \
    chmod 0700 $HOME/.ssh && \
    ssh-keyscan damour.xyz > $HOME/.ssh/known_hosts && \
    # Add the keys and set permissions
    echo "$SSH_KEY" > $HOME/.ssh/id_rsa && \
    chmod 600 $HOME/.ssh/id_rsa

echo 'Deleting old site...'
ssh github@damour.xyz "rm -rf /var/www/damour.xyz/*" -o "StrictHostKeyChecking=no"

echo 'Deploying site...'
scp -r /github/workspace/_site/* github@damour.xyz:/var/www/damour.xyz:/var/www/damour.xyz -o "StrictHostKeyChecking=no"

echo 'Site deployed!'

rm -rf $HOME/.ssh/
