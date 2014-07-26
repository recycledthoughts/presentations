#!/usr/bin/env bash

myPWD=`pwd`
[ ! -r roles/common/files/epel-release-6-8.noarch.rpm ] && cd roles/common/files && wget 'https://dl.fedoraproject.org/pub/epel/6/x86_64/epel-release-6-8.noarch.rpm'
cd ${myPWD}
