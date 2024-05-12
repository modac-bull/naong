const path = require('path')

// 스테이징된 파일 목록을 함수가 받아 이를 기반으로 명령을 생성. (스테이징 된 파일 목록과 독립적으로 동작)
const buildEslintCommand = filenames => [
  `next lint --fix --file ${filenames
    .map(f => path.relative(process.cwd(), f))
    .join(' --file ')}`,
  'tsc -p tsconfig.json --pretty --noEmit',
]

// lint-staged가 스테이징된 파일 목록을 자동으로 전달. (스테이징 된 파일 목록과 함께 동작)
module.exports = {
  '*.{js,jsx,ts,tsx}': ['prettier --write', buildEslintCommand],
}
