#CLI config files diff generator 

[![Maintainability](https://api.codeclimate.com/v1/badges/47bd0d4ce823410ad44f/maintainability)](https://codeclimate.com/github/batemir/project-lvl2-s233/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/47bd0d4ce823410ad44f/test_coverage)](https://codeclimate.com/github/batemir/project-lvl2-s233/test_coverage)
[![Build Status](https://travis-ci.org/batemir/project-lvl2-s233.svg?branch=master)](https://travis-ci.org/batemir/project-lvl2-s233)

##About
Utility for finding difference between two configuration files.

##Installation
```
npm install -g gendiff_by_batemir
```

##Usage
```
$ gendiff --format plain first-config.ini second-config.ini
Setting "common.setting2" deleted.
Setting "common.setting4" added with value "blah blah".
Setting "group1.baz" changed from "bas" to "bars".
Section "group2" deleted.
```
##Supported formats
-json
-yaml
-ini

##Output formats
-plain text
-json
