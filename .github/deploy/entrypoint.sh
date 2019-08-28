#!/bin/sh
echo 'Installing gem bundle...'
bundle install > /dev/null 2>&1
bundle list | grep "jekyll ("

echo 'Building site...'
bundle exec jekyll build

echo 'Deleting old site...'
ssh github@damour.xyz "rm -rf /var/www/damour.xyz/*" -i $SSH_KEY

echo 'Deploying site...'
scp -r _site/* github@damour.xyz:/var/www/damour.xyz:/var/www/damour.xyz -i $SSH_KEY

echo 'Site deployed!'
