module.exports = {
  // 配置类型
  types: [
    { value: 'feat', name: 'feat:     ✨ 新增功能 | A new feature' },
    { value: 'fix', name: 'fix:      🐛 修复缺陷 | A bug fix' },
    {
      value: 'docs',
      name: 'docs:     📝 文档更新 | Documentation only changes'
    },
    {
      value: 'style',
      name: 'style:    💄 代码格式 | Changes that do not affect the meaning of the code'
    },
    {
      value: 'refactor',
      name: 'refactor: ♻️ 代码重构 | A code change that neither fixes a bug nor adds a feature'
    },
    {
      value: 'perf',
      name: 'perf:     ⚡️ 性能提升 | A code change that improves performance'
    },
    {
      value: 'test',
      name: 'test:     ✅ 测试相关 | Adding missing tests or correcting existing tests'
    },
    {
      value: 'build',
      name: 'build:    📦️ 构建相关 | Changes that affect the build system or external dependencies'
    },
    {
      value: 'ci',
      name: 'ci:       🎡 持续集成 | Changes to our CI configuration files and scripts'
    },
    { value: 'revert', name: 'revert:   🔨 回退代码 | Revert to a commit' },
    {
      value: 'chore',
      name: 'chore:    ⏪️ 其他修改 | Other changes that do not modify src or test files'
    }
  ],
  // 作用范围
  scopes: [],
  // 允许自定义作用范围
  allowCustomScopes: true,
  // 允许跳过作用范围选择
  allowBreakingChanges: ['feat', 'fix'],
  // 提示信息
  messages: {
    type: '选择提交类型:',
    scope: '选择作用范围（可选）:',
    customScope: '输入自定义作用范围:',
    subject: '简短描述（必填）:',
    body: '详细描述（可选）。使用 "|" 换行:',
    breaking: '列出不兼容的变更（可选）:',
    footer: '关联的问题编号（可选），如 #123:',
    confirmCommit: '确认提交?'
  },
  subjectLimit: 100
}
