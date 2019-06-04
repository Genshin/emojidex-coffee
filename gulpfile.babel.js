import gulp from 'gulp';
import pkg from './package.json';
import header from 'gulp-header';
import rename from 'gulp-rename';
import del from 'del';
import runSequence from 'run-sequence';
import babel from 'gulp-babel';
import concat from 'gulp-concat';
import uglify from 'gulp-uglify';
import eslint from 'gulp-eslint';
import jasmineBrowser from 'gulp-jasmine-browser';
import watch from 'gulp-watch';
import fs from 'fs-extra';
import markdownDocs from 'gulp-markdown-docs';
import sass from 'gulp-sass';
import slim from 'gulp-slim';
import cssmin from 'gulp-cssmin';
import strip from 'gulp-strip-banner';
import sourceMaps from 'gulp-sourcemaps';
import browserSync from 'browser-sync'

gulp.task('env', () => {
  fs.stat('.env', (err, stat) => {
    if (err === null) {
      console.log("*Found .env file; incorporating user auth data into specs.*");
      console.log("NOTE: if your user is not Premium with R-18 enabled some specs will fail.");
      const dotenv = require('dotenv')
      const envConfig = dotenv.parse(fs.readFileSync('.env'))
      for (var k in envConfig) {
        process.env[k] = envConfig[k]
      }
      let output = `
        let user_info = {
          auth_user: '${process.env.USERNAME}',
          email: '${process.env.EMAIL}',
          password: '${process.env.PASSWORD}',
          auth_token: '${process.env.AUTH_TOKEN}'
        };
        let premium_user_info = {
          auth_user: '${process.env.USERNAME}',
          auth_token: '${process.env.AUTH_TOKEN}'
        };
      `;
      fs.ensureFileSync('tmp/authinfo.js');
      fs.writeFileSync('tmp/authinfo.js', output);
    } else {
      console.log("*.env file not found; only some specs will run.*");
      console.log("Check the '.env' secion in README.md for details on how to set .env");
      fs.ensureFileSync('tmp/authinfo.js');
      fs.writeFileSync('tmp/authinfo.js', '');
    }
  });
});

let banner =
  '/*\n' +
  ' * <%= pkg.title || pkg.name %> - v<%= pkg.version %>\n' +
  ' * <%= pkg.description %>\n' +
  ' * <%= pkg.homepage %>\n' +
  ' *\n' +
  ' * Includes:\n' +
  ' *   emojidexReplace, emojidexAutocomplete\n' +
  ' *\n' +
  ' * =LICENSE=\n' +
  ' * <%= pkg.license.description %>\n' +
  ' * <%= pkg.license.url %>\n' +
  ' *\n' +
  ' * <%= pkg.license.copyright %>\n' +
  ' *\n' +
  ' *\n' +
  ' * Includes:\n' +
  ' * --------------------------------\n' +
  '*/\n';

gulp.task('clean-spec', () => {
  del.sync('build/spec/**/*.js');
});
gulp.task('clean-compiled', () => {
  del.sync([
    'src/compiled_js/**/*',
    'src/compiled_css/**/*',
    'build/js/**/*',
    'dist',
    'docs'
    ]);
});
gulp.task('clean', () => {
  return gulp.parallel('clean-spec', 'clean-compiled');
});

