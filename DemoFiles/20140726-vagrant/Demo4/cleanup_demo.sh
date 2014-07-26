#!/usr/bin/env bash

set -x

vagrant destroy -f
rm -r Vagrantfile .vagrant
vagrant box remove centos7
rm centos7.box