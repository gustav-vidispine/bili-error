export default class Size {
  static formatSize(bytes = 0) {
    const units = ['Bytes', 'KB', 'MB', 'GB'];
    const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10);
    if (i === 0) return `${bytes} ${units[i]}`;
    return `${(bytes / (1024 ** i)).toFixed(1)} ${units[i]}`;
  }
}