gulp.task('md2html', () => {
  return gulp
    .src(['README.md'])
    .pipe(markdownDocs('index.html', {
      layoutStylesheetUrl: '',
      templatePath: 'dist/index.html'
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('sass', () => {
  return gulp.src(['src/sass/*.sass', 'src/sass/*.scss'])
    .pipe(sourceMaps.init())
    .pipe(sass())
    .pipe(sourceMaps.write('.'))
    .pipe(gulp.dest('src/compiled_css'));
});

gulp.task('slim-dist', () => {
  return gulp.src(['src/slim/*.slim'])
    .pipe(slim({ pretty: true }))
    .pipe(gulp.dest('dist'));
});
gulp.task('slim-spec', () => {
  return gulp.src(['spec/fixture/*.slim'])
    .pipe(slim({ pretty: true }))
    .pipe(gulp.dest('build/spec/fixture'));
});
gulp.task('slim', () => {
  return gulp.parallel('slim-dist', 'slim-spec');
});

gulp.task('babel', () => {
  return gulp
    .src(['src/es6/**/*.js'])
    .pipe(sourceMaps.init())
    .pipe(babel({
      "presets": [
        [
          "@babel/preset-env",
          {
            "useBuiltIns": "entry"
          }
        ]
      ]
    }))
    .pipe(sourceMaps.write('.'))
    .pipe(gulp.dest('build/js'))
});
// TODO: webpack
// gulp.task('webpack', function () {
//   let webpack_p = require('webpack-stream').webpack
//   return gulp.src(['src/es6/client.js'])
//     .pipe(webpack({
//       output: {
//         filename: 'emojidex-client.js',
//         library: 'EmojidexClient'
//       },
//       module: {
//         loaders: [
//           {
//             test: /\.js$/,
//             exclude: /node_modules/,
//             loader: 'babel-loader'
//           }
//         ]
//       },
//       plugins: [
//         new webpack_p.ProvidePlugin({
//           $: 'jquery',
//           'window.$': 'jquery'
//         })
//       ]
//     }))
//     .pipe(gulp.dest('dist/js/'));
// });

gulp.task('uglify-emojidex', () => {
  return gulp
    .src('dist/js/emojidex.js')
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('dist/js'));
});
gulp.task('uglify-bootstrap', () => {
  return gulp
    .src('node_modules/bootstrap-sass/assets/javascripts/bootstrap.js')
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('dist/resources'));
});
gulp.task('uglify', () => {
  return gulp.parallel('uglify-emojidex', 'uglify-bootstrap');
});

gulp.task('banner-js', () => {
  return gulp
    .src('dist/js/*.js')
    .pipe(header(banner, { pkg: pkg }))
    .pipe(gulp.dest('dist/js/'));
});

gulp.task('banner-css', () => {
  return gulp
    .src('dist/css/*.css')
    .pipe(header(banner, { pkg: pkg }))
    .pipe(gulp.dest('dist/css/'));
});

gulp.task('cssmin-emojidex', () => {
  gulp.src('dist/css/emojidex.css')
    .pipe(cssmin())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('dist/css'));
});
gulp.task('cssmin-document', () => {
  gulp.src('src/compiled_css/document.css')
    .pipe(cssmin())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('dist/css'));
});
gulp.task('cssmin', () => {
  return gulp.parallel('cssmin-emojidex', 'cssmin-document');
});

gulp.task('copy-img', () => {
  return gulp
    .src('src/img/**/*')
    .pipe(gulp.dest('dist/img'));
});
gulp.task('copy-bootstrap', () => {
  return gulp
    .src('node_modules/bootstrap-sass/assets/fonts/**/*')
    .pipe(gulp.dest('dist/fonts'));
});
gulp.task('copy-jquery', () => {
  return gulp
    .src('node_modules/jquery/dist/jquery.min.js')
    .pipe(gulp.dest('dist/resources'));
});
gulp.task('copy-docs', () => {
  return gulp
    .src('dist/**/*')
    .pipe(gulp.dest('docs'));
});
gulp.task('copy', () => {
  return gulp.series(gulp.parallel('copy-img', 'copy-bootstrap', 'copy-jquery'), 'copy-docs');
});

gulp.task('concat-js', () => {
  return gulp
    .src([
      'node_modules/bootstrap-sass/assets/javascripts/bootstrap/tab.js',
      'src/vendor/jquery-ui-1.12.1.custom/jquery-ui.min.js',
      'node_modules/emojidex-client/dist/js/emojidex-client.min.js',
      'node_modules/jquery-textcomplete/dist/jquery.textcomplete.min.js',
      'node_modules/clipboard/dist/clipboard.min.js',
      'node_modules/jquery.caret/dist/jquery.caret.min.js',
      'build/js/**/*.js'
    ])
    .pipe(concat('emojidex.js'))
    .pipe(strip())
    .pipe(gulp.dest('dist/js'));
});
gulp.task('concat-css', () => {
  return gulp
    .src([
      'src/compiled_css/emojidex.css'
    ])
    .pipe(concat('emojidex.css'))
    .pipe(gulp.dest('dist/css'));
});
gulp.task('concat', () => {
  return gulp.parallel('concat-js', 'concat-css');
});

gulp.task('concat-spec', () => {
  let file = fs.readFileSync('build/spec/fixture/index.html', 'utf8');
  fs.writeFileSync('build/spec/fixture/html.js', `var html = \`${file}\``);
  return gulp
    .src([ 'spec/helpers/method.js', 'build/spec/fixture/html.js'])
    .pipe(concat('html_in_method.js'))
    .pipe(gulp.dest('build/spec/fixture'));
});

// TODO:
gulp.task('jasmine', () => {
  let testFiles = [
    'node_modules/cross-storage/dist/client.js',
    'node_modules/jquery/dist/jquery.js',
    'node_modules/jasmine-jquery/lib/jasmine-jquery.js',
    'node_modules/jquery-watch/jquery-watch.js',
    'dist/js/emojidex.js',
    'spec/helpers/data.js',
    'build/spec/fixture/html_in_method.js',
    'tmp/authinfo.js',
    'dist/img/logo.png',
    'dist/css/document.min.css',
    'dist/css/emojidex.min.css',
    'spec/emojidexAutocomplete.js',
    'spec/palette/user_login.js',
    'spec/palette/*.js',
    'spec/emojidexReplace.js'
  ];
  return gulp.src(testFiles)
    .pipe(watch(testFiles))
    .pipe(jasmineBrowser.specRunner())
    .pipe(jasmineBrowser.server());
});

gulp.task('lint', () => {
  return gulp.src(['src/es6/**/*.js','!node_modules/**'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('watch', () => {
  gulp.watch('src/sass/*', ['watch-sass']);
  gulp.watch(['src/es6/**/*.js', 'spec/**/*.js'], ['watch-js']);
  gulp.watch('src/slim/**/*.slim', ['watch-slim']);
});

gulp.task('browser-sync', () => {
  browserSync.init({
    server: {
      baseDir: './dist',
      index: 'index.html'
    },
    browser: ['google chrome', 'google-chrome', 'firefox']
  });
});

gulp.task('browser-reload', () => {
  browserSync.reload();
});

gulp.task('default', () => {
  gulp.series('clean', 'slim', 'md2html', 'sass', 'babel', 'concat', 'uglify', 'cssmin', 'copy', 'banner-js', 'banner-css');
});

gulp.task('spec', () => {
  gulp.series('default', 'env', 'concat-spec', 'jasmine');
});

// TODO: lint
gulp.task('dev', () => {
  gulp.series('default', 'watch', 'browser-sync');
});

gulp.task('watch-js', () => {
  gulp.series('babel', 'concat-js', 'browser-reload');
});

gulp.task('watch-slim', () => {
  gulp.series('slim', 'md2html', 'browser-reload');
});

gulp.task('watch-sass', () => {
  gulp.series('sass', 'concat-css', 'cssmin', 'browser-reload');
})
