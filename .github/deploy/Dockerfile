FROM ruby:2.6.1

RUN echo "${TEST}"

# Set default locale for the environment
ENV LC_ALL C.UTF-8
ENV LANG en_US.UTF-8
ENV LANGUAGE en_US.UTF-8

LABEL "com.github.actions.name"="Jekyll Build Deploy"
LABEL "com.github.actions.description"="Build and deploy Jekyll site"
LABEL "com.github.actions.icon"="mic"
LABEL "com.github.actions.color"="purple"

LABEL "repository"="http://github.com/damouryouknow/damour.xyz"
LABEL "homepage"="https://damour.xyz"
LABEL "maintainer"="DamourYouKnow <contact@damour.xyz>"

ADD entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]