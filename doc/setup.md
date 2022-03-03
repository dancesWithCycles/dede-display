# Dede-display Setup

Use the following checklist to setup this service on
[Debian Bullseye](https://www.debian.org/releases/bullseye/)

* check out git repositories onto a development system and build the service for the production host as descirpted in the
[Quick Start Guide](../README.md#Quick-Start-Guide)

* enter project root folder to create archive of static web site and copy onto host system
```
cd dede-display
tar -czvf dist.tar.gz dist
scp -p <ssh port> dist.tar.gz  <user>@<host>.<domain>:/home/<user>/
```

* set up service environment on host system
```
sudo mkdir -p /var/www/dede-map
sudo tar -xzvf ~/dist.tar.gz -C /var/www/dede-map/
sudo mv /var/www/dede-map/dist/ /var/www/dede-map/public_html
```
