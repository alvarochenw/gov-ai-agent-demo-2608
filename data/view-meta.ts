import type { ViewName, ViewMeta } from "@/types"

export const viewMeta: Record<string, ViewMeta> = {
  home: {
    title: "首页",
    subtitle: "统一对话入口，调用专业写作能力",
  },
  "write-quick": {
    title: "快速写作",
    subtitle: "直接说明事项和要求，快速生成完整初稿",
  },
  "write-template": {
    title: "模板写作",
    subtitle: "按文种模板规范组织结构",
  },
  "write-style": {
    title: "风格写作",
    subtitle: "按指定口径和表达风格成文",
  },
  "write-ref": {
    title: "以文写文",
    subtitle: "参考已有材料延续结构表达",
  },
  tools: {
    title: "写作工具",
    subtitle: "覆盖起草、修改、校对和定稿环节",
  },
  knowledge: {
    title: "知识库",
    subtitle: "统一管理公文、制度、报告和模板",
  },
  experts: {
    title: "数字专家",
    subtitle: "面向具体公文任务的专业场景助手",
  },
  chat: {
    title: "公文创作",
    subtitle: "正在与 AI 对话创作公文",
  },
}
