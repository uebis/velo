export function generateOrderCode() {
    const prefix = 'VLO-';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let suffix = '';
  
    for (let i = 0; i < 6; i++) {
      suffix += characters.charAt(Math.floor(Math.random() * characters.length));
    }
  
    return prefix + suffix;
  }