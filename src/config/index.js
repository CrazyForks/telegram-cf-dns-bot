require('dotenv').config();

// Telegram Bot配置
const TELEGRAM_TOKEN = process.env.TELEGRAM_TOKEN || 'your_telegram_token_here';

// Cloudflare API配置
const CF_API_TOKEN = process.env.CF_API_TOKEN || 'your_api_token_here';
const CF_API_BASE = 'https://api.cloudflare.com/client/v4/zones';

// 解析EXCLUDE_DOMAINS环境变量
let EXCLUDE_DOMAINS = [];
try {
  EXCLUDE_DOMAINS = (process.env.EXCLUDE_DOMAINS || '').split(',')
    .map(domain => domain.trim())
    .filter(domain => domain.length > 0);
  console.log('排除的域名列表:', EXCLUDE_DOMAINS);
} catch (error) {
  console.error('解析EXCLUDE_DOMAINS环境变量失败:', error.message);
}

// 用户白名单配置
const ALLOWED_CHAT_IDS = (process.env.ALLOWED_CHAT_IDS || '').split(',').map(id => id.trim());

// 会话超时时间
const SESSION_TIMEOUT = 30 * 60 * 1000; // 30分钟

// 轮询检查时间
const CHECK_INTERVAL = 60 * 60 * 1000;  // 60分钟

// 清理会话间隔时间
const CLEAN_SESSION_INTERVAL = 5 * 60 * 1000

// DNS分页大小
const DNS_RECORDS_PAGE_SIZE = 5

module.exports = {
  TELEGRAM_TOKEN,
  CF_API_TOKEN,
  CF_API_BASE,
  ALLOWED_CHAT_IDS,
  SESSION_TIMEOUT,
  CHECK_INTERVAL,
  CLEAN_SESSION_INTERVAL,
  DNS_RECORDS_PAGE_SIZE,
  EXCLUDE_DOMAINS
};
