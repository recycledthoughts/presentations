#!/usr/bin/env bash

set -x

vagrant destroy -f
rm VagrantFile
rm -rf .vagrant
