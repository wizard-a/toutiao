/**
 * 验证必填
 */
export const require = (message) => {
  const msg = message || '必填项';
  return { required: true, message: msg };
};

/**
 * 数字，中英文，中横线，下划线，utf-8中文
 */
const name = (message) => {
  const msg = message || '';
  return { pattern: /^[A-Za-z0-9-_\u4e00-\u9fa5]{1,30}$/, message: msg };
};

/**
 * 数字，中英文，中横线，下划线，utf-8中文
 */
const bfEditorRequire = (message) => {
  const msg = message;
  return {
    validator: (rule, value, callback) => {
      if (value && value.trim() !== '<p></p>') {
        callback();
      } else {
        callback(msg);
      }
    },
  };
};

export default {
  require,
  name,
  bfEditorRequire,
}
