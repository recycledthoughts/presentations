#!/usr/bin/env bash

set -x

vagrant init hashicorp/precise64
vagrant up
vagrant ssh -c hostname
vagrant destroy -f
rm Vagrantfile
rm -rf .vagrant