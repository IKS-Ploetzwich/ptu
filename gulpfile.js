const gulp = require('gulp')
const ts = require('gulp-typescript');
const sass = require('gulp-sass');
const project = ts.createProject('tsconfig.json');


gulp.task('sass', () => {
  return gulp.src('src/styles/ptu.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist/'))
})

gulp.task('compile', () => {
  return gulp.src('src/**/*.ts')
    .pipe(project())
    .pipe(gulp.dest('dist/'))
})

gulp.task('copy', async () => {
  return new Promise((resolve,reject) => {
    gulp.src('README.md').pipe(gulp.dest("dist/"))
    gulp.src('src/system.json').pipe(gulp.dest('dist/'))
    gulp.src('src/template.json').pipe(gulp.dest('dist/'))
    gulp.src('src/templates/**').pipe(gulp.dest('dist/templates/'))
    gulp.src('src/assets/**').pipe(gulp.dest('dist/assets/'))
    resolve(undefined);
  })
})

gulp.task('build', gulp.parallel('compile', 'copy', 'sass'));


// This is supposed to copy the dist folder into the modules directory for testing. Only works if you've set it up the right way
//This works if development path is E:\FoundryVTT\Data\systems\ptu
const MODULEPATH = "E:\\FoundryVTT\\Data\\systems\\ptu"

gulp.task('foundry', () => {
  return gulp.src('dist/**').pipe(gulp.dest(MODULEPATH))
})

gulp.task("update", gulp.series('build', 'foundry'))
