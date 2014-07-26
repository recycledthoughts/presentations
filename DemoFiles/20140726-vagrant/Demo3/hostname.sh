#!/usr/bin/env bash

OPTIONS="-i ${HOME}/.vagrant.d/insecure_private_key"
OPTIONS="${OPTIONS} -o UserKnownHostsFile=/dev/null"
OPTIONS="${OPTIONS} -o StrictHostKeyChecking=no"

for i in $( seq 0 2 ); do
    ssh ${OPTIONS} vagrant@192.168.251.1${i} 'hostname' 2>/dev/null
done
