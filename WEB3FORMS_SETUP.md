# Web3Forms 設定說明

## 如何獲取 Access Key

1. **前往 Web3Forms 網站**
   - 訪問: https://web3forms.com/

2. **獲取免費 Access Key**
   - 點擊 "Get Started Free" 或 "Create Access Key"
   - 輸入你的郵箱地址: `vanessachuliu@gmail.com`
   - 他們會立即發送 Access Key 到你的郵箱

3. **複製 Access Key**
   - 從郵件中複製你的 Access Key (格式類似: `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`)

4. **更新 Contact.js**
   - 打開 `components/Contact.js`
   - 找到第 51 行
   - 將 `YOUR_ACCESS_KEY_HERE` 替換為你的 Access Key

   ```javascript
   access_key: 'your-actual-access-key-here', // 替換這裡
   ```

## 功能說明

### 已實現的功能:
- ✅ 表單數據發送到你的郵箱 (vanessachuliu@gmail.com)
- ✅ 提交按鈕狀態 (發送中顯示 "發送中...")
- ✅ 成功提示訊息 (綠色提示框)
- ✅ 錯誤提示訊息 (紅色提示框)
- ✅ 表單重置 (成功發送後自動清空)
- ✅ 中英文雙語支援
- ✅ 表單欄位在發送時禁用,防止重複提交

### 郵件內容包含:
- 發送者姓名
- 發送者 Email
- 訊息內容
- 主旨: "Portfolio Contact from [發送者姓名]"

## Web3Forms 免費方案特點:
- ✅ 無限制郵件發送
- ✅ 無需信用卡
- ✅ 支援附件 (如果需要的話)
- ✅ 垃圾郵件過濾
- ✅ 自動回覆功能 (可選)

## 測試步驟:

1. 獲取並設定 Access Key
2. 在瀏覽器中打開你的網站
3. 滾動到聯絡表單
4. 填寫測試訊息並提交
5. 檢查你的郵箱 (vanessachuliu@gmail.com)

## 進階選項 (可選):

如果你想要自訂更多功能,可以在 `Contact.js` 的 `handleSubmit` 函數中添加:

```javascript
body: JSON.stringify({
  access_key: 'your-access-key',
  name: formData.name,
  email: formData.email,
  message: formData.message,
  from_name: formData.name,
  subject: `Portfolio Contact from ${formData.name}`,
  // 以下為可選參數:
  redirect: 'https://yourwebsite.com/thank-you', // 成功後重定向
  botcheck: true, // 機器人檢查
  // ... 更多選項請參考 Web3Forms 文檔
})
```

## 疑難排解:

**問題: 沒有收到郵件**
- 檢查垃圾郵件/促銷郵件資料夾
- 確認 Access Key 設定正確
- 檢查瀏覽器 Console 是否有錯誤訊息

**問題: 顯示錯誤訊息**
- 打開瀏覽器開發者工具 (F12)
- 查看 Console 中的錯誤詳情
- 確認網路連接正常

## 相關連結:
- Web3Forms 官網: https://web3forms.com/
- Web3Forms 文檔: https://docs.web3forms.com/
