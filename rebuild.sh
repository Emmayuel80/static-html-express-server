#!/bin/bash
network_name='express_network'
[[ ! -z "`sudo docker network ls --filter name=${network_name} -q`" ]] \
  || sudo docker network create ${network_name} --driver bridge;
sudo docker build -t express_network . && (
    sudo docker rm -f html_page 2>/dev/null;
    sudo docker run --restart always --name html_page -p 8080:8080 --network=${network_name} \
    -d express_network
) && sudo docker logs -f html_page;
