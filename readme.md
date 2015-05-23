# grunt-uncomment-it [![Build Status](https://travis-ci.org/stevemao/grunt-uncomment-it.svg?branch=master)](https://travis-ci.org/stevemao/grunt-uncomment-it)

> Uncomment html, js or css, using [`uncomment-it`](https://github.com/stevemao/uncomment-it)

*Issues with the output should be reported on the `uncomment-it` [issue tracker](https://github.com/stevemao/uncomment-it/issues).*


## Install

```
$ npm install --save-dev grunt-uncomment-it
```


## Usage

```js
require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks

grunt.initConfig({
  uncommentIt: {
    target: {
      src: 'src/index.html',
      dest: 'dest/index.html'
    }
  }
});

grunt.registerTask('default', ['uncommentIt']);
```

**NOTE** If the file `dest` is *NOT* specified, `src` is overwritten. Also only one `src` per `dest` is supported. The first file is used if multiple `src` per `dest` is found. See http://gruntjs.com/configuring-tasks#files for more information on `files`


## License

MIT © [Steve Mao](https://github.com/stevemao)
